import { shallowRef } from 'vue'

export interface LifeProfile {
  name: string
  birth_date: string
  birth_time: string
  avatar?: string
  bazi: string[]
  bazi_labels: string[]
  vaccine_grace_days: number
  storage_key: string
  version: string
}

export interface LifeAnchor {
  id: number
  name: string
  date: string
  type: string
  repeat: boolean
  icon: string
}

export interface LifeMilestone {
  id: number
  date: string
  time?: string
  title: string
  icon: string
  category: string
  detail: string
}

export interface LifeVaccine {
  id: number
  name: string
  age: string
  offset_months: number
  actual_date?: string
  type: string
  technology: string
  route: string
  desc: string
  detail: string
}

export interface LifeGrowthStage {
  id: string
  label: string
  start_month: number
  end_month: number
  theme: string
  body: string
  vision: string
  motor: string[]
  social: string[]
  feeding: string
  sleep: string
  care: string[]
  watch: string[]
}

export interface LifeRecordEntry {
  time: string
  note: string
  special?: boolean
}

export interface LifeRecordDay {
  date: string
  entries: LifeRecordEntry[]
}

export interface LifeDiaperUsage {
  date: string
  size: string
  used_count?: number
  opened_count?: number
  remaining_count?: number
  note?: string
}

export interface LifeData {
  profile: LifeProfile
  anchors: LifeAnchor[]
  milestones: LifeMilestone[]
  vaccines: LifeVaccine[]
  records: LifeRecordDay[]
  growthStages: LifeGrowthStage[]
  diaperUsage: LifeDiaperUsage[]
}

interface ApiSecretConfig {
  sourceName: string
  binFile: string
  timeZone: string
  keyPrefixFormat: string
  generatedAt?: string
  kdf?: {
    iterations?: number
  }
}

interface GiteeContentResponse {
  content: string
  encoding?: string
  sha?: string
}

interface GiteeErrorResponse {
  message?: string
}

const GITEE_API_BASE = 'https://gitee.com/api/v5'
const GITEE_OWNER = 'nkxrb'
const GITEE_REPO = 'anzai-data'
const GITEE_DATA_DIR = 'life/data'
const GITEE_REF = ''
const TOKEN_SOURCE_NAME = 'az'
const TOKEN_SECRET_STORAGE_KEY = 'life-data-token-secret'
const DEFAULT_KDF_ITERATIONS = 310000
const encoder = new TextEncoder()
const decoder = new TextDecoder()

export const lifeData = shallowRef<LifeData | null>(null)
export const lifeDataLoading = shallowRef(true)
export const lifeDataError = shallowRef('')
export const lifeDataSecretRequired = shallowRef(false)

let tokenPromise: Promise<string> | null = null
let dataPromise: Promise<LifeData | null> | null = null
let runtimeTokenSecret = ''

function siteAssetUrl(path: string) {
  const base = import.meta.env.BASE_URL || '/'
  return `${base.replace(/\/$/, '')}/${path.replace(/^\//, '')}`
}

function encodePath(path: string) {
  return path.split('/').map(encodeURIComponent).join('/')
}

function formatKeyPrefix(date: Date, timeZone: string, keyPrefixFormat: string) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    hourCycle: 'h23'
  }).formatToParts(date)
  const byType = Object.fromEntries(parts.map(part => [part.type, part.value]))

  return keyPrefixFormat
    .replaceAll('yyyy', byType.year)
    .replaceAll('MM', byType.month)
    .replaceAll('dd', byType.day)
    .replaceAll('HH', byType.hour)
}

function splitFixedSecret(fixedSecret: string) {
  if (!fixedSecret) throw new Error('fixedSecret is required')
  return fixedSecret.split('0')
}

function buildLayerKeyMaterials(keyPrefix: string, fixedSecret: string) {
  return splitFixedSecret(fixedSecret).map(part => `${keyPrefix}${part}`)
}

function readStoredTokenSecret() {
  if (runtimeTokenSecret) return runtimeTokenSecret
  if (typeof window === 'undefined') return ''

  const hash = window.location.hash.replace(/^#/, '')
  const hashParams = new URLSearchParams(hash)
  const hashSecret = hashParams.get('life_key') || hashParams.get('life_secret')
  if (hashSecret) {
    runtimeTokenSecret = hashSecret
    try {
      window.localStorage.setItem(TOKEN_SECRET_STORAGE_KEY, hashSecret)
    } catch {}

    hashParams.delete('life_key')
    hashParams.delete('life_secret')
    const nextHash = hashParams.toString()
    window.history.replaceState(
      null,
      '',
      `${window.location.pathname}${window.location.search}${nextHash ? `#${nextHash}` : ''}`
    )
    return hashSecret
  }

  try {
    runtimeTokenSecret = window.localStorage.getItem(TOKEN_SECRET_STORAGE_KEY) || ''
  } catch {
    runtimeTokenSecret = ''
  }
  return runtimeTokenSecret
}

function getTokenSecret() {
  const fixedSecret = readStoredTokenSecret()
  lifeDataSecretRequired.value = !fixedSecret
  if (!fixedSecret) throw new Error('缺少数据访问密钥')
  return fixedSecret
}

async function sha256Bytes(value: string | Uint8Array) {
  const input = typeof value === 'string' ? encoder.encode(value) : value
  return new Uint8Array(await crypto.subtle.digest('SHA-256', input))
}

async function deriveLayerParams(sourceName: string, hourToken: string, layerIndex: number, keyMaterial: string) {
  const base = `api-secret:v1:${sourceName}:${hourToken}:${layerIndex}`
  const salt = (await sha256Bytes(`${base}:salt`)).slice(0, 16)
  const iv = (await sha256Bytes(`${base}:iv:${keyMaterial}`)).slice(0, 12)
  return { salt, iv }
}

async function deriveAesGcmKey(keyMaterial: string, salt: Uint8Array, iterations: number) {
  const baseKey = await crypto.subtle.importKey(
    'raw',
    encoder.encode(keyMaterial),
    'PBKDF2',
    false,
    ['deriveKey']
  )

  return crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      hash: 'SHA-256',
      salt,
      iterations
    },
    baseKey,
    {
      name: 'AES-GCM',
      length: 256
    },
    false,
    ['decrypt']
  )
}

async function decryptBytes(bytes: Uint8Array, keyMaterial: string, salt: Uint8Array, iv: Uint8Array, iterations: number) {
  const key = await deriveAesGcmKey(keyMaterial, salt, iterations)
  const decrypted = await crypto.subtle.decrypt({ name: 'AES-GCM', iv }, key, bytes)
  return new Uint8Array(decrypted)
}

async function decryptBin(ciphertext: Uint8Array, config: ApiSecretConfig, fixedSecret: string, date: Date) {
  const hourToken = formatKeyPrefix(date, config.timeZone, config.keyPrefixFormat)
  const keyMaterials = buildLayerKeyMaterials(hourToken, fixedSecret)
  const iterations = config.kdf?.iterations ?? DEFAULT_KDF_ITERATIONS
  let currentValue = ciphertext

  for (let index = keyMaterials.length - 1; index >= 0; index -= 1) {
    const keyMaterial = keyMaterials[index]
    const { salt, iv } = await deriveLayerParams(config.sourceName, hourToken, index, keyMaterial)
    currentValue = await decryptBytes(currentValue, keyMaterial, salt, iv, iterations)
  }

  return decoder.decode(currentValue)
}

async function fetchJson<T>(url: string) {
  const response = await fetch(url, { cache: 'no-store' })
  if (!response.ok) throw new Error(`请求失败：${response.status}`)
  return response.json() as Promise<T>
}

async function decryptGiteeToken() {
  const fixedSecret = getTokenSecret()
  const config = await fetchJson<ApiSecretConfig>(siteAssetUrl(`/api/${TOKEN_SOURCE_NAME}.json`))
  const binResponse = await fetch(siteAssetUrl(`/api/${config.binFile}`), { cache: 'no-store' })
  if (!binResponse.ok) throw new Error(`令牌密文请求失败：${binResponse.status}`)

  const ciphertext = new Uint8Array(await binResponse.arrayBuffer())
  const dates = [
    config.generatedAt ? new Date(config.generatedAt) : null,
    new Date()
  ].filter((date): date is Date => Boolean(date) && !Number.isNaN(date.getTime()))

  let lastError: unknown
  for (const date of dates) {
    try {
      return await decryptBin(ciphertext, config, fixedSecret, date)
    } catch (error) {
      lastError = error
    }
  }

  throw lastError instanceof Error ? lastError : new Error('令牌解密失败')
}

async function getGiteeToken() {
  if (!tokenPromise) tokenPromise = decryptGiteeToken()
  return tokenPromise
}

function decodeBase64Utf8(value: string) {
  const binary = atob(value.replace(/\s/g, ''))
  const bytes = Uint8Array.from(binary, char => char.charCodeAt(0))
  return decoder.decode(bytes)
}

async function fetchGiteeJson<T>(fileName: string) {
  const token = await getGiteeToken()
  const url = new URL(`${GITEE_API_BASE}/repos/${GITEE_OWNER}/${GITEE_REPO}/contents/${encodePath(`${GITEE_DATA_DIR}/${fileName}`)}`)
  url.searchParams.set('access_token', token)
  if (GITEE_REF) url.searchParams.set('ref', GITEE_REF)

  const response = await fetch(url, {
    headers: {
      Accept: 'application/json'
    },
    cache: 'no-store'
  })
  if (!response.ok) {
    let detail = ''
    try {
      const errorPayload = await response.json() as GiteeErrorResponse
      detail = errorPayload.message ? `：${errorPayload.message}` : ''
    } catch {}
    throw new Error(`Gitee 数据请求失败：${fileName} ${response.status}${detail}`)
  }

  const payload = await response.json() as GiteeContentResponse
  if (!payload.content) throw new Error(`Gitee 数据为空：${fileName}`)

  return JSON.parse(decodeBase64Utf8(payload.content)) as T
}

async function fetchOptionalGiteeJson<T>(fileName: string, fallback: T) {
  try {
    return await fetchGiteeJson<T>(fileName)
  } catch (error) {
    if (error instanceof Error && error.message.includes(`${fileName} 404`)) return fallback
    throw error
  }
}

async function loadLifeData() {
  const [profile, anchors, milestones, vaccines, records, growthStages, diaperUsage] = await Promise.all([
    fetchGiteeJson<LifeProfile>('profile.json'),
    fetchGiteeJson<LifeAnchor[]>('anchors.json'),
    fetchGiteeJson<LifeMilestone[]>('milestones.json'),
    fetchGiteeJson<LifeVaccine[]>('vaccines.json'),
    fetchGiteeJson<LifeRecordDay[]>('newborn-records.json'),
    fetchGiteeJson<LifeGrowthStage[]>('growth-stages.json'),
    fetchOptionalGiteeJson<LifeDiaperUsage[]>('diaper-usage.json', [])
  ])

  return { profile, anchors, milestones, vaccines, records, growthStages, diaperUsage }
}

export async function ensureLifeData(options: { force?: boolean } = {}) {
  if (lifeData.value && !options.force) return lifeData.value
  if (options.force) tokenPromise = null
  if (!dataPromise || options.force) {
    lifeDataLoading.value = true
    lifeDataError.value = ''
    dataPromise = loadLifeData()
      .then(data => {
        lifeData.value = data
        return data
      })
      .catch(error => {
        lifeDataError.value = error instanceof Error ? error.message : 'Gitee 数据加载失败'
        return null
      })
      .finally(() => {
        lifeDataLoading.value = false
      })
  }

  return dataPromise
}

export async function setLifeDataSecret(secret: string) {
  runtimeTokenSecret = secret.trim()
  tokenPromise = null
  dataPromise = null
  lifeDataError.value = ''
  lifeDataSecretRequired.value = !runtimeTokenSecret

  if (typeof window !== 'undefined') {
    try {
      if (runtimeTokenSecret) {
        window.localStorage.setItem(TOKEN_SECRET_STORAGE_KEY, runtimeTokenSecret)
      } else {
        window.localStorage.removeItem(TOKEN_SECRET_STORAGE_KEY)
      }
    } catch {}
  }

  return ensureLifeData({ force: true })
}

export function hasLifeDataSecret() {
  return Boolean(readStoredTokenSecret())
}

export function clearLifeDataSecret() {
  runtimeTokenSecret = ''
  tokenPromise = null
  dataPromise = null
  lifeData.value = null
  lifeDataError.value = ''
  lifeDataSecretRequired.value = true

  if (typeof window !== 'undefined') {
    try {
      window.localStorage.removeItem(TOKEN_SECRET_STORAGE_KEY)
    } catch {}
  }
}
