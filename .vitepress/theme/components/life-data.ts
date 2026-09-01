import { shallowRef } from 'vue'
import anchorsJson from '../../../life/data/anchors.json'
import bodyMeasurementsJson from '../../../life/data/body-measurements.json'
import diaperUsageJson from '../../../life/data/diaper-usage.json'
import growthStagesJson from '../../../life/data/growth-stages.json'
import milestonesJson from '../../../life/data/milestones.json'
import newbornRecordsJson from '../../../life/data/newborn-records.json'
import profileJson from '../../../life/data/profile.json'
import vaccineRecordsJson from '../../../life/data/vaccine-records.json'
import vaccinesJson from '../../../life/data/vaccines.json'

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
  funding?: 'free' | 'self_paid'
  type: string
  technology: string
  route: string
  desc: string
  detail: string
  before?: string[]
  after?: string[]
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

export type LifeRecordCategory =
  | 'breastfeeding'
  | 'stool'
  | 'urine'
  | 'diaper'
  | 'clothes'
  | 'bath'
  | 'vaccine'
  | 'sleep'
  | 'food'
  | 'teeth'
  | 'medicine'
  | 'play'
  | 'special'

export interface LifeRecordEntry {
  time: string
  note: string
  special?: boolean
  categories?: LifeRecordCategory[]
  duration_minutes?: number
  ended_at?: string
  source?: 'static' | 'pending'
  created_at?: string
  local_id?: string
}

export interface LifeRecordDay {
  date: string
  entries: LifeRecordEntry[]
}

export interface LifeRecordLocator {
  date: string
  time: string
  note: string
  special?: boolean
  local_id?: string
}

export interface LifeDiaperUsage {
  date: string
  size: string
  used_count?: number
  opened_count?: number
  remaining_count?: number
  note?: string
}

export interface LifeVaccineCompletion {
  id: number
  actual_date: string
  note?: string
}

export interface LifeVaccineRecords {
  selected_optional_ids: number[]
  completions: LifeVaccineCompletion[]
}

export interface LifeBodyMeasurement {
  date: string
  time?: string
  weight_jin?: number
  weight_kg?: number
  height_cm?: number
  head_circumference_cm?: number
  note?: string
  created_at?: string
  local_id?: string
  source?: 'static' | 'pending'
}

export interface LifeData {
  profile: LifeProfile
  anchors: LifeAnchor[]
  milestones: LifeMilestone[]
  vaccines: LifeVaccine[]
  vaccineRecords: LifeVaccineRecords
  records: LifeRecordDay[]
  growthStages: LifeGrowthStage[]
  diaperUsage: LifeDiaperUsage[]
  bodyMeasurements: LifeBodyMeasurement[]
}

const TOKEN_SECRET_STORAGE_KEY = 'life-data-token-secret'
const REMOTE_API_BASE = `https://${'git'}${'ee.com'}/api/v5`
const REMOTE_OWNER = 'nkxrb'
const REMOTE_REPO = `${'an'}${'zai'}-${'data'}`
const REMOTE_DATA_DIR = ['life', 'data'].join('/')
const REMOTE_REF = ''
const TOKEN_SOURCE_NAME = 'az'
const NEWBORN_RECORDS_FILE = 'newborn-records.json'
const DIAPER_USAGE_FILE = 'diaper-usage.json'
const VACCINE_RECORDS_FILE = 'vaccine-records.json'
const BODY_MEASUREMENTS_FILE = 'body-measurements.json'
const DEFAULT_KDF_ITERATIONS = 310000
const encoder = new TextEncoder()
const decoder = new TextDecoder()

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

interface RemoteContentResponse {
  content: string
  encoding?: string
  sha?: string
}

interface RemoteErrorResponse {
  message?: string
}

function isMissingRemoteContent(error: unknown, fileName: string) {
  return error instanceof Error && (
    error.message.includes(`${fileName} 404`) ||
    error.message.includes(`远程数据不存在：${fileName}`)
  )
}

export const lifeData = shallowRef<LifeData | null>(null)
export const lifeDataLoading = shallowRef(true)
export const lifeDataError = shallowRef('')
export const lifeDataSecretRequired = shallowRef(false)

let dataPromise: Promise<LifeData | null> | null = null
let tokenPromise: Promise<string> | null = null
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

async function decryptRemoteToken() {
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

async function getRemoteToken() {
  if (!tokenPromise) tokenPromise = decryptRemoteToken()
  return tokenPromise
}

function decodeBase64Utf8(value: string) {
  const binary = atob(value.replace(/\s/g, ''))
  const bytes = Uint8Array.from(binary, char => char.charCodeAt(0))
  return decoder.decode(bytes)
}

function encodeBase64Utf8(value: string) {
  const bytes = encoder.encode(value)
  let binary = ''
  const chunkSize = 0x8000
  for (let index = 0; index < bytes.length; index += chunkSize) {
    binary += String.fromCharCode(...bytes.slice(index, index + chunkSize))
  }
  return btoa(binary)
}

function cleanRecordEntry(entry: LifeRecordEntry): LifeRecordEntry {
  return {
    time: entry.time,
    note: entry.note,
    ...(entry.special ? { special: true } : {}),
    ...(entry.categories?.length ? { categories: entry.categories } : {}),
    ...(typeof entry.duration_minutes === 'number' ? { duration_minutes: entry.duration_minutes } : {}),
    ...(entry.ended_at ? { ended_at: entry.ended_at } : {}),
    ...(entry.created_at ? { created_at: entry.created_at } : {}),
    ...(entry.local_id ? { local_id: entry.local_id } : {})
  }
}

function recordIdentity(date: string, entry: LifeRecordEntry) {
  return entry.local_id || `${date}|${entry.time}|${entry.note}|${entry.special ? '1' : '0'}`
}

function recordMatches(date: string, entry: LifeRecordEntry, locator: LifeRecordLocator) {
  if (date !== locator.date) return false
  if (locator.local_id || entry.local_id) return entry.local_id === locator.local_id
  return entry.time === locator.time &&
    entry.note === locator.note &&
    Boolean(entry.special) === Boolean(locator.special)
}

function entrySortMinutes(entry: LifeRecordEntry) {
  const match = entry.time.match(/^(\d{1,2}):(\d{2})/)
  if (!match) return Number.POSITIVE_INFINITY
  return Number(match[1]) * 60 + Number(match[2])
}

function sortRecordDays(records: LifeRecordDay[]) {
  return [...records]
    .map(day => ({
      date: day.date,
      entries: [...day.entries]
        .map(cleanRecordEntry)
        .sort((a, b) => entrySortMinutes(a) - entrySortMinutes(b) || a.time.localeCompare(b.time, 'zh-CN'))
    }))
    .sort((a, b) => a.date.localeCompare(b.date))
}

function replaceLifeRecord(records: LifeRecordDay[], locator: LifeRecordLocator, nextDate: string, nextEntry: LifeRecordEntry) {
  let found = false
  const nextRecords = records.map(day => {
    const remainingEntries: LifeRecordEntry[] = []
    for (const entry of day.entries) {
      if (recordMatches(day.date, entry, locator)) {
        found = true
        continue
      }
      remainingEntries.push(entry)
    }
    return { date: day.date, entries: remainingEntries }
  }).filter(day => day.entries.length > 0)

  if (!found) throw new Error('原记录未找到，请刷新后重试')

  const targetDay = nextRecords.find(day => day.date === nextDate)
  if (targetDay) {
    targetDay.entries.push(nextEntry)
  } else {
    nextRecords.push({ date: nextDate, entries: [nextEntry] })
  }

  return sortRecordDays(nextRecords)
}

function deleteLifeRecord(records: LifeRecordDay[], locator: LifeRecordLocator) {
  let found = false
  const nextRecords = records.map(day => ({
    date: day.date,
    entries: day.entries.filter(entry => {
      const matched = recordMatches(day.date, entry, locator)
      if (matched) found = true
      return !matched
    })
  })).filter(day => day.entries.length > 0)

  if (!found) throw new Error('原记录未找到，请刷新后重试')
  return sortRecordDays(nextRecords)
}

function mergeLifeRecords(baseRecords: LifeRecordDay[], incomingRecords: LifeRecordDay[]) {
  const map = new Map<string, LifeRecordEntry[]>()
  const seen = new Set<string>()
  const addEntry = (date: string, entry: LifeRecordEntry) => {
    const key = recordIdentity(date, entry)
    if (seen.has(key)) return
    seen.add(key)
    const entries = map.get(date) || []
    entries.push(cleanRecordEntry(entry))
    map.set(date, entries)
  }

  for (const day of baseRecords) {
    for (const entry of day.entries) addEntry(day.date, entry)
  }
  for (const day of incomingRecords) {
    for (const entry of day.entries) addEntry(day.date, entry)
  }

  return sortRecordDays([...map.entries()].map(([date, entries]) => ({ date, entries })))
}

async function getRemoteContent<T>(fileName: string) {
  const token = await getRemoteToken()
  const url = new URL(`${REMOTE_API_BASE}/repos/${REMOTE_OWNER}/${REMOTE_REPO}/contents/${encodePath(`${REMOTE_DATA_DIR}/${fileName}`)}`)
  url.searchParams.set('access_token', token)
  if (REMOTE_REF) url.searchParams.set('ref', REMOTE_REF)

  const response = await fetch(url, {
    headers: {
      Accept: 'application/json'
    },
    cache: 'no-store'
  })
  if (!response.ok) {
    let detail = ''
    try {
      const errorPayload = await response.json() as RemoteErrorResponse
      detail = errorPayload.message ? `：${errorPayload.message}` : ''
    } catch {}
    throw new Error(`远程数据请求失败：${fileName} ${response.status}${detail}`)
  }

  const payload = await response.json() as RemoteContentResponse | RemoteContentResponse[]
  if (Array.isArray(payload)) {
    if (payload.length === 0) throw new Error(`远程数据不存在：${fileName} 404`)
    throw new Error(`远程数据路径不是文件：${fileName}`)
  }
  if (!payload.content || !payload.sha) throw new Error(`远程数据为空：${fileName}`)

  return {
    sha: payload.sha,
    data: JSON.parse(decodeBase64Utf8(payload.content)) as T
  }
}

async function updateRemoteContent(fileName: string, content: string, sha: string, message: string) {
  const token = await getRemoteToken()
  const url = new URL(`${REMOTE_API_BASE}/repos/${REMOTE_OWNER}/${REMOTE_REPO}/contents/${encodePath(`${REMOTE_DATA_DIR}/${fileName}`)}`)
  url.searchParams.set('access_token', token)

  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message,
      content: encodeBase64Utf8(content),
      sha,
      ...(REMOTE_REF ? { branch: REMOTE_REF } : {})
    })
  })
  if (!response.ok) {
    let detail = ''
    try {
      const errorPayload = await response.json() as RemoteErrorResponse
      detail = errorPayload.message ? `：${errorPayload.message}` : ''
    } catch {}
    throw new Error(`远程数据写入失败：${fileName} ${response.status}${detail}`)
  }
}

async function createRemoteContent(fileName: string, content: string, message: string) {
  const token = await getRemoteToken()
  const url = new URL(`${REMOTE_API_BASE}/repos/${REMOTE_OWNER}/${REMOTE_REPO}/contents/${encodePath(`${REMOTE_DATA_DIR}/${fileName}`)}`)
  url.searchParams.set('access_token', token)

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message,
      content: encodeBase64Utf8(content),
      ...(REMOTE_REF ? { branch: REMOTE_REF } : {})
    })
  })
  if (!response.ok) {
    let detail = ''
    try {
      const errorPayload = await response.json() as RemoteErrorResponse
      detail = errorPayload.message ? `：${errorPayload.message}` : ''
    } catch {}
    throw new Error(`远程数据创建失败：${fileName} ${response.status}${detail}`)
  }
}

async function fetchOptionalRemoteJson<T>(fileName: string, fallback: T) {
  try {
    const remote = await getRemoteContent<T>(fileName)
    return remote.data
  } catch (error) {
    if (isMissingRemoteContent(error, fileName)) return fallback
    throw error
  }
}

async function updateRemoteJson<T>(fileName: string, updater: (data: T) => T, fallback: T, message: string) {
  try {
    const remote = await getRemoteContent<T>(fileName)
    const nextData = updater(remote.data ?? fallback)
    await updateRemoteContent(fileName, `${JSON.stringify(nextData, null, 2)}\n`, remote.sha, message)
    return nextData
  } catch (error) {
    if (!isMissingRemoteContent(error, fileName)) throw error
    const nextData = updater(fallback)
    await createRemoteContent(fileName, `${JSON.stringify(nextData, null, 2)}\n`, message)
    return nextData
  }
}

function normalizeVaccineRecords(records: LifeVaccineRecords): LifeVaccineRecords {
  return {
    selected_optional_ids: Array.isArray(records.selected_optional_ids)
      ? records.selected_optional_ids.map(Number).filter(Number.isInteger)
      : [],
    completions: Array.isArray(records.completions)
      ? records.completions
        .filter(item => Number.isInteger(Number(item.id)) && typeof item.actual_date === 'string')
        .map(item => ({ id: Number(item.id), actual_date: item.actual_date, ...(item.note ? { note: item.note } : {}) }))
      : []
  }
}

function mergeVaccineRecords(vaccines: LifeVaccine[], records: LifeVaccineRecords) {
  const completionMap = new Map(records.completions.map(item => [item.id, item.actual_date]))
  return vaccines.map(vaccine => ({
    ...vaccine,
    ...(completionMap.has(vaccine.id) ? { actual_date: completionMap.get(vaccine.id) } : {})
  }))
}

async function loadLifeData() {
  const staticVaccineRecords = normalizeVaccineRecords(vaccineRecordsJson as LifeVaccineRecords)
  const staticMutable = {
    records: newbornRecordsJson as LifeRecordDay[],
    diaperUsage: diaperUsageJson as LifeDiaperUsage[],
    vaccineRecords: staticVaccineRecords,
    bodyMeasurements: bodyMeasurementsJson as LifeBodyMeasurement[]
  }
  let mutable = staticMutable

  if (hasLifeDataSecret()) {
    try {
      const [records, diaperUsage, vaccineRecords, bodyMeasurements] = await Promise.all([
        fetchOptionalRemoteJson<LifeRecordDay[]>(NEWBORN_RECORDS_FILE, staticMutable.records),
        fetchOptionalRemoteJson<LifeDiaperUsage[]>(DIAPER_USAGE_FILE, staticMutable.diaperUsage),
        fetchOptionalRemoteJson<LifeVaccineRecords>(VACCINE_RECORDS_FILE, staticMutable.vaccineRecords),
        fetchOptionalRemoteJson<LifeBodyMeasurement[]>(BODY_MEASUREMENTS_FILE, staticMutable.bodyMeasurements)
      ])
      mutable = {
        records,
        diaperUsage,
        vaccineRecords: normalizeVaccineRecords(vaccineRecords),
        bodyMeasurements
      }
    } catch (error) {
      lifeDataError.value = error instanceof Error ? error.message : '远程数据加载失败，已使用本地静态快照'
    }
  }

  return {
    profile: profileJson as LifeProfile,
    anchors: anchorsJson as LifeAnchor[],
    milestones: milestonesJson as LifeMilestone[],
    vaccines: mergeVaccineRecords(vaccinesJson as LifeVaccine[], mutable.vaccineRecords),
    vaccineRecords: mutable.vaccineRecords,
    records: sortRecordDays(mutable.records),
    growthStages: growthStagesJson as LifeGrowthStage[],
    diaperUsage: mutable.diaperUsage,
    bodyMeasurements: mutable.bodyMeasurements
  }
}

export async function ensureLifeData(options: { force?: boolean } = {}) {
  if (lifeData.value && !options.force) return lifeData.value
  if (!dataPromise || options.force) {
    lifeDataLoading.value = true
    lifeDataError.value = ''
    lifeDataSecretRequired.value = false
    dataPromise = loadLifeData()
      .then(data => {
        lifeData.value = data
        return data
      })
      .catch(error => {
        lifeDataError.value = error instanceof Error ? error.message : '静态数据加载失败'
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
  lifeDataError.value = ''
  lifeDataSecretRequired.value = false

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

export async function appendLifeRecordsToRemote(records: LifeRecordDay[]) {
  if (!records.length) return lifeData.value?.records ?? []

  const nextRecords = await updateRemoteJson<LifeRecordDay[]>(
    NEWBORN_RECORDS_FILE,
    currentRecords => mergeLifeRecords(currentRecords, records),
    newbornRecordsJson as LifeRecordDay[],
    `chore(life): update newborn records`
  )

  if (lifeData.value) {
    lifeData.value = {
      ...lifeData.value,
      records: nextRecords
    }
  }

  return nextRecords
}

export async function appendLifeRecordToRemote(date: string, entry: LifeRecordEntry) {
  return appendLifeRecordsToRemote([{ date, entries: [entry] }])
}

export async function updateLifeRecordInRemote(locator: LifeRecordLocator, nextDate: string, nextEntry: LifeRecordEntry) {
  const nextRecords = await updateRemoteJson<LifeRecordDay[]>(
    NEWBORN_RECORDS_FILE,
    currentRecords => replaceLifeRecord(currentRecords, locator, nextDate, nextEntry),
    newbornRecordsJson as LifeRecordDay[],
    `chore(life): edit newborn record`
  )

  if (lifeData.value) {
    lifeData.value = {
      ...lifeData.value,
      records: nextRecords
    }
  }

  return nextRecords
}

export async function deleteLifeRecordFromRemote(locator: LifeRecordLocator) {
  const nextRecords = await updateRemoteJson<LifeRecordDay[]>(
    NEWBORN_RECORDS_FILE,
    currentRecords => deleteLifeRecord(currentRecords, locator),
    newbornRecordsJson as LifeRecordDay[],
    `chore(life): delete newborn record`
  )

  if (lifeData.value) {
    lifeData.value = {
      ...lifeData.value,
      records: nextRecords
    }
  }

  return nextRecords
}

export async function upsertBodyMeasurementToRemote(measurement: LifeBodyMeasurement) {
  const weightJin = typeof measurement.weight_jin === 'number'
    ? measurement.weight_jin
    : typeof measurement.weight_kg === 'number'
      ? Math.round(measurement.weight_kg * 20) / 10
      : undefined
  const cleanMeasurement: LifeBodyMeasurement = {
    date: measurement.date,
    ...(measurement.time ? { time: measurement.time } : {}),
    ...(typeof weightJin === 'number' ? { weight_jin: weightJin } : {}),
    ...(typeof measurement.height_cm === 'number' ? { height_cm: measurement.height_cm } : {}),
    ...(typeof measurement.head_circumference_cm === 'number' ? { head_circumference_cm: measurement.head_circumference_cm } : {}),
    ...(measurement.note ? { note: measurement.note } : {}),
    ...(measurement.created_at ? { created_at: measurement.created_at } : {}),
    ...(measurement.local_id ? { local_id: measurement.local_id } : {})
  }
  const nextMeasurements = await updateRemoteJson<LifeBodyMeasurement[]>(
    BODY_MEASUREMENTS_FILE,
    measurements => {
      const filtered = measurements.filter(item => item.date !== cleanMeasurement.date)
      return [...filtered, cleanMeasurement].sort((a, b) => a.date.localeCompare(b.date))
    },
    bodyMeasurementsJson as LifeBodyMeasurement[],
    `chore(life): update body measurements`
  )

  if (lifeData.value) {
    lifeData.value = {
      ...lifeData.value,
      bodyMeasurements: nextMeasurements
    }
  }

  return nextMeasurements
}

export async function updateVaccineRecordsToRemote(records: LifeVaccineRecords) {
  const normalized = normalizeVaccineRecords(records)
  const nextRecords = await updateRemoteJson<LifeVaccineRecords>(
    VACCINE_RECORDS_FILE,
    () => normalized,
    normalizeVaccineRecords(vaccineRecordsJson as LifeVaccineRecords),
    `chore(life): update vaccine records`
  )

  if (lifeData.value) {
    lifeData.value = {
      ...lifeData.value,
      vaccineRecords: nextRecords,
      vaccines: mergeVaccineRecords(vaccinesJson as LifeVaccine[], nextRecords)
    }
  }

  return nextRecords
}

export function hasLifeDataSecret() {
  return Boolean(readStoredTokenSecret())
}

export function clearLifeDataSecret() {
  runtimeTokenSecret = ''
  tokenPromise = null
  lifeDataError.value = ''
  lifeDataSecretRequired.value = false

  if (typeof window !== 'undefined') {
    try {
      window.localStorage.removeItem(TOKEN_SECRET_STORAGE_KEY)
    } catch {}
  }
}
