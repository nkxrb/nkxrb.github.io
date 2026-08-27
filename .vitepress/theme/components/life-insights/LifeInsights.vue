<template>
  <section class="dashboard-section growth-section" aria-labelledby="growth-title">
    <header class="section-heading">
      <div>
        <p class="section-kicker">GROWTH MAP</p>
        <h2 id="growth-title">成长发育阶段</h2>
      </div>
      <p class="section-note">{{ stageSummary }}</p>
    </header>

    <div class="growth-layout">
      <article v-if="activeStage" class="growth-stage">
        <div class="growth-stage__top">
          <span>{{ activeStage.label }}</span>
          <strong>{{ activeStage.theme }}</strong>
        </div>
        <div class="growth-stage__progress" aria-hidden="true">
          <span :style="{ width: `${stageProgress}%` }" />
        </div>
        <dl class="growth-stage__facts">
          <div>
            <dt>身体</dt>
            <dd>{{ activeStage.body }}</dd>
          </div>
          <div>
            <dt>视力</dt>
            <dd>{{ activeStage.vision }}</dd>
          </div>
          <div>
            <dt>喂养</dt>
            <dd>{{ activeStage.feeding }}</dd>
          </div>
          <div>
            <dt>睡眠</dt>
            <dd>{{ activeStage.sleep }}</dd>
          </div>
        </dl>
        <div class="growth-tags" aria-label="当前阶段标志">
          <span v-for="item in activeStage.motor" :key="`motor-${item}`">{{ item }}</span>
          <span v-for="item in activeStage.social" :key="`social-${item}`">{{ item }}</span>
        </div>
      </article>

      <div class="growth-side">
        <article class="milestone-map">
          <div class="mini-heading">
            <span>标志事件</span>
            <strong>{{ nextMarkerLabel }}</strong>
          </div>
          <ol>
            <li v-for="item in visibleMarkers" :key="item.label" :class="`is-${item.status}`">
              <span>{{ item.age }}</span>
              <strong>{{ item.label }}</strong>
              <small>{{ item.category }}</small>
            </li>
          </ol>
        </article>

        <article v-if="activeStage" class="watch-card">
          <div class="mini-heading">
            <span>观察重点</span>
            <strong>{{ activeStage.care.slice(0, 2).join(' · ') }}</strong>
          </div>
          <ul>
            <li v-for="item in activeStage.watch" :key="item">{{ item }}</li>
          </ul>
        </article>
      </div>
    </div>
  </section>

  <div class="journey-divider" aria-hidden="true"><span /><i /><span /></div>

  <section class="dashboard-section care-section" aria-labelledby="care-title">
    <header class="section-heading">
      <div>
        <p class="section-kicker">CARE TRENDS</p>
        <h2 id="care-title">照护统计曲线</h2>
      </div>
      <p class="section-note">近 {{ recentStats.length }} 天 · {{ sourceNote }}</p>
    </header>

    <div class="care-summary">
      <article v-for="item in summaryCards" :key="item.label">
        <span>{{ item.label }}</span>
        <strong>{{ item.value }}</strong>
        <small>{{ item.detail }}</small>
      </article>
    </div>

    <div class="chart-grid">
      <article class="chart-panel chart-panel--wide">
        <div class="mini-heading">
          <span>生长曲线</span>
          <strong>{{ measurementSummary }}</strong>
        </div>
        <svg class="line-chart growth-line-chart" viewBox="0 0 360 150" role="img" aria-label="身高体重生长曲线">
          <line x1="28" y1="126" x2="344" y2="126" />
          <line x1="28" y1="18" x2="28" y2="126" />
          <polyline :points="weightLine" class="line-chart__weight" />
          <polyline :points="heightLine" class="line-chart__height" />
          <circle
            v-for="point in weightPoints"
            :key="`weight-${point.date}`"
            :cx="point.x"
            :cy="point.y"
            r="2.8"
            class="line-chart__dot line-chart__dot--weight"
          />
          <circle
            v-for="point in heightPoints"
            :key="`height-${point.date}`"
            :cx="point.x"
            :cy="point.y"
            r="2.8"
            class="line-chart__dot line-chart__dot--height"
          />
        </svg>
        <div class="chart-legend">
          <span><i class="is-weight" />体重（斤）</span>
          <span><i class="is-height" />身高</span>
        </div>
      </article>

      <article class="chart-panel chart-panel--wide">
        <div class="mini-heading">
          <span>大小便</span>
          <strong>{{ bowelSummary }}</strong>
        </div>
        <svg class="line-chart" viewBox="0 0 360 150" role="img" aria-label="大小便每日次数曲线">
          <line x1="28" y1="126" x2="344" y2="126" />
          <line x1="28" y1="18" x2="28" y2="126" />
          <polyline :points="urineLine" class="line-chart__urine" />
          <polyline :points="stoolLine" class="line-chart__stool" />
          <circle
            v-for="point in urinePoints"
            :key="`urine-${point.date}`"
            :cx="point.x"
            :cy="point.y"
            r="2.8"
            class="line-chart__dot line-chart__dot--urine"
          />
          <circle
            v-for="point in stoolPoints"
            :key="`stool-${point.date}`"
            :cx="point.x"
            :cy="point.y"
            r="2.8"
            class="line-chart__dot line-chart__dot--stool"
          />
        </svg>
        <div class="chart-legend">
          <span><i class="is-urine" />小便</span>
          <span><i class="is-stool" />大便</span>
        </div>
      </article>

      <article class="chart-panel">
        <div class="mini-heading">
          <span>母乳次数</span>
          <strong>日均 {{ sevenDayAverage('breastfeeding') }} 次</strong>
        </div>
        <svg class="bar-chart" viewBox="0 0 320 140" role="img" aria-label="母乳每日次数柱状图">
          <line x1="16" y1="120" x2="304" y2="120" />
          <rect
            v-for="bar in breastfeedingBars"
            :key="bar.date"
            :x="bar.x"
            :y="bar.y"
            :width="bar.width"
            :height="bar.height"
            rx="3"
          />
        </svg>
      </article>

      <article class="chart-panel">
        <div class="mini-heading">
          <span>尿不湿</span>
          <strong>{{ currentDiaperSize }}</strong>
        </div>
        <svg class="bar-chart bar-chart--diaper" viewBox="0 0 320 140" role="img" aria-label="尿不湿每日消耗柱状图">
          <line x1="16" y1="120" x2="304" y2="120" />
          <rect
            v-for="bar in diaperBars"
            :key="bar.date"
            :x="bar.x"
            :y="bar.y"
            :width="bar.width"
            :height="bar.height"
            rx="3"
          />
        </svg>
        <p class="chart-note">{{ diaperSourceNote }}</p>
      </article>

      <article class="chart-panel">
        <div class="mini-heading">
          <span>奶粉补充</span>
          <strong>{{ formulaSummary }}</strong>
        </div>
        <div class="formula-meter" aria-label="奶粉补充统计">
          <span :style="{ width: `${formulaShare}%` }" />
        </div>
        <p class="chart-note">近 7 天共 {{ recentFormulaMl }} 毫升，{{ recentFormulaCount }} 次记录。</p>
      </article>
    </div>
  </section>

  <div class="journey-divider" aria-hidden="true"><span /><i /><span /></div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type {
  LifeBodyMeasurement,
  LifeDiaperUsage,
  LifeGrowthStage,
  LifeProfile,
  LifeRecordDay
} from '../life-data'

interface DailyCareStat {
  date: string
  stool: number
  urine: number
  breastfeeding: number
  formulaCount: number
  formulaMl: number
  diaper: number
  diaperSize: string
  hasActualDiaperUsage: boolean
}

interface Marker {
  label: string
  category: string
  startMonth: number
  endMonth: number
}

const props = defineProps<{
  profile: LifeProfile
  records: LifeRecordDay[]
  growthStages: LifeGrowthStage[]
  diaperUsage: LifeDiaperUsage[]
  bodyMeasurements: LifeBodyMeasurement[]
  canEdit: boolean
  today: Date
}>()

const CHART_WIDTH = 360
const CHART_HEIGHT = 150
const CHART_LEFT = 28
const CHART_RIGHT = 344
const CHART_TOP = 18
const CHART_BOTTOM = 126
const markers: Marker[] = [
  { label: '追视人脸', category: '视力', startMonth: 0, endMonth: 2 },
  { label: '俯卧抬头', category: '大运动', startMonth: 1, endMonth: 4 },
  { label: '手到口与抓握', category: '精细动作', startMonth: 2, endMonth: 5 },
  { label: '翻身', category: '大运动', startMonth: 4, endMonth: 6 },
  { label: '独坐', category: '大运动', startMonth: 6, endMonth: 9 },
  { label: '爬行或挪动', category: '大运动', startMonth: 7, endMonth: 10 },
  { label: '拇食指捏取', category: '精细动作', startMonth: 8, endMonth: 12 },
  { label: '扶站', category: '大运动', startMonth: 9, endMonth: 12 },
  { label: '独走', category: '大运动', startMonth: 12, endMonth: 18 },
  { label: '有意义称呼', category: '语言社交', startMonth: 12, endMonth: 18 },
  { label: '跑跳探索', category: '大运动', startMonth: 18, endMonth: 24 },
  { label: '简单假装游戏', category: '认知社交', startMonth: 18, endMonth: 24 }
]

const moreItems = [
  { kicker: 'SLEEP', title: '睡眠与夜醒', detail: '记录夜睡、小睡、入睡方式和夜醒次数，和喂养、出牙、运动发展一起观察。' },
  { kicker: 'FOOD', title: '辅食与过敏', detail: '按食材记录首次尝试、摄入量、皮疹、腹泻、便秘等反应。' },
  { kicker: 'TEETH', title: '出牙与口腔', detail: '纳入出牙日期、流口水、牙龈不适、清洁习惯和涂氟提醒。' },
  { kicker: 'HEALTH', title: '体温 · 用药 · 补充剂', detail: '把发热、咳嗽、用药、维生素AD/钙等记录结构化，便于回看。' },
  { kicker: 'PLAY', title: '语言 · 社交 · 游戏', detail: '保存咿呀发声、回应名字、模仿、亲子阅读和户外活动等线索。' }
]

const birthDate = computed(() => parseDate(props.profile.birth_date))
const totalDays = computed(() => Math.max(0, dayDiff(props.today, birthDate.value)))
const ageMonths = computed(() => totalDays.value / 30.4375)
const sortedStages = computed(() => [...props.growthStages].sort((a, b) => a.start_month - b.start_month))
const activeStage = computed(() => {
  const month = ageMonths.value
  return sortedStages.value.find(stage => month >= stage.start_month && month < stage.end_month) ?? sortedStages.value.at(-1)
})
const stageProgress = computed(() => {
  if (!activeStage.value) return 0
  const span = Math.max(0.1, activeStage.value.end_month - activeStage.value.start_month)
  return clamp(((ageMonths.value - activeStage.value.start_month) / span) * 100, 0, 100)
})
const stageSummary = computed(() => `${props.profile.name || '安崽'}现在约 ${totalDays.value} 天 · ${activeStage.value?.label ?? '待补充阶段'}`)

const visibleMarkers = computed(() => markers
  .map(item => {
    const status = ageMonths.value >= item.endMonth
      ? 'done'
      : ageMonths.value >= item.startMonth
        ? 'active'
        : 'next'
    return {
      ...item,
      status,
      age: `${formatMonth(item.startMonth)}-${formatMonth(item.endMonth)}`
    }
  })
  .filter(item => item.status !== 'done' || item.endMonth >= ageMonths.value - 4)
  .slice(0, 8))

const nextMarkerLabel = computed(() => {
  const marker = visibleMarkers.value.find(item => item.status !== 'done')
  return marker ? `${marker.label} · ${marker.age}` : '继续记录新能力'
})

const diaperUsageByDate = computed(() => new Map(props.diaperUsage.map(item => [item.date, item])))
const allMeasurements = computed(() => mergeMeasurements(props.bodyMeasurements))
const recentMeasurements = computed(() => allMeasurements.value.slice(-24))
const latestMeasurement = computed(() => allMeasurements.value.at(-1))
const dailyStats = computed<DailyCareStat[]>(() => props.records
  .map(day => {
    let stool = 0
    let urine = 0
    let breastfeeding = 0
    let formulaCount = 0
    let formulaMl = 0
    let inferredDiaper = 0

    for (const entry of day.entries) {
      const note = entry.note
      const hasStool = /大便|屎|粑粑/.test(note)
      const hasUrine = /小便|尿(?!不湿)/.test(note)
      const hasFormula = /奶粉/.test(note)

      if (hasStool) stool += /两/.test(note) ? 2 : 1
      if (hasUrine) urine += 1
      if (/母乳/.test(note)) breastfeeding += 1
      if (hasFormula) formulaCount += 1
      if (hasStool || hasUrine || /换衣服|换尿不湿|尿不湿/.test(note)) inferredDiaper += 1

      const amounts = note.matchAll(/(\d+)\s*毫升/g)
      for (const amount of amounts) formulaMl += Number(amount[1])
    }

    const actualDiaper = diaperUsageByDate.value.get(day.date)
    return {
      date: day.date,
      stool,
      urine,
      breastfeeding,
      formulaCount,
      formulaMl,
      diaper: actualDiaper?.used_count ?? inferredDiaper,
      diaperSize: actualDiaper?.size || inferDiaperSize(day.date),
      hasActualDiaperUsage: Boolean(actualDiaper?.used_count)
    }
  })
  .sort((a, b) => a.date.localeCompare(b.date)))

const recentStats = computed(() => dailyStats.value.slice(-21))
const recentSevenStats = computed(() => dailyStats.value.slice(-7))
const hasActualDiaperUsage = computed(() => recentStats.value.some(item => item.hasActualDiaperUsage))
const sourceNote = computed(() => hasActualDiaperUsage.value ? '含真实尿不湿记录' : '由日志文字估算')
const diaperSourceNote = computed(() => hasActualDiaperUsage.value ? '优先展示真实消耗；缺失日期回退到大小便日志估算。' : '当前按大小便/换衣服记录估算，后续可接入真实库存。')
const currentDiaperSize = computed(() => recentStats.value.at(-1)?.diaperSize ?? inferDiaperSize())
const recentFormulaMl = computed(() => sum(recentSevenStats.value, 'formulaMl'))
const recentFormulaCount = computed(() => sum(recentSevenStats.value, 'formulaCount'))
const formulaSummary = computed(() => recentFormulaMl.value > 0 ? `${recentFormulaMl.value} ml / 7天` : '暂无补充')
const formulaShare = computed(() => clamp((recentFormulaMl.value / 360) * 100, 4, 100))

const summaryCards = computed(() => [
  { label: '母乳', value: `${sevenDayAverage('breastfeeding')} 次/天`, detail: `近 7 天共 ${sum(recentSevenStats.value, 'breastfeeding')} 次` },
  { label: '大便', value: `${sevenDayAverage('stool')} 次/天`, detail: `近 7 天共 ${sum(recentSevenStats.value, 'stool')} 次` },
  { label: '小便', value: `${sevenDayAverage('urine')} 次/天`, detail: `近 7 天共 ${sum(recentSevenStats.value, 'urine')} 次` },
  { label: '尿不湿', value: `${sevenDayAverage('diaper')} 片/天`, detail: currentDiaperSize.value }
])

const bowelSummary = computed(() => `近 7 天 ${sum(recentSevenStats.value, 'stool')} / ${sum(recentSevenStats.value, 'urine')}`)
const urinePoints = computed(() => chartPoints('urine'))
const stoolPoints = computed(() => chartPoints('stool'))
const urineLine = computed(() => urinePoints.value.map(point => `${point.x},${point.y}`).join(' '))
const stoolLine = computed(() => stoolPoints.value.map(point => `${point.x},${point.y}`).join(' '))
const breastfeedingBars = computed(() => barItems('breastfeeding'))
const diaperBars = computed(() => barItems('diaper'))
const measurementSummary = computed(() => {
  const item = latestMeasurement.value
  if (!item) return '暂无身高体重记录'
  const parts = [
    typeof measurementWeightJin(item) === 'number' ? `${measurementWeightJin(item)}斤` : '',
    typeof item.height_cm === 'number' ? `${item.height_cm}cm` : '',
    typeof item.head_circumference_cm === 'number' ? `头围${item.head_circumference_cm}cm` : ''
  ].filter(Boolean)
  return `${item.date} · ${parts.join(' / ')}`
})
const weightPoints = computed(() => measurementPoints('weight_jin'))
const heightPoints = computed(() => measurementPoints('height_cm'))
const weightLine = computed(() => weightPoints.value.map(point => `${point.x},${point.y}`).join(' '))
const heightLine = computed(() => heightPoints.value.map(point => `${point.x},${point.y}`).join(' '))

function parseDate(value: string) {
  const [year, month, day] = value.split('-').map(Number)
  return new Date(year, month - 1, day)
}

function dayDiff(later: Date, earlier: Date) {
  const laterUtc = Date.UTC(later.getFullYear(), later.getMonth(), later.getDate())
  const earlierUtc = Date.UTC(earlier.getFullYear(), earlier.getMonth(), earlier.getDate())
  return Math.round((laterUtc - earlierUtc) / 86_400_000)
}

function sum(items: DailyCareStat[], key: keyof Pick<DailyCareStat, 'stool' | 'urine' | 'breastfeeding' | 'formulaCount' | 'formulaMl' | 'diaper'>) {
  return items.reduce((total, item) => total + item[key], 0)
}

function sevenDayAverage(key: keyof Pick<DailyCareStat, 'stool' | 'urine' | 'breastfeeding' | 'diaper'>) {
  if (!recentSevenStats.value.length) return '0.0'
  return (sum(recentSevenStats.value, key) / recentSevenStats.value.length).toFixed(1)
}

function chartPoints(key: keyof Pick<DailyCareStat, 'stool' | 'urine'>) {
  const items = recentStats.value
  const maxValue = Math.max(1, ...items.flatMap(item => [item.stool, item.urine]))
  const step = items.length > 1 ? (CHART_RIGHT - CHART_LEFT) / (items.length - 1) : 0

  return items.map((item, index) => ({
    date: item.date,
    x: Math.round((CHART_LEFT + step * index) * 10) / 10,
    y: Math.round((CHART_BOTTOM - (item[key] / maxValue) * (CHART_BOTTOM - CHART_TOP)) * 10) / 10
  }))
}

function barItems(key: keyof Pick<DailyCareStat, 'breastfeeding' | 'diaper'>) {
  const items = recentStats.value
  const maxValue = Math.max(1, ...items.map(item => item[key]))
  const chartLeft = 16
  const chartRight = 304
  const gap = items.length > 12 ? 3 : 6
  const width = Math.max(4, ((chartRight - chartLeft) - gap * Math.max(0, items.length - 1)) / Math.max(1, items.length))

  return items.map((item, index) => {
    const height = Math.max(3, (item[key] / maxValue) * 96)
    return {
      date: item.date,
      x: Math.round((chartLeft + index * (width + gap)) * 10) / 10,
      y: Math.round((120 - height) * 10) / 10,
      width: Math.round(width * 10) / 10,
      height: Math.round(height * 10) / 10
    }
  })
}

function mergeMeasurements(base: LifeBodyMeasurement[]) {
  const map = new Map<string, LifeBodyMeasurement>()
  for (const item of base) map.set(item.date, { ...item, source: 'static' })
  return [...map.values()].sort((a, b) => a.date.localeCompare(b.date))
}

function measurementWeightJin(item: LifeBodyMeasurement) {
  if (typeof item.weight_jin === 'number') return item.weight_jin
  if (typeof item.weight_kg === 'number') return Math.round(item.weight_kg * 20) / 10
  return undefined
}

function measurementValue(item: LifeBodyMeasurement, key: 'weight_jin' | 'height_cm') {
  return key === 'weight_jin' ? measurementWeightJin(item) : item.height_cm
}

function measurementPoints(key: 'weight_jin' | 'height_cm') {
  const items = recentMeasurements.value.filter(item => typeof measurementValue(item, key) === 'number')
  if (!items.length) return []
  const values = items.map(item => measurementValue(item, key) as number)
  const minValue = Math.min(...values)
  const maxValue = Math.max(...values)
  const span = Math.max(0.1, maxValue - minValue)
  const step = items.length > 1 ? (CHART_RIGHT - CHART_LEFT) / (items.length - 1) : 0

  return items.map((item, index) => ({
    date: item.date,
    x: Math.round((CHART_LEFT + step * index) * 10) / 10,
    y: Math.round((CHART_BOTTOM - ((measurementValue(item, key) as number) - minValue) / span * (CHART_BOTTOM - CHART_TOP)) * 10) / 10
  }))
}

function inferDiaperSize(dateValue?: string) {
  const date = dateValue ? parseDate(dateValue) : props.today
  const months = dayDiff(date, birthDate.value) / 30.4375
  if (months < 1) return 'NB / 新生儿码'
  if (months < 3) return 'S 码'
  if (months < 7) return 'M 码'
  if (months < 12) return 'L 码'
  if (months < 18) return 'XL 码'
  return 'XXL 码'
}

function formatMonth(value: number) {
  return value < 1 ? `${Math.round(value * 30)}天` : `${value}月`
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value))
}

</script>

<style scoped src="./life-insights.css"></style>
