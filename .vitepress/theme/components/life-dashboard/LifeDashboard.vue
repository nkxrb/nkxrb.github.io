<template>
  <main class="life-app">
    <div v-if="isDataLoading" class="life-loading" role="status">
      <strong>正在同步家庭数据</strong>
      <span>通过 Gitee 数据仓库读取最新记录</span>
    </div>
    <div v-else-if="dataError" class="life-loading life-loading--error" role="alert">
      <strong>数据加载失败</strong>
      <span>{{ dataError }}</span>
      <form v-if="isSecretRequired" class="life-secret-form" @submit.prevent="submitDataSecret">
        <input v-model="dataSecret" type="password" placeholder="数据访问密钥" autocomplete="current-password">
        <button type="submit">同步</button>
      </form>
      <button type="button" @click="reloadData">重试</button>
    </div>
    <template v-else>
      <section
      class="hero"
      :class="{ 'is-flipping': isFlipping }"
      aria-label="生命时光总览"
      @click="flipDays"
    >
      <div class="hero__glow hero__glow--one" />
      <div class="hero__glow hero__glow--two" />
      <div v-if="showConfetti" class="confetti" aria-hidden="true">
        <i v-for="piece in 18" :key="piece" :style="confettiStyle(piece)" />
      </div>

      <a class="hero__back" href="/" aria-label="返回站点首页" @click.stop>
        <span aria-hidden="true">←</span>
        <span>返回</span>
      </a>
      <img class="hero__avatar" :src="avatarUrl" :alt="`${profile.name}的头像`">
      <p class="hero__eyebrow">{{ profile.name }} · LIFETIME</p>
      <div class="hero__number" aria-live="polite">{{ formatNumber(totalDays) }}</div>
      <p class="hero__unit">来到世界的第 {{ formatNumber(totalDays + 1) }} 天</p>
      <div class="hero__rule"><span /></div>
      <p class="hero__age">生于 {{ formatDate(birthDate) }} {{ profile.birth_time }} · 现年 {{ ageText }}</p>
      <p class="hero__hint"><span aria-hidden="true">⌁</span> 轻触数字，重温这一刻</p>
    </section>

    <div class="dashboard-shell">
      <section class="identity-card" aria-label="出生信息">
        <div class="identity-card__intro">
          <span>生辰八字</span>
          <strong>四柱留印 · 岁月作笺</strong>
        </div>
        <div class="bazi-grid">
          <div v-for="(pillar, index) in profile.bazi" :key="pillar">
            <span>{{ profile.bazi_labels[index] }}</span>
            <strong>{{ pillar }}</strong>
          </div>
        </div>
      </section>

      <section class="dashboard-section anchor-section" aria-labelledby="anchor-title">
        <header class="section-heading">
          <div>
            <p class="section-kicker">TIME MARKS</p>
            <h1 id="anchor-title">时光锚点</h1>
          </div>
          <p class="section-note">每一个日子，都在认真生长</p>
        </header>

        <div class="anchor-carousel" aria-label="时光锚点卡片">
          <article v-for="anchor in anchorCards" :key="anchor.id" class="anchor-card">
            <div class="anchor-card__top">
              <span class="anchor-card__icon" aria-hidden="true">{{ anchor.icon }}</span>
              <span class="anchor-card__tag">{{ anchor.tag }}</span>
            </div>
            <p class="anchor-card__name">{{ anchor.name }}</p>
            <p class="anchor-card__days"><strong>{{ formatNumber(anchor.days) }}</strong><span>天</span></p>
            <div class="anchor-card__progress" aria-hidden="true">
              <span :style="{ width: `${anchor.progress}%` }" />
            </div>
            <div class="anchor-card__foot">
              <span>{{ anchor.nextLabel }}</span>
              <time :datetime="anchor.date">{{ formatDate(anchor.date, true) }}</time>
            </div>
          </article>
        </div>
        <div class="swipe-cue" aria-hidden="true"><span /><span /><span /></div>
      </section>

      <div class="journey-divider" aria-hidden="true"><span /><i /><span /></div>

      <section class="dashboard-section milestone-section" aria-labelledby="milestone-title">
        <header class="section-heading">
          <div>
            <p class="section-kicker">MILESTONES</p>
            <h2 id="milestone-title">特别时刻</h2>
          </div>
          <a class="calendar-link" href="/life/calendar/">打开成长日历 <span aria-hidden="true">→</span></a>
        </header>
        <div class="milestone-list">
          <article v-for="item in visibleMilestones" :key="item.id" class="milestone-item" :class="{ 'is-future': item.isFuture }">
            <div class="milestone-item__icon" aria-hidden="true">{{ item.icon }}</div>
            <div>
              <p><time :datetime="item.date">{{ formatDate(item.date) }}</time><span>{{ item.category }}</span></p>
              <strong>{{ item.title }}</strong>
              <small>{{ item.detail }}</small>
            </div>
          </article>
        </div>
      </section>

      <div class="journey-divider" aria-hidden="true"><span /><i /><span /></div>

      <LifeInsights
        :profile="profile"
        :records="recordsData"
        :growth-stages="growthStagesData"
        :diaper-usage="diaperUsageData"
        :today="today"
      />

      <section class="dashboard-section vaccine-section" aria-labelledby="vaccine-title">
        <header class="section-heading section-heading--vaccines">
          <div>
            <p class="section-kicker">VACCINE PLAN</p>
            <h2 id="vaccine-title">疫苗接种日历</h2>
          </div>
          <span class="completion-count">{{ completedCount }}/{{ vaccineRows.length }} 已完成</span>
        </header>

        <div class="next-banner" :class="`next-banner--${nextReminder.tone}`">
          <div class="next-banner__icon" aria-hidden="true">{{ nextReminder.icon }}</div>
          <div>
            <p>{{ nextReminder.label }}</p>
            <strong>{{ nextReminder.title }}</strong>
            <span>{{ nextReminder.detail }}</span>
          </div>
        </div>

        <p class="timeline-help">轻触疫苗名称查看说明，轻触右侧状态完成标记</p>

        <ol class="vaccine-timeline">
          <li
            v-for="row in vaccineRows"
            :key="row.id"
            class="vaccine-row"
            :class="[
              `vaccine-row--${row.status}`,
              { 'vaccine-row--urgent': row.urgent, 'vaccine-row--just-completed': highlightedId === row.id }
            ]"
            tabindex="0"
            @click="openVaccineInfo(row)"
            @keydown.enter="openVaccineInfo(row)"
          >
            <div class="vaccine-row__age">
              <span v-if="row.urgent" class="urgent-dot" aria-label="七天内待接种" />
              <strong>{{ row.age }}</strong>
            </div>
            <div class="vaccine-row__rail" aria-hidden="true"><span /></div>
            <div class="vaccine-row__content">
              <strong>{{ row.name }}</strong>
              <time v-if="row.status === 'completed' && row.actualDateIso" :datetime="row.actualDateIso">已于 {{ formatDate(row.actualDateIso) }} 接种</time>
              <time v-else :datetime="row.dateIso">建议 {{ formatDate(row.dateIso) }}</time>
            </div>
            <button
              class="status-pill"
              :class="`status-pill--${row.status}`"
              type="button"
              :aria-label="`${row.name}：${row.statusLabel}，点击修改`"
              @click.stop="openStatusSheet(row)"
            >
              <span aria-hidden="true">{{ row.statusIcon }}</span>{{ row.statusLabel }}
            </button>
          </li>
        </ol>
      </section>

      <footer class="dashboard-footer">
        <p><span aria-hidden="true">⌂</span> 建议将本页面添加至主屏幕，随时查看</p>
        <div class="data-tools">
          <button type="button" @click="exportMarks">导出标记数据</button>
          <span aria-hidden="true">·</span>
          <button type="button" @click="chooseImport">导入恢复</button>
          <input ref="importInput" type="file" accept="application/json,.json" hidden @change="importMarks">
        </div>
        <small>仅供家庭记录参考 · 接种安排请以当地接种门诊意见为准 · v{{ profile.version }}</small>
      </footer>
    </div>

    <Transition name="toast">
      <div v-if="toastMessage" class="toast" role="status">{{ toastMessage }}</div>
    </Transition>

    <Transition name="sheet">
      <div v-if="sheetVaccine" class="sheet-layer" role="presentation" @click.self="closeSheet">
        <section class="action-sheet" role="dialog" aria-modal="true" aria-labelledby="sheet-title">
          <div class="action-sheet__handle" />
          <div class="action-sheet__symbol" :class="{ 'is-complete': sheetVaccine.status === 'completed' }" aria-hidden="true">
            {{ sheetVaccine.status === 'completed' ? '✓' : '＋' }}
          </div>
          <p class="section-kicker">VACCINE STATUS</p>
          <h2 id="sheet-title">{{ sheetTitle }}</h2>
          <p>
            {{ sheetVaccine.name }} ·
            {{ sheetVaccine.status === 'completed' && sheetVaccine.actualDateIso ? `已于 ${formatDate(sheetVaccine.actualDateIso)} 接种` : `建议 ${formatDate(sheetVaccine.dateIso)}` }}
          </p>
          <button class="sheet-primary" type="button" @click="confirmStatusChange">{{ sheetActionText }}</button>
          <button class="sheet-cancel" type="button" @click="closeSheet">取消</button>
        </section>
      </div>
    </Transition>

    <Transition name="sheet">
      <div v-if="infoVaccine" class="sheet-layer info-layer" role="presentation" @click.self="closeVaccineInfo">
        <section class="vaccine-info-sheet" role="dialog" aria-modal="true" aria-labelledby="vaccine-info-title">
          <button class="info-close" type="button" aria-label="关闭疫苗介绍" @click="closeVaccineInfo">×</button>
          <p class="section-kicker">VACCINE GUIDE</p>
          <h2 id="vaccine-info-title">{{ infoVaccine.name }}</h2>
          <p class="vaccine-info-sheet__lead">{{ infoVaccine.desc }}</p>
          <dl class="vaccine-properties">
            <div><dt>疫苗属性</dt><dd>{{ infoVaccine.type }}</dd></div>
            <div><dt>技术类型</dt><dd>{{ infoVaccine.technology }}</dd></div>
            <div><dt>接种方式</dt><dd>{{ infoVaccine.route }}</dd></div>
            <div><dt>建议月龄</dt><dd>{{ infoVaccine.age }}</dd></div>
          </dl>
          <div class="vaccine-detail-copy">
            <span>详细介绍</span>
            <p>{{ infoVaccine.detail }}</p>
          </div>
          <p class="medical-note">信息仅作家庭记录与通识参考，疫苗产品、禁忌、剂次和接种日期请以接种证及当地门诊医嘱为准。</p>
        </section>
      </div>
    </Transition>
    </template>
  </main>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import avatarUrl from '../../../../life/assets/avatar.jpg'
import LifeInsights from '../life-insights/LifeInsights.vue'
import {
  ensureLifeData,
  lifeData,
  lifeDataError,
  lifeDataLoading,
  lifeDataSecretRequired,
  setLifeDataSecret,
  type LifeAnchor,
  type LifeProfile,
  type LifeVaccine
} from '../life-data'

type Anchor = LifeAnchor
type Vaccine = LifeVaccine
type VaccineStatus = 'completed' | 'overdue' | 'pending'

interface VaccineRow extends Vaccine {
  date: Date
  dateIso: string
  actualDateIso: string | null
  daysUntil: number
  status: VaccineStatus
  statusLabel: string
  statusIcon: string
  urgent: boolean
}

const DAY_MS = 86_400_000
const emptyProfile: LifeProfile = {
  name: '',
  birth_date: '1970-01-01',
  birth_time: '',
  avatar: '',
  bazi: [],
  bazi_labels: [],
  vaccine_grace_days: 30,
  storage_key: 'life-dashboard-vaccine-completions',
  version: ''
}
const profile = computed(() => lifeData.value?.profile ?? emptyProfile)
const anchorsData = computed(() => lifeData.value?.anchors ?? [])
const milestonesData = computed(() => lifeData.value?.milestones ?? [])
const vaccinesData = computed(() => lifeData.value?.vaccines ?? [])
const recordsData = computed(() => lifeData.value?.records ?? [])
const growthStagesData = computed(() => lifeData.value?.growthStages ?? [])
const diaperUsageData = computed(() => lifeData.value?.diaperUsage ?? [])
const birthDate = computed(() => parseDate(profile.value.birth_date))
const today = ref(startOfDay(new Date()))
const defaultCompletedIds = computed(() => vaccinesData.value
  .filter(hasActualDate)
  .map(vaccine => vaccine.id))
const completedIds = ref<Set<number>>(new Set())
const isFlipping = ref(false)
const showConfetti = ref(false)
const toastMessage = ref('')
const sheetVaccine = ref<VaccineRow | null>(null)
const infoVaccine = ref<VaccineRow | null>(null)
const importInput = ref<HTMLInputElement | null>(null)
const highlightedId = ref<number | null>(null)
const dataSecret = ref('')

let toastTimer: ReturnType<typeof setTimeout> | undefined
let flipTimer: ReturnType<typeof setTimeout> | undefined
let confettiTimer: ReturnType<typeof setTimeout> | undefined
let highlightTimer: ReturnType<typeof setTimeout> | undefined

const isDataLoading = computed(() => lifeDataLoading.value && !lifeData.value)
const dataError = computed(() => !lifeData.value ? lifeDataError.value : '')
const isSecretRequired = computed(() => lifeDataSecretRequired.value)

function parseDate(value: string) {
  const [year, month, day] = value.split('-').map(Number)
  return new Date(year, month - 1, day)
}

function hasActualDate(vaccine: Vaccine): vaccine is Vaccine & { actual_date: string } {
  return 'actual_date' in vaccine && typeof vaccine.actual_date === 'string'
}

function startOfDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate())
}

function toIsoDate(date: Date) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

function dayDiff(later: Date, earlier: Date) {
  const laterUtc = Date.UTC(later.getFullYear(), later.getMonth(), later.getDate())
  const earlierUtc = Date.UTC(earlier.getFullYear(), earlier.getMonth(), earlier.getDate())
  return Math.round((laterUtc - earlierUtc) / DAY_MS)
}

function addMonths(date: Date, months: number) {
  const target = new Date(date.getFullYear(), date.getMonth() + months, 1)
  const lastDay = new Date(target.getFullYear(), target.getMonth() + 1, 0).getDate()
  target.setDate(Math.min(date.getDate(), lastDay))
  return target
}

function preciseAge(from: Date, to: Date) {
  if (to < from) return { years: 0, months: 0, days: 0 }

  let years = to.getFullYear() - from.getFullYear()
  let anniversary = addMonths(from, years * 12)
  if (anniversary > to) {
    years -= 1
    anniversary = addMonths(from, years * 12)
  }

  let months = 0
  while (months < 11 && addMonths(anniversary, months + 1) <= to) months += 1
  const monthStart = addMonths(anniversary, months)
  return { years, months, days: dayDiff(to, monthStart) }
}

function nextAnnualDate(date: Date, reference: Date) {
  const currentYearDate = new Date(reference.getFullYear(), date.getMonth(), date.getDate())
  return currentYearDate >= reference
    ? currentYearDate
    : new Date(reference.getFullYear() + 1, date.getMonth(), date.getDate())
}

const totalDays = computed(() => Math.max(0, dayDiff(today.value, birthDate.value)))
const ageText = computed(() => {
  const age = preciseAge(birthDate.value, today.value)
  return `${age.years}岁 ${age.months}个月 ${age.days}天`
})

const anchorCards = computed(() => anchorsData.value.map((anchor: Anchor) => {
  const date = parseDate(anchor.date)
  const days = Math.max(0, dayDiff(today.value, date))

  if (!anchor.repeat) {
    const nextHundred = Math.max(100, Math.ceil((days + 1) / 100) * 100)
    const remaining = nextHundred - days
    const elapsed = preciseAge(date, today.value)
    const elapsedLabel = elapsed.years > 0
      ? `已过去 ${elapsed.years} 年`
      : elapsed.months > 0
        ? `已过去 ${elapsed.months} 个月`
        : `已过去 ${elapsed.days} 天`
    return {
      ...anchor,
      days,
      tag: elapsedLabel,
      progress: ((days % 100) / 100) * 100,
      nextLabel: `距 ${formatNumber(nextHundred)} 天里程碑 ${remaining} 天`
    }
  }

  const nextDate = nextAnnualDate(date, today.value)
  const previousDate = new Date(nextDate.getFullYear() - 1, date.getMonth(), date.getDate())
  const cycleLength = Math.max(1, dayDiff(nextDate, previousDate))
  const elapsed = Math.max(0, dayDiff(today.value, previousDate))
  const remaining = dayDiff(nextDate, today.value)
  return {
    ...anchor,
    days,
    tag: '每年重复',
    progress: Math.min(100, (elapsed / cycleLength) * 100),
    nextLabel: remaining === 0 ? '就是今天，纪念日快乐' : `距下一个纪念日 ${remaining} 天`
  }
}))

const visibleMilestones = computed(() => milestonesData.value.map(item => ({
  ...item,
  isFuture: parseDate(item.date) > today.value
})))

const vaccineRows = computed<VaccineRow[]>(() => vaccinesData.value.map((vaccine: Vaccine) => {
  const date = addMonths(birthDate.value, vaccine.offset_months)
  const daysUntil = dayDiff(date, today.value)
  const completed = completedIds.value.has(vaccine.id)
  const overdue = !completed && daysUntil < -profile.value.vaccine_grace_days
  const status: VaccineStatus = completed ? 'completed' : overdue ? 'overdue' : 'pending'
  const statusMeta = {
    completed: { label: '已完成', icon: '✓' },
    overdue: { label: '已逾期', icon: '!' },
    pending: { label: '待接种', icon: '◷' }
  }[status]

  return {
    ...vaccine,
    date,
    dateIso: toIsoDate(date),
    actualDateIso: hasActualDate(vaccine) ? vaccine.actual_date : null,
    daysUntil,
    status,
    statusLabel: statusMeta.label,
    statusIcon: statusMeta.icon,
    urgent: !completed && daysUntil >= 0 && daysUntil <= 7
  }
}))

const completedCount = computed(() => vaccineRows.value.filter(item => item.status === 'completed').length)
const nextReminder = computed(() => {
  const incomplete = vaccineRows.value.filter(item => item.status !== 'completed')
  const overdue = incomplete.filter(item => item.status === 'overdue')
  const next = incomplete.find(item => item.daysUntil >= -profile.value.vaccine_grace_days)

  if (overdue.length) {
    const item = overdue[0]
    return {
      tone: 'danger',
      icon: '!',
      label: `${overdue.length} 项接种记录需要确认`,
      title: item.name,
      detail: `建议日期已过 ${Math.abs(item.daysUntil)} 天，请咨询接种门诊`
    }
  }

  if (next) {
    const isToday = next.daysUntil === 0
    return {
      tone: next.daysUntil <= 7 ? 'warning' : 'normal',
      icon: next.daysUntil <= 7 ? '⌁' : '↗',
      label: '下一针提醒',
      title: next.name,
      detail: isToday ? '建议今天接种' : next.daysUntil > 0 ? `还有 ${next.daysUntil} 天 · ${formatDate(next.dateIso)}` : `处于宽限期 · 已过 ${Math.abs(next.daysUntil)} 天`
    }
  }

  return { tone: 'success', icon: '✓', label: '接种记录', title: '计划内疫苗均已标记', detail: '做得很好，请继续关注当地接种通知' }
})

const sheetTitle = computed(() => sheetVaccine.value?.status === 'completed' ? '撤销已完成标记？' : '确认已接种吗？')
const sheetActionText = computed(() => sheetVaccine.value?.status === 'completed' ? '撤销标记' : '确认已接种')

function formatNumber(value: number) {
  return new Intl.NumberFormat('zh-CN').format(value)
}

function formatDate(value: string | Date, short = false) {
  const date = typeof value === 'string' ? parseDate(value) : value
  if (short) return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')}`
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`
}

function flipDays() {
  isFlipping.value = false
  if (flipTimer) clearTimeout(flipTimer)
  void nextTick(() => {
    isFlipping.value = true
    flipTimer = setTimeout(() => { isFlipping.value = false }, 760)
  })
}

function showToast(message: string) {
  toastMessage.value = message
  if (toastTimer) clearTimeout(toastTimer)
  toastTimer = setTimeout(() => { toastMessage.value = '' }, 2800)
}

function openVaccineInfo(row: VaccineRow) {
  infoVaccine.value = row
}

function closeVaccineInfo() {
  infoVaccine.value = null
}

function openStatusSheet(row: VaccineRow) {
  sheetVaccine.value = row
}

function closeSheet() {
  sheetVaccine.value = null
}

function saveCompleted() {
  localStorage.setItem(profile.value.storage_key, JSON.stringify([...completedIds.value].sort((a, b) => a - b)))
}

function confirmStatusChange() {
  if (!sheetVaccine.value) return
  const nextIds = new Set(completedIds.value)
  const wasCompleted = nextIds.has(sheetVaccine.value.id)
  wasCompleted ? nextIds.delete(sheetVaccine.value.id) : nextIds.add(sheetVaccine.value.id)
  completedIds.value = nextIds
  saveCompleted()
  if (!wasCompleted) {
    highlightedId.value = sheetVaccine.value.id
    if (highlightTimer) clearTimeout(highlightTimer)
    highlightTimer = setTimeout(() => { highlightedId.value = null }, 1100)
  }
  showToast(wasCompleted ? '已撤销完成标记' : '已标记为完成 ✓')
  closeSheet()
}

function exportMarks() {
  const payload = {
    app: '一生时光 · 健康守护板',
    version: profile.value.version,
    exported_at: new Date().toISOString(),
    completed_vaccine_ids: [...completedIds.value].sort((a, b) => a - b)
  }
  const url = URL.createObjectURL(new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' }))
  const link = document.createElement('a')
  link.href = url
  link.download = `一生时光-接种标记-${toIsoDate(today.value)}.json`
  link.click()
  URL.revokeObjectURL(url)
  showToast('标记数据已导出')
}

function chooseImport() {
  importInput.value?.click()
}

async function importMarks(event: Event) {
  const input = event.target as HTMLInputElement
  const file = input.files?.[0]
  if (!file) return

  try {
    const payload = JSON.parse(await file.text())
    if (!Array.isArray(payload.completed_vaccine_ids)) throw new Error('invalid data')
    const validIds = new Set(vaccinesData.value.map(item => item.id))
    const restored = payload.completed_vaccine_ids
      .map(Number)
      .filter((id: number) => Number.isInteger(id) && validIds.has(id))
    completedIds.value = new Set(restored)
    saveCompleted()
    showToast(`已恢复 ${restored.length} 条接种标记`)
  } catch {
    showToast('导入失败：请选择本页面导出的 JSON 文件')
  } finally {
    input.value = ''
  }
}

function confettiStyle(piece: number) {
  const colors = ['#e9c46a', '#f4a261', '#f7ede2', '#8ec9bc']
  return {
    '--x': `${(piece * 37) % 100}%`,
    '--delay': `${(piece % 7) * 0.08}s`,
    '--rotate': `${piece * 43}deg`,
    '--color': colors[piece % colors.length]
  }
}

function restoreCompletedIds() {
  const nextIds = new Set(defaultCompletedIds.value)
  try {
    const stored = localStorage.getItem(profile.value.storage_key)
    if (stored !== null) {
      const saved = JSON.parse(stored)
      if (Array.isArray(saved)) {
        completedIds.value = new Set(saved.map(Number).filter(Number.isInteger))
        return
      }
    }
  } catch {
    localStorage.removeItem(profile.value.storage_key)
  }

  completedIds.value = nextIds
}

async function reloadData() {
  await ensureLifeData({ force: true })
  if (lifeData.value) restoreCompletedIds()
}

async function submitDataSecret() {
  await setLifeDataSecret(dataSecret.value)
  if (lifeData.value) restoreCompletedIds()
}

onMounted(async () => {
  await ensureLifeData()
  if (!lifeData.value) return
  restoreCompletedIds()

  if (totalDays.value > 0 && totalDays.value % 100 === 0) {
    const celebrationKey = `life-dashboard-celebration-${toIsoDate(today.value)}`
    if (!localStorage.getItem(celebrationKey)) {
      showConfetti.value = true
      localStorage.setItem(celebrationKey, 'shown')
      confettiTimer = setTimeout(() => { showConfetti.value = false }, 3600)
    }
  }
})

onBeforeUnmount(() => {
  if (toastTimer) clearTimeout(toastTimer)
  if (flipTimer) clearTimeout(flipTimer)
  if (confettiTimer) clearTimeout(confettiTimer)
  if (highlightTimer) clearTimeout(highlightTimer)
})
</script>

<style scoped src="./life-dashboard.css"></style>
