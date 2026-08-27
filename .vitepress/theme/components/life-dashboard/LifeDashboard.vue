<template>
  <main class="life-app">
    <div v-if="isDataLoading" class="life-loading" role="status">
      <strong>正在载入家庭数据</strong>
      <span>有密钥时同步最新数据，否则读取本地静态数据</span>
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
      :style="skyTextStyle"
      aria-label="生命时光总览"
      @click="flipDays"
    >
      <canvas ref="skyCanvas" class="hero__sky" aria-hidden="true" />
      <canvas ref="lifeCanvas" class="hero__life" aria-hidden="true" />
      <div v-if="showConfetti" class="confetti" aria-hidden="true">
        <i v-for="piece in 18" :key="piece" :style="confettiStyle(piece)" />
      </div>

      <img class="hero__avatar" :src="avatarUrl" :alt="`${profile.name}的头像`">
      <p class="hero__eyebrow">{{ profile.name }} · LIFETIME</p>
      <div class="hero__number" aria-live="polite">{{ formatNumber(totalDays) }}</div>
      <p class="hero__unit">{{ nameInterpretation }}</p>
      <div class="hero__rule"><span /></div>
      <p class="hero__age">
        <span>生于 {{ formatDate(birthDate) }} {{ profile.birth_time }}</span>
        <span>现年 {{ ageText }}</span>
      </p>
      <p class="hero__hint"><span aria-hidden="true">⌁</span> 轻触数字，重温这一刻</p>
    </section>

    <div class="dashboard-shell">
      <section class="identity-card" aria-label="出生信息">
        <div class="identity-card__intro">
          <span>生辰八字</span>
          <strong>四柱留印 · 岁月作笺</strong>
        </div>
        <div class="identity-card__details">
          <div class="bazi-grid">
            <div v-for="(pillar, index) in profile.bazi" :key="pillar">
              <span>{{ profile.bazi_labels[index] }}</span>
              <strong>{{ pillar }}</strong>
            </div>
          </div>
          <div class="five-elements" aria-label="五行属性">
            <div v-for="item in fiveElementRows" :key="item.name">
              <span>{{ item.name }}</span>
              <strong>{{ item.count }}</strong>
              <i :style="{ width: `${item.width}%` }" />
            </div>
          </div>
        </div>
      </section>

      <section class="quick-record" aria-label="快速添加记录">
        <div>
          <span>DAILY RECORD</span>
          <strong>{{ canEditMarks ? '添加记录' : '进入成长日历' }}</strong>
          <p>{{ canEditMarks ? '快速记录喂养、睡眠、体重、身高和备注' : '保存密钥后可添加照护与成长记录' }}</p>
        </div>
        <a class="quick-record__button" href="/life/calendar/#record-editor">
          {{ canEditMarks ? '添加记录' : '打开日历' }} <span aria-hidden="true">→</span>
        </a>
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
        :body-measurements="bodyMeasurementsData"
        :can-edit="canEditMarks"
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

        <div v-if="optionalVaccines.length && canEditMarks" class="optional-vaccine-picker" aria-label="自费疫苗选择">
          <button
            v-for="vaccine in optionalVaccines"
            :key="vaccine.id"
            type="button"
            :class="{ 'is-selected': selectedOptionalIds.has(vaccine.id) }"
            @click="toggleOptionalVaccine(vaccine.id)"
          >
            {{ vaccine.name.replace('（自费', '（').replace('·第1剂', '') }}
          </button>
        </div>

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
              <strong>{{ row.name }}<em v-if="row.funding === 'self_paid'">自费</em></strong>
              <time v-if="row.status === 'completed' && row.actualDateIso" :datetime="row.actualDateIso">已于 {{ formatDate(row.actualDateIso) }} 接种</time>
              <time v-else :datetime="row.dateIso">建议 {{ formatDate(row.dateIso) }}</time>
            </div>
            <button
              v-if="canEditMarks"
              class="status-pill"
              :class="`status-pill--${row.status}`"
              type="button"
              :aria-label="`${row.name}：${row.statusLabel}，点击修改`"
              @click.stop="openStatusSheet(row)"
            >
              <span aria-hidden="true">{{ row.statusIcon }}</span>{{ row.statusLabel }}
            </button>
            <span v-else class="status-pill" :class="`status-pill--${row.status}`">
              <span aria-hidden="true">{{ row.statusIcon }}</span>{{ row.statusLabel }}
            </span>
          </li>
        </ol>
      </section>

      <footer class="dashboard-footer">
        <p><span aria-hidden="true">⌂</span> 建议将本页面添加至主屏幕，随时查看</p>
        <div v-if="canEditMarks" class="data-tools">
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
          <div class="vaccine-precautions">
            <article>
              <span>接种前</span>
              <ul>
                <li v-for="item in vaccineBeforeNotes(infoVaccine)" :key="item">{{ item }}</li>
              </ul>
            </article>
            <article>
              <span>接种后</span>
              <ul>
                <li v-for="item in vaccineAfterNotes(infoVaccine)" :key="item">{{ item }}</li>
              </ul>
            </article>
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
  hasLifeDataSecret,
  lifeData,
  lifeDataError,
  lifeDataLoading,
  lifeDataSecretRequired,
  setLifeDataSecret,
  updateVaccineRecordsToRemote,
  type LifeAnchor,
  type LifeVaccineRecords,
  type LifeProfile,
  type LifeVaccine
} from '../life-data'

type Anchor = LifeAnchor
type Vaccine = LifeVaccine
type VaccineStatus = 'completed' | 'overdue' | 'pending'
type SkyPhase = 'sunrise' | 'day' | 'sunset' | 'afterglow' | 'night'

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

interface SkyConfig {
  top: string
  mid: string
  bottom: string
  sunColor: string
  glowColor: string
  cloudColor: string
  hillColor: string
  starAlpha: number
}

interface SkyOrb {
  x: number
  y: number
  radius: number
}

const DAY_MS = 86_400_000
const SKY_FRAME_MS = 42
const SKY_CHECK_MS = 60_000
const SKY_DPR_LIMIT = 2
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
const allVaccinesData = computed(() => lifeData.value?.vaccines ?? [])
const vaccineRecordsData = computed<LifeVaccineRecords>(() => lifeData.value?.vaccineRecords ?? { selected_optional_ids: [], completions: [] })
const optionalVaccines = computed(() => allVaccinesData.value.filter(vaccine => vaccine.funding === 'self_paid'))
const vaccinesData = computed(() => allVaccinesData.value.filter(vaccine => vaccine.funding !== 'self_paid' || selectedOptionalIds.value.has(vaccine.id)))
const recordsData = computed(() => lifeData.value?.records ?? [])
const growthStagesData = computed(() => lifeData.value?.growthStages ?? [])
const diaperUsageData = computed(() => lifeData.value?.diaperUsage ?? [])
const bodyMeasurementsData = computed(() => lifeData.value?.bodyMeasurements ?? [])
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
const canEditMarks = ref(false)
const selectedOptionalIds = ref<Set<number>>(new Set())
const initialSkyDate = new Date()
const skyCanvas = ref<HTMLCanvasElement | null>(null)
const lifeCanvas = ref<HTMLCanvasElement | null>(null)
const skyPhase = ref<SkyPhase>(getSkyPhase(initialSkyDate))

let toastTimer: ReturnType<typeof setTimeout> | undefined
let flipTimer: ReturnType<typeof setTimeout> | undefined
let confettiTimer: ReturnType<typeof setTimeout> | undefined
let highlightTimer: ReturnType<typeof setTimeout> | undefined
let skyFrame: number | undefined
let skyResizeFrame: number | undefined
let skyLastDraw = 0
let skyContext: CanvasRenderingContext2D | null = null
let lifeContext: CanvasRenderingContext2D | null = null
let skyLunarDay = getLunarDay(initialSkyDate)
let skyOrb: SkyOrb = getSkyOrb(initialSkyDate, skyPhase.value, skyLunarDay)
let skyTimer: ReturnType<typeof setInterval> | undefined
let skyResizeObserver: ResizeObserver | undefined
let skyIntersectionObserver: IntersectionObserver | undefined
let isSkyVisible = true
let isSkyVisibilityListenerBound = false

const isDataLoading = computed(() => lifeDataLoading.value && !lifeData.value)
const dataError = computed(() => !lifeData.value ? lifeDataError.value : '')
const isSecretRequired = computed(() => lifeDataSecretRequired.value)

const skyConfigs: Record<SkyPhase, SkyConfig> = {
  sunrise: {
    top: '#bfe3f8',
    mid: '#f6c57c',
    bottom: '#fff3d5',
    sunColor: '#ffd67d',
    glowColor: 'rgba(255, 176, 88, .44)',
    cloudColor: 'rgba(255, 247, 225, .72)',
    hillColor: 'rgba(91, 145, 135, .22)',
    starAlpha: 0
  },
  day: {
    top: '#a9ddfb',
    mid: '#dff3ff',
    bottom: '#f5f1d7',
    sunColor: '#ffe493',
    glowColor: 'rgba(255, 219, 118, .34)',
    cloudColor: 'rgba(255, 255, 255, .64)',
    hillColor: 'rgba(71, 154, 139, .18)',
    starAlpha: 0
  },
  sunset: {
    top: '#95c7e8',
    mid: '#f2b872',
    bottom: '#f8d2a1',
    sunColor: '#ffbe60',
    glowColor: 'rgba(235, 123, 68, .42)',
    cloudColor: 'rgba(255, 232, 197, .58)',
    hillColor: 'rgba(111, 118, 110, .24)',
    starAlpha: 0
  },
  afterglow: {
    top: '#314b7d',
    mid: '#9e6aa1',
    bottom: '#f0a86e',
    sunColor: '#ffd188',
    glowColor: 'rgba(255, 137, 91, .34)',
    cloudColor: 'rgba(255, 218, 186, .32)',
    hillColor: 'rgba(31, 56, 74, .36)',
    starAlpha: .28
  },
  night: {
    top: '#07172f',
    mid: '#10284a',
    bottom: '#274466',
    sunColor: '#e8f1ff',
    glowColor: 'rgba(149, 189, 255, .24)',
    cloudColor: 'rgba(198, 218, 238, .16)',
    hillColor: 'rgba(5, 24, 37, .44)',
    starAlpha: .82
  }
}

const skyStars = Array.from({ length: 44 }, (_, index) => ({
  x: ((index * 37) % 101) / 100,
  y: (8 + ((index * 53) % 50)) / 100,
  r: .7 + (index % 3) * .32,
  phase: index * .63
}))

const skyClouds = [
  { x: .12, y: .27, scale: .72, speed: 7 },
  { x: .58, y: .2, scale: .58, speed: 5 },
  { x: .82, y: .42, scale: .84, speed: 4 },
  { x: .3, y: .54, scale: .52, speed: 3 }
]

const moonMarks = [
  { x: -.28, y: -.18, r: .12, alpha: .11 },
  { x: .18, y: -.08, r: .08, alpha: .08 },
  { x: -.05, y: .26, r: .16, alpha: .07 },
  { x: .32, y: .22, r: .1, alpha: .06 },
  { x: -.38, y: .18, r: .07, alpha: .08 }
]

const skyTextColors: Record<SkyPhase, Record<string, string>> = {
  sunrise: {
    '--hero-text': '#263f4f',
    '--hero-number': '#b86424',
    '--hero-kicker': 'rgb(38 63 79 / 74%)',
    '--hero-muted': 'rgb(38 63 79 / 66%)',
    '--hero-soft': 'rgb(38 63 79 / 44%)',
    '--hero-rule': 'rgb(184 100 36 / 24%)',
    '--hero-accent': '#d69439',
    '--hero-shadow': 'rgb(184 100 36 / 18%)',
    '--hero-avatar-shadow': 'rgb(38 63 79 / 16%)'
  },
  day: {
    '--hero-text': '#163f3a',
    '--hero-number': '#24769b',
    '--hero-kicker': 'rgb(36 118 155 / 74%)',
    '--hero-muted': 'rgb(22 63 58 / 64%)',
    '--hero-soft': 'rgb(22 63 58 / 42%)',
    '--hero-rule': 'rgb(36 118 155 / 24%)',
    '--hero-accent': '#e7bd4e',
    '--hero-shadow': 'rgb(36 118 155 / 16%)',
    '--hero-avatar-shadow': 'rgb(36 118 155 / 16%)'
  },
  sunset: {
    '--hero-text': '#2f3e46',
    '--hero-number': '#a66f24',
    '--hero-kicker': 'rgb(47 62 70 / 74%)',
    '--hero-muted': 'rgb(47 62 70 / 66%)',
    '--hero-soft': 'rgb(47 62 70 / 44%)',
    '--hero-rule': 'rgb(166 111 36 / 25%)',
    '--hero-accent': '#d19a3a',
    '--hero-shadow': 'rgb(166 111 36 / 18%)',
    '--hero-avatar-shadow': 'rgb(47 62 70 / 16%)'
  },
  afterglow: {
    '--hero-text': '#22324a',
    '--hero-number': '#ddc46f',
    '--hero-kicker': 'rgb(227 215 166 / 78%)',
    '--hero-muted': 'rgb(244 240 221 / 74%)',
    '--hero-soft': 'rgb(244 240 221 / 50%)',
    '--hero-rule': 'rgb(227 215 166 / 28%)',
    '--hero-accent': '#e3d7a6',
    '--hero-shadow': 'rgb(19 40 73 / 22%)',
    '--hero-avatar-shadow': 'rgb(19 40 73 / 22%)'
  },
  night: {
    '--hero-text': '#edf5ff',
    '--hero-number': '#c9dcff',
    '--hero-kicker': 'rgb(201 220 255 / 78%)',
    '--hero-muted': 'rgb(237 245 255 / 74%)',
    '--hero-soft': 'rgb(237 245 255 / 50%)',
    '--hero-rule': 'rgb(201 220 255 / 26%)',
    '--hero-accent': '#d7e6ff',
    '--hero-shadow': 'rgb(0 13 32 / 35%)',
    '--hero-avatar-shadow': 'rgb(0 13 32 / 34%)'
  }
}

const skyTextStyle = computed(() => skyTextColors[skyPhase.value])

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
const nameInterpretation = computed(() => {
  const name = profile.value.name || '王翊安'
  if (name === '王翊安') return '翊有翱翔九天之志，安有健康无忧之福。'
  return `${name}，愿一生舒展从容，平安有光。`
})
const fiveElementRows = computed(() => {
  const elementMap: Record<string, string> = {
    甲: '木',
    乙: '木',
    寅: '木',
    卯: '木',
    丙: '火',
    丁: '火',
    巳: '火',
    午: '火',
    戊: '土',
    己: '土',
    辰: '土',
    戌: '土',
    丑: '土',
    未: '土',
    庚: '金',
    辛: '金',
    申: '金',
    酉: '金',
    壬: '水',
    癸: '水',
    亥: '水',
    子: '水'
  }
  const counts = { 木: 0, 火: 0, 土: 0, 金: 0, 水: 0 }
  for (const char of profile.value.bazi.join('')) {
    const element = elementMap[char] as keyof typeof counts | undefined
    if (element) counts[element] += 1
  }
  const maxCount = Math.max(1, ...Object.values(counts))
  return (Object.keys(counts) as Array<keyof typeof counts>).map(name => ({
    name,
    count: counts[name],
    width: Math.max(8, counts[name] / maxCount * 100)
  }))
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

function getSkyPhase(date: Date): SkyPhase {
  const hour = date.getHours() + date.getMinutes() / 60
  if (hour >= 5.5 && hour < 8) return 'sunrise'
  if (hour >= 8 && hour < 16.75) return 'day'
  if (hour >= 16.75 && hour < 18.75) return 'sunset'
  if (hour >= 18.75 && hour < 20.25) return 'afterglow'
  return 'night'
}

function getLunarDay(date: Date) {
  try {
    const dayPart = new Intl.DateTimeFormat('zh-CN-u-ca-chinese', { day: 'numeric' })
      .formatToParts(date)
      .find(part => part.type === 'day')
    const day = Number(dayPart?.value)
    if (Number.isInteger(day) && day >= 1 && day <= 30) return day
  } catch {
    // Fall back to a synodic-month approximation if the browser lacks Chinese calendar data.
  }

  const knownNewMoon = Date.UTC(2000, 0, 6, 18, 14)
  const synodicMonth = 29.530588853
  const days = (date.getTime() - knownNewMoon) / DAY_MS
  return Math.floor(((days % synodicMonth) + synodicMonth) % synodicMonth) + 1
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value))
}

function hourOfDay(date: Date) {
  return date.getHours() + date.getMinutes() / 60 + date.getSeconds() / 3600
}

function timeProgress(hour: number, start: number, end: number) {
  return clamp((hour - start) / (end - start), 0, 1)
}

function shortestHourDistance(hour: number, target: number) {
  return ((hour - target + 36) % 24) - 12
}

function sceneGroundY(height: number) {
  return height - clamp(height * .09, 58, 82)
}

function getSkyOrb(date: Date, phase: SkyPhase, lunarDay: number): SkyOrb {
  const hour = hourOfDay(date)
  if (phase === 'night') {
    const moonTransitHour = (12 + (lunarDay - 1) * 24 / 29.530588853) % 24
    const delta = shortestHourDistance(hour, moonTransitHour)
    return {
      x: clamp(.72 + delta * .04, .14, .82),
      y: clamp(.12 + Math.pow(Math.min(1, Math.abs(delta) / 7), 1.45) * .48, .1, .68),
      radius: 14
    }
  }

  if (phase === 'sunrise') {
    const progress = timeProgress(hour, 5.5, 8)
    return {
      x: .14 + progress * .24,
      y: .76 - Math.sin(progress * Math.PI / 2) * .34,
      radius: 38 + progress * 2
    }
  }

  if (phase === 'day') {
    const progress = timeProgress(hour, 8, 16.75)
    return {
      x: .36 + progress * .34,
      y: .42 - Math.sin(progress * Math.PI) * .22,
      radius: 38
    }
  }

  if (phase === 'sunset') {
    const progress = timeProgress(hour, 16.75, 18.75)
    return {
      x: .7 + progress * .18,
      y: .42 + progress * .32,
      radius: 40
    }
  }

  const progress = timeProgress(hour, 18.75, 20.25)
  return {
    x: .88 + progress * .08,
    y: .78 + progress * .1,
    radius: 34
  }
}

function drawCloud(ctx: CanvasRenderingContext2D, x: number, y: number, scale: number, color: string) {
  const puffs = [
    [-44, 16, 34, 13, .55],
    [-14, 4, 36, 18, .72],
    [24, 7, 43, 19, .65],
    [52, 18, 30, 12, .36],
    [0, 21, 70, 16, .45],
    [-72, 22, 22, 8, .2],
    [78, 20, 24, 8, .18]
  ]

  ctx.save()
  ctx.filter = `blur(${5 * scale}px)`
  for (const [dx, dy, rx, ry, alpha] of puffs) {
    ctx.globalAlpha = alpha
    ctx.fillStyle = color
    ctx.beginPath()
    ctx.ellipse(x + dx * scale, y + dy * scale, rx * scale, ry * scale, 0, 0, Math.PI * 2)
    ctx.fill()
  }
  ctx.restore()
}

function drawMoon(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number, lunarDay: number) {
  const phase = Math.min(.99, Math.max(.01, (lunarDay - 1) / 29.530588853))
  const illumination = (1 - Math.cos(phase * Math.PI * 2)) / 2
  const curve = Math.cos(phase * Math.PI * 2)
  const glow = ctx.createRadialGradient(x, y, 0, x, y, radius * 3.4)
  glow.addColorStop(0, 'rgba(210, 226, 247, .24)')
  glow.addColorStop(1, 'rgba(210, 226, 247, 0)')

  ctx.fillStyle = glow
  ctx.beginPath()
  ctx.arc(x, y, radius * 3.4, 0, Math.PI * 2)
  ctx.fill()

  ctx.save()
  ctx.translate(x, y)

  const moonBase = ctx.createRadialGradient(-radius * .28, -radius * .35, radius * .1, 0, 0, radius)
  moonBase.addColorStop(0, '#dce5ee')
  moonBase.addColorStop(.68, '#bdcadb')
  moonBase.addColorStop(1, '#899bb4')

  ctx.fillStyle = 'rgba(20, 43, 70, .5)'
  ctx.beginPath()
  ctx.arc(0, 0, radius, 0, Math.PI * 2)
  ctx.fill()

  ctx.fillStyle = moonBase
  ctx.beginPath()
  if (illumination > .94) {
    ctx.arc(0, 0, radius, 0, Math.PI * 2)
  } else if (illumination < .06) {
    ctx.ellipse(0, 0, radius * .08, radius, 0, -Math.PI / 2, Math.PI / 2)
  } else if (phase <= .5) {
    ctx.moveTo(0, -radius)
    ctx.arc(0, 0, radius, -Math.PI / 2, Math.PI / 2)
    ctx.ellipse(0, 0, Math.abs(curve) * radius, radius, 0, Math.PI / 2, -Math.PI / 2, curve >= 0)
  } else {
    ctx.moveTo(0, -radius)
    ctx.arc(0, 0, radius, -Math.PI / 2, Math.PI / 2, true)
    ctx.ellipse(0, 0, Math.abs(curve) * radius, radius, 0, Math.PI / 2, -Math.PI / 2, curve <= 0)
  }
  ctx.closePath()
  ctx.fill()

  ctx.clip()
  for (const mark of moonMarks) {
    ctx.globalAlpha = mark.alpha
    ctx.fillStyle = '#8798ad'
    ctx.beginPath()
    ctx.ellipse(mark.x * radius, mark.y * radius, mark.r * radius * 1.35, mark.r * radius, -.35, 0, Math.PI * 2)
    ctx.fill()
  }
  ctx.globalAlpha = 1

  const shade = ctx.createLinearGradient(-radius, -radius, radius, radius)
  shade.addColorStop(0, 'rgba(255, 255, 255, .14)')
  shade.addColorStop(.48, 'rgba(255, 255, 255, 0)')
  shade.addColorStop(1, 'rgba(30, 54, 84, .16)')
  ctx.fillStyle = shade
  ctx.beginPath()
  ctx.arc(0, 0, radius, 0, Math.PI * 2)
  ctx.fill()

  ctx.restore()
}

function drawLeaf(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number, rotate: number, color: string) {
  ctx.save()
  ctx.translate(x, y)
  ctx.rotate(rotate)
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.ellipse(0, 0, radius * 1.25, radius, 0, 0, Math.PI * 2)
  ctx.fill()
  ctx.restore()
}

function drawFoliage(ctx: CanvasRenderingContext2D, x: number, y: number, scale: number, sway: number, colors: string[]) {
  const blobs = [
    [-18, 0, 18, 14, colors[0]],
    [2, -10, 22, 17, colors[1]],
    [21, 2, 17, 14, colors[0]],
    [-2, 12, 24, 15, colors[2]],
    [-28, 13, 12, 9, colors[1]],
    [30, 15, 11, 8, colors[2]]
  ] as const

  ctx.save()
  ctx.translate(x, y)
  ctx.rotate(sway * .003)
  ctx.filter = `blur(${Math.max(.2, scale * .35)}px)`
  for (const [dx, dy, rx, ry, color] of blobs) {
    ctx.fillStyle = color
    ctx.beginPath()
    ctx.ellipse(dx * scale, dy * scale, rx * scale, ry * scale, 0, 0, Math.PI * 2)
    ctx.fill()
  }
  ctx.restore()
}

function drawSapling(ctx: CanvasRenderingContext2D, width: number, height: number, ageDays: number, time: number) {
  const growth = clamp(ageDays / 1600, .06, 1)
  const baseX = clamp(width * .18, 58, 118)
  const baseY = sceneGroundY(height) - 8
  const treeHeight = 40 + growth * 92
  const sway = Math.sin(time * .0018 + ageDays * .17) * (1.1 + growth * 2.4)
  const windPulse = Math.max(0, Math.sin(time * .00042 + ageDays * .09)) ** 8 * 6
  const topX = baseX + sway + windPulse * .6
  const topY = baseY - treeHeight
  const night = skyPhase.value === 'night'
  const trunkColor = night ? 'rgba(80, 71, 57, .72)' : 'rgba(97, 75, 48, .76)'
  const branchColor = night ? 'rgba(92, 83, 66, .56)' : 'rgba(102, 78, 50, .62)'
  const leafColors = night
    ? ['rgba(72, 118, 99, .42)', 'rgba(93, 143, 111, .38)', 'rgba(53, 96, 86, .36)']
    : ['rgba(58, 128, 83, .54)', 'rgba(91, 151, 93, .5)', 'rgba(44, 104, 78, .46)']

  ctx.save()
  ctx.lineCap = 'round'
  ctx.lineJoin = 'round'
  ctx.strokeStyle = trunkColor
  ctx.lineWidth = 2.8 + growth * 3.4
  ctx.beginPath()
  ctx.moveTo(baseX, baseY)
  ctx.bezierCurveTo(baseX - 5, baseY - treeHeight * .34, baseX + 7, baseY - treeHeight * .68, topX, topY)
  ctx.stroke()

  ctx.strokeStyle = branchColor
  ctx.lineWidth = 1.2 + growth * 1.8
  ctx.beginPath()
  ctx.moveTo(baseX, baseY - treeHeight * .43)
  ctx.quadraticCurveTo(baseX - 24 * growth, baseY - treeHeight * .62, baseX - 34 * growth + sway, baseY - treeHeight * .78)
  ctx.moveTo(baseX + 2, baseY - treeHeight * .52)
  ctx.quadraticCurveTo(baseX + 26 * growth, baseY - treeHeight * .68, baseX + 40 * growth + sway, baseY - treeHeight * .84)
  ctx.moveTo(baseX + 1, baseY - treeHeight * .68)
  ctx.quadraticCurveTo(baseX - 12 * growth, baseY - treeHeight * .82, topX - 6 * growth, topY + 7 * growth)
  ctx.stroke()

  if (growth < .16) {
    ctx.strokeStyle = branchColor
    ctx.lineWidth = 1.1
    ctx.beginPath()
    ctx.moveTo(topX - 1, topY + 12)
    ctx.lineTo(topX - 10, topY + 3)
    ctx.moveTo(topX + 1, topY + 9)
    ctx.lineTo(topX + 11, topY)
    ctx.stroke()
    drawLeaf(ctx, topX - 12, topY + 1, 5.2, -.68 + sway * .015, leafColors[1])
    drawLeaf(ctx, topX + 12, topY - 2, 5.8, .46 + sway * .015, leafColors[0])
    drawLeaf(ctx, topX + 1, topY - 11, 4.8, -.08, leafColors[1])
  } else {
    const canopyScale = .72 + growth * .82
    drawFoliage(ctx, topX, topY + 8 * growth, canopyScale, sway, leafColors)
    if (growth > .42) {
      drawFoliage(ctx, baseX - 24 * growth + sway, baseY - treeHeight * .7, canopyScale * .54, sway, leafColors)
      drawFoliage(ctx, baseX + 31 * growth + sway, baseY - treeHeight * .76, canopyScale * .5, sway, leafColors)
    }
  }

  ctx.fillStyle = night ? 'rgba(6, 22, 29, .22)' : 'rgba(21, 62, 55, .12)'
  ctx.beginPath()
  ctx.ellipse(baseX + 5, baseY + 4, 31 + growth * 26, 6 + growth * 2, 0, 0, Math.PI * 2)
  ctx.fill()
  ctx.restore()
}

function drawLifeScene(time = 0) {
  const canvas = lifeCanvas.value
  const ctx = canvas ? lifeContext || (lifeContext = canvas.getContext('2d')) : null
  if (!canvas || !ctx) return

  const width = canvas.clientWidth
  const height = canvas.clientHeight
  if (!width || !height) return

  const dpr = canvas.width / width
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  ctx.clearRect(0, 0, width, height)

  drawSapling(ctx, width, height, totalDays.value, time)
}

function drawSky(time = 0) {
  const canvas = skyCanvas.value
  const ctx = canvas ? skyContext || (skyContext = canvas.getContext('2d')) : null
  if (!canvas || !ctx) return

  const width = canvas.clientWidth
  const height = canvas.clientHeight
  if (!width || !height) return

  const config = skyConfigs[skyPhase.value]
  const dpr = canvas.width / width
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  ctx.clearRect(0, 0, width, height)

  const sky = ctx.createLinearGradient(0, 0, 0, height)
  sky.addColorStop(0, config.top)
  sky.addColorStop(.52, config.mid)
  sky.addColorStop(1, config.bottom)
  ctx.fillStyle = sky
  ctx.fillRect(0, 0, width, height)

  const x = width * skyOrb.x
  const y = height * skyOrb.y
  const radius = skyOrb.radius
  const glow = ctx.createRadialGradient(x, y, 0, x, y, radius * 4.8)
  glow.addColorStop(0, config.glowColor)
  glow.addColorStop(1, 'rgba(255, 255, 255, 0)')
  ctx.fillStyle = glow
  ctx.beginPath()
  ctx.arc(x, y, radius * 4.8, 0, Math.PI * 2)
  ctx.fill()

  if (skyPhase.value === 'night') {
    drawMoon(ctx, x, y, radius, skyLunarDay)
  } else {
    ctx.fillStyle = config.sunColor
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, Math.PI * 2)
    ctx.fill()
  }

  if (config.starAlpha) {
    for (const star of skyStars) {
      const alpha = config.starAlpha * (.62 + Math.sin(time * .002 + star.phase) * .2)
      ctx.globalAlpha = Math.max(.16, alpha)
      ctx.fillStyle = '#ffffff'
      ctx.beginPath()
      ctx.arc(width * star.x, height * star.y, star.r, 0, Math.PI * 2)
      ctx.fill()
    }
    ctx.globalAlpha = 1
  }

  for (const cloud of skyClouds) {
    const drift = (time * .001 * cloud.speed) % (width + 260)
    const cloudX = (width * cloud.x + drift) % (width + 260) - 130
    drawCloud(ctx, cloudX, height * cloud.y, cloud.scale, config.cloudColor)
  }

  ctx.fillStyle = config.hillColor
  ctx.beginPath()
  ctx.moveTo(0, height)
  ctx.bezierCurveTo(width * .2, height * .9, width * .42, height * .95, width * .62, height * .87)
  ctx.bezierCurveTo(width * .78, height * .8, width * .9, height * .9, width, height * .84)
  ctx.lineTo(width, height)
  ctx.closePath()
  ctx.fill()
}

function resizeSkyCanvas() {
  const canvas = skyCanvas.value
  const life = lifeCanvas.value
  if (!canvas || !life) return
  const rect = canvas.getBoundingClientRect()
  const dpr = Math.min(window.devicePixelRatio || 1, SKY_DPR_LIMIT)
  const width = Math.max(1, Math.round(rect.width * dpr))
  const height = Math.max(1, Math.round(rect.height * dpr))
  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width
    canvas.height = height
  }
  if (life.width !== width || life.height !== height) {
    life.width = width
    life.height = height
  }
  drawSky(performance.now())
  drawLifeScene(performance.now())
}

function requestSkyResize() {
  if (skyResizeFrame) return
  skyResizeFrame = requestAnimationFrame(() => {
    skyResizeFrame = undefined
    resizeSkyCanvas()
  })
}

function updateSkyPhase() {
  const now = new Date()
  const nextPhase = getSkyPhase(now)
  if (nextPhase !== skyPhase.value) skyPhase.value = nextPhase
  skyLunarDay = getLunarDay(now)
  skyOrb = getSkyOrb(now, skyPhase.value, skyLunarDay)
  drawSky(performance.now())
}

function startSkyAnimation() {
  if (skyFrame || !isSkyVisible || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  const tick = (time: number) => {
    if (document.hidden || !isSkyVisible) {
      skyFrame = undefined
      return
    }
    if (time - skyLastDraw >= SKY_FRAME_MS) {
      drawSky(time)
      drawLifeScene(time)
      skyLastDraw = time
    }
    skyFrame = requestAnimationFrame(tick)
  }
  skyFrame = requestAnimationFrame(tick)
}

function stopSkyAnimation() {
  if (!skyFrame) return
  cancelAnimationFrame(skyFrame)
  skyFrame = undefined
}

function handleSkyVisibility() {
  if (document.hidden || !isSkyVisible) {
    stopSkyAnimation()
    return
  }
  updateSkyPhase()
  startSkyAnimation()
}

function startSky() {
  if (!skyCanvas.value || !lifeCanvas.value) return
  isSkyVisible = true
  updateSkyPhase()
  if (!skyResizeObserver) {
    skyResizeObserver = new ResizeObserver(requestSkyResize)
    skyResizeObserver.observe(skyCanvas.value)
  }
  if (!skyIntersectionObserver) {
    skyIntersectionObserver = new IntersectionObserver(([entry]) => {
      isSkyVisible = entry.isIntersecting
      handleSkyVisibility()
    }, { threshold: 0 })
    skyIntersectionObserver.observe(skyCanvas.value)
  }
  if (!skyTimer) skyTimer = setInterval(updateSkyPhase, SKY_CHECK_MS)
  if (!isSkyVisibilityListenerBound) {
    document.addEventListener('visibilitychange', handleSkyVisibility)
    isSkyVisibilityListenerBound = true
  }
  startSkyAnimation()
}

function stopSky() {
  stopSkyAnimation()
  if (skyResizeFrame) cancelAnimationFrame(skyResizeFrame)
  if (skyTimer) clearInterval(skyTimer)
  skyResizeFrame = undefined
  skyTimer = undefined
  skyResizeObserver?.disconnect()
  skyResizeObserver = undefined
  skyIntersectionObserver?.disconnect()
  skyIntersectionObserver = undefined
  skyContext = null
  lifeContext = null
  if (isSkyVisibilityListenerBound) {
    document.removeEventListener('visibilitychange', handleSkyVisibility)
    isSkyVisibilityListenerBound = false
  }
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
  if (!canEditMarks.value) return
  sheetVaccine.value = row
}

function closeSheet() {
  sheetVaccine.value = null
}

function vaccineBeforeNotes(vaccine: Vaccine) {
  return vaccine.before?.length
    ? vaccine.before
    : ['携带接种证，如实告知近期发热、腹泻、过敏史和既往接种反应。', '急性病或明显不适时，是否延期接种以门诊医生评估为准。']
}

function vaccineAfterNotes(vaccine: Vaccine) {
  return vaccine.after?.length
    ? vaccine.after
    : ['接种后在现场留观30分钟。', '回家后观察体温、精神、吃奶和局部红肿，反应较重或持续异常应及时就医。']
}

function currentVaccineRecords(nextIds = completedIds.value, nextOptionalIds = selectedOptionalIds.value): LifeVaccineRecords {
  const existingCompletionMap = new Map(vaccineRecordsData.value.completions.map(item => [item.id, item.actual_date]))
  return {
    selected_optional_ids: [...nextOptionalIds].sort((a, b) => a - b),
    completions: [...nextIds]
      .sort((a, b) => a - b)
      .map(id => ({
        id,
        actual_date: existingCompletionMap.get(id) || toIsoDate(today.value)
      }))
  }
}

async function saveVaccineRecords(records: LifeVaccineRecords, successMessage: string) {
  if (!canEditMarks.value) return
  await updateVaccineRecordsToRemote(records)
  restoreVaccineState()
  showToast(successMessage)
}

async function confirmStatusChange() {
  if (!canEditMarks.value) return
  if (!sheetVaccine.value) return
  const nextIds = new Set(completedIds.value)
  const wasCompleted = nextIds.has(sheetVaccine.value.id)
  wasCompleted ? nextIds.delete(sheetVaccine.value.id) : nextIds.add(sheetVaccine.value.id)

  try {
    await saveVaccineRecords(
      currentVaccineRecords(nextIds),
      wasCompleted ? '已撤销完成标记' : '更新成功'
    )
    completedIds.value = nextIds
    if (!wasCompleted) {
      highlightedId.value = sheetVaccine.value.id
      if (highlightTimer) clearTimeout(highlightTimer)
      highlightTimer = setTimeout(() => { highlightedId.value = null }, 1100)
    }
    closeSheet()
  } catch {
    showToast('更新失败')
  }
}

function exportMarks() {
  if (!canEditMarks.value) return
  const payload = {
    app: '一生时光 · 健康守护板',
    version: profile.value.version,
    exported_at: new Date().toISOString(),
    vaccine_records: currentVaccineRecords()
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
  if (!canEditMarks.value) return
  importInput.value?.click()
}

async function importMarks(event: Event) {
  if (!canEditMarks.value) return
  const input = event.target as HTMLInputElement
  const file = input.files?.[0]
  if (!file) return

  try {
    const payload = JSON.parse(await file.text())
    const sourceIds = Array.isArray(payload.completed_vaccine_ids)
      ? payload.completed_vaccine_ids
      : payload.vaccine_records?.completions?.map((item: { id: number }) => item.id)
    if (!Array.isArray(sourceIds)) throw new Error('invalid data')
    const validIds = new Set(vaccinesData.value.map(item => item.id))
    const restored = sourceIds
      .map(Number)
      .filter((id: number) => Number.isInteger(id) && validIds.has(id))
    await saveVaccineRecords(currentVaccineRecords(new Set(restored)), `已恢复 ${restored.length} 条接种标记`)
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

async function toggleOptionalVaccine(id: number) {
  if (!canEditMarks.value) return
  const nextOptionalIds = new Set(selectedOptionalIds.value)
  nextOptionalIds.has(id) ? nextOptionalIds.delete(id) : nextOptionalIds.add(id)
  try {
    await saveVaccineRecords(currentVaccineRecords(completedIds.value, nextOptionalIds), '自费疫苗选择已更新')
  } catch {
    showToast('更新失败')
  }
}

function restoreVaccineState() {
  const nextIds = new Set(defaultCompletedIds.value)
  selectedOptionalIds.value = new Set(vaccineRecordsData.value.selected_optional_ids)
  if (!canEditMarks.value) {
    completedIds.value = nextIds
    return
  }
  completedIds.value = nextIds
}

async function reloadData() {
  await ensureLifeData({ force: true })
  if (lifeData.value) {
    restoreVaccineState()
    void nextTick(startSky)
  }
}

async function submitDataSecret() {
  await setLifeDataSecret(dataSecret.value)
  canEditMarks.value = hasLifeDataSecret()
  if (lifeData.value) {
    restoreVaccineState()
    void nextTick(startSky)
  }
}

onMounted(async () => {
  canEditMarks.value = hasLifeDataSecret()
  await ensureLifeData()
  if (!lifeData.value) return
  restoreVaccineState()
  void nextTick(startSky)

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
  stopSky()
})
</script>

<style scoped src="./life-dashboard.css"></style>
