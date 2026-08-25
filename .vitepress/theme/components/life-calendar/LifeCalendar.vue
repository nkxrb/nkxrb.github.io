<template>
  <main class="calendar-app">
    <div v-if="isDataLoading" class="calendar-loading" role="status">
      <strong>正在同步成长日历</strong>
      <span>通过 Gitee 数据仓库读取最新记录</span>
    </div>
    <div v-else-if="dataError" class="calendar-loading calendar-loading--error" role="alert">
      <strong>数据加载失败</strong>
      <span>{{ dataError }}</span>
      <form v-if="isSecretRequired" class="calendar-secret-form" @submit.prevent="submitDataSecret">
        <input v-model="dataSecret" type="password" placeholder="数据访问密钥" autocomplete="current-password">
        <button type="submit">同步</button>
      </form>
      <button type="button" @click="reloadData">重试</button>
    </div>
    <template v-else>
      <header class="calendar-hero">
      <a href="/life/" class="back-link"><span aria-hidden="true">←</span> 守护板</a>
      <img :src="avatarUrl" :alt="`${profile.name}的头像`">
      <div>
        <p>GROWTH CALENDAR</p>
        <h1>{{ profile.name }}的成长日历</h1>
        <span>从细碎日常里，看见生命一天天长大</span>
      </div>
    </header>

    <div class="calendar-shell">
      <section class="month-panel" aria-label="月历">
        <header class="month-nav">
          <button type="button" :disabled="!canGoPrevious" aria-label="上个月" @click="moveMonth(-1)">←</button>
          <div><strong>{{ activeYear }}年 {{ activeMonth + 1 }}月</strong><span>{{ monthRecordCount }} 条记录</span></div>
          <button type="button" :disabled="!canGoNext" aria-label="下个月" @click="moveMonth(1)">→</button>
        </header>

        <div class="week-row" aria-hidden="true">
          <span v-for="day in weekNames" :key="day">{{ day }}</span>
        </div>
        <div class="month-grid">
          <button
            v-for="cell in calendarCells"
            :key="cell.key"
            type="button"
            class="day-cell"
            :class="{
              'is-outside': !cell.inMonth,
              'has-records': cell.count > 0,
              'is-selected': cell.iso === selectedDate,
              'is-today': cell.iso === todayIso
            }"
            :disabled="!cell.inMonth"
            :aria-label="cell.ariaLabel"
            @click="selectDate(cell.iso)"
          >
            <span>{{ cell.day }}</span>
            <small v-if="cell.count">{{ cell.count }}</small>
            <i v-if="cell.special" aria-label="特殊时刻" />
          </button>
        </div>
        <footer class="calendar-legend">
          <span><i class="legend-record" />有日记</span>
          <span><i class="legend-special" />特别时刻</span>
        </footer>
      </section>

      <section class="day-panel" aria-labelledby="selected-day-title">
        <header class="day-heading">
          <div>
            <p>{{ selectedDateLabel.weekday }}</p>
            <h2 id="selected-day-title">{{ selectedDateLabel.date }}</h2>
            <span>出生第 {{ selectedLifeDay }} 天</span>
          </div>
          <strong>{{ selectedEntries.length }}<small>条记录</small></strong>
        </header>

        <div v-if="selectedMilestones.length" class="day-milestones">
          <article v-for="item in selectedMilestones" :key="item.id">
            <span aria-hidden="true">{{ item.icon }}</span>
            <div><strong>{{ item.title }}</strong><small>{{ item.detail }}</small></div>
          </article>
        </div>

        <div v-if="selectedEntries.length" class="day-summary">
          <div><span>哺乳</span><strong>{{ dailySummary.feeding }}</strong></div>
          <div><span>大便</span><strong>{{ dailySummary.stool }}</strong></div>
          <div><span>小便</span><strong>{{ dailySummary.urine }}</strong></div>
          <div><span>护理/营养</span><strong>{{ dailySummary.care }}</strong></div>
        </div>

        <ol v-if="selectedEntries.length" class="record-timeline">
          <li v-for="(entry, index) in selectedEntries" :key="`${entry.time}-${index}`" :class="{ 'is-special': entry.special }">
            <time>{{ entry.time }}</time>
            <span aria-hidden="true" />
            <p>{{ entry.note }}</p>
          </li>
        </ol>
        <div v-else class="empty-day">
          <span aria-hidden="true">☁</span>
          <strong>这一天还没有日记</strong>
          <p>请选择带绿色标记的日期查看记录。</p>
        </div>
      </section>
    </div>
    <footer class="calendar-footer">原始家庭记录由 Gitee 数据仓库同步 · 日期星期由浏览器自动计算</footer>
    </template>
  </main>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import avatarUrl from '../../../../life/assets/avatar.jpg'
import {
  ensureLifeData,
  lifeData,
  lifeDataError,
  lifeDataLoading,
  lifeDataSecretRequired,
  setLifeDataSecret,
  type LifeMilestone,
  type LifeProfile,
  type LifeRecordDay,
  type LifeRecordEntry
} from '../life-data'

type Entry = LifeRecordEntry

const weekNames = ['一', '二', '三', '四', '五', '六', '日']
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
const recordsData = computed<LifeRecordDay[]>(() => lifeData.value?.records ?? [])
const milestonesData = computed<LifeMilestone[]>(() => lifeData.value?.milestones ?? [])
const selectedDate = ref('')
const activeYear = ref(0)
const activeMonth = ref(0)
const dataSecret = ref('')
const isDataLoading = computed(() => lifeDataLoading.value && !lifeData.value)
const dataError = computed(() => !lifeData.value ? lifeDataError.value : '')
const isSecretRequired = computed(() => lifeDataSecretRequired.value)

const availableMonths = computed(() => [...new Set(recordsData.value.map(day => day.date.slice(0, 7)))].sort())
const recordMap = computed(() => new Map(recordsData.value.map(day => [day.date, day.entries])))
const milestoneMap = computed(() => {
  const map = new Map<string, LifeMilestone[]>()
  milestonesData.value.forEach(item => {
    const list = map.get(item.date) || []
    list.push(item)
    map.set(item.date, list)
  })
  return map
})

function parseDate(value: string) {
  const [year, month, day] = value.split('-').map(Number)
  return new Date(year, month - 1, day)
}

function toIso(date: Date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
}

function dayDiff(later: Date, earlier: Date) {
  return Math.round((Date.UTC(later.getFullYear(), later.getMonth(), later.getDate()) - Date.UTC(earlier.getFullYear(), earlier.getMonth(), earlier.getDate())) / 86_400_000)
}

const todayIso = toIso(new Date())
const currentMonthKey = computed(() => `${activeYear.value}-${String(activeMonth.value + 1).padStart(2, '0')}`)
const currentMonthIndex = computed(() => availableMonths.value.indexOf(currentMonthKey.value))
const canGoPrevious = computed(() => currentMonthIndex.value > 0)
const canGoNext = computed(() => currentMonthIndex.value >= 0 && currentMonthIndex.value < availableMonths.value.length - 1)
const monthRecordCount = computed(() => recordsData.value
  .filter(day => day.date.startsWith(currentMonthKey.value))
  .reduce((sum, day) => sum + day.entries.length, 0))

const calendarCells = computed(() => {
  if (!selectedDate.value) return []
  const first = new Date(activeYear.value, activeMonth.value, 1)
  const mondayIndex = (first.getDay() + 6) % 7
  const gridStart = new Date(activeYear.value, activeMonth.value, 1 - mondayIndex)
  return Array.from({ length: 42 }, (_, index) => {
    const date = new Date(gridStart.getFullYear(), gridStart.getMonth(), gridStart.getDate() + index)
    const iso = toIso(date)
    const count = recordMap.value.get(iso)?.length || 0
    const weekday = new Intl.DateTimeFormat('zh-CN', { weekday: 'long' }).format(date)
    return {
      key: iso,
      iso,
      day: date.getDate(),
      count,
      special: milestoneMap.value.has(iso),
      inMonth: date.getMonth() === activeMonth.value,
      ariaLabel: `${date.getMonth() + 1}月${date.getDate()}日，${weekday}${count ? `，${count}条记录` : ''}`
    }
  })
})

const selectedEntries = computed<Entry[]>(() => recordMap.value.get(selectedDate.value) || [])
const selectedMilestones = computed(() => milestoneMap.value.get(selectedDate.value) || [])
const selectedDateLabel = computed(() => {
  if (!selectedDate.value) return { date: '', weekday: '' }
  const date = parseDate(selectedDate.value)
  return {
    date: `${date.getMonth() + 1}月${date.getDate()}日`,
    weekday: new Intl.DateTimeFormat('zh-CN', { weekday: 'long' }).format(date)
  }
})
const selectedLifeDay = computed(() => selectedDate.value
  ? Math.max(1, dayDiff(parseDate(selectedDate.value), parseDate(profile.value.birth_date)) + 1)
  : 1)
const dailySummary = computed(() => selectedEntries.value.reduce((summary, entry) => {
  if (/母乳|奶粉/.test(entry.note)) summary.feeding += 1
  if (/大便|屎/.test(entry.note)) summary.stool += 1
  if (/小便/.test(entry.note)) summary.urine += 1
  if (/AD|钙|洗澡|换衣服|擦洗|脐带/.test(entry.note)) summary.care += 1
  return summary
}, { feeding: 0, stool: 0, urine: 0, care: 0 }))

function selectDate(iso: string) {
  selectedDate.value = iso
}

function moveMonth(direction: number) {
  const targetIndex = currentMonthIndex.value + direction
  if (targetIndex < 0 || targetIndex >= availableMonths.value.length) return
  const [year, month] = availableMonths.value[targetIndex].split('-').map(Number)
  activeYear.value = year
  activeMonth.value = month - 1
  const monthRecords = recordsData.value.filter(day => day.date.startsWith(availableMonths.value[targetIndex]))
  if (monthRecords.length) selectedDate.value = monthRecords[monthRecords.length - 1].date
}

function syncInitialSelection(records: LifeRecordDay[]) {
  if (!records.length) return
  if (selectedDate.value && recordMap.value.has(selectedDate.value)) return

  const latestRecord = records[records.length - 1]
  selectedDate.value = latestRecord.date
  const [year, month] = latestRecord.date.split('-').map(Number)
  activeYear.value = year
  activeMonth.value = month - 1
}

async function reloadData() {
  await ensureLifeData({ force: true })
  syncInitialSelection(recordsData.value)
}

async function submitDataSecret() {
  await setLifeDataSecret(dataSecret.value)
  syncInitialSelection(recordsData.value)
}

watch(recordsData, syncInitialSelection)

onMounted(async () => {
  await ensureLifeData()
  syncInitialSelection(recordsData.value)
})
</script>

<style scoped src="./life-calendar.css"></style>
