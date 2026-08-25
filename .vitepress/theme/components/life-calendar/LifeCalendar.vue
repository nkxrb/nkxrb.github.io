<template>
  <main class="calendar-app">
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
    <footer class="calendar-footer">原始家庭记录静态保存于本页面 · 日期星期由浏览器自动计算</footer>
  </main>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import avatarUrl from '../../../../life/assets/avatar.jpg'
import milestonesData from '../../../../life/data/milestones.json'
import recordsData from '../../../../life/data/newborn-records.json'
import profile from '../../../../life/data/profile.json'

type Entry = typeof recordsData[number]['entries'][number]

const weekNames = ['一', '二', '三', '四', '五', '六', '日']
const availableMonths = [...new Set(recordsData.map(day => day.date.slice(0, 7)))].sort()
const latestRecord = recordsData[recordsData.length - 1]
const selectedDate = ref(latestRecord.date)
const [initialYear, initialMonth] = latestRecord.date.split('-').map(Number)
const activeYear = ref(initialYear)
const activeMonth = ref(initialMonth - 1)

const recordMap = new Map(recordsData.map(day => [day.date, day.entries]))
const milestoneMap = new Map<string, typeof milestonesData>()
milestonesData.forEach(item => {
  const list = milestoneMap.get(item.date) || []
  list.push(item)
  milestoneMap.set(item.date, list)
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
const currentMonthIndex = computed(() => availableMonths.indexOf(currentMonthKey.value))
const canGoPrevious = computed(() => currentMonthIndex.value > 0)
const canGoNext = computed(() => currentMonthIndex.value >= 0 && currentMonthIndex.value < availableMonths.length - 1)
const monthRecordCount = computed(() => recordsData
  .filter(day => day.date.startsWith(currentMonthKey.value))
  .reduce((sum, day) => sum + day.entries.length, 0))

const calendarCells = computed(() => {
  const first = new Date(activeYear.value, activeMonth.value, 1)
  const mondayIndex = (first.getDay() + 6) % 7
  const gridStart = new Date(activeYear.value, activeMonth.value, 1 - mondayIndex)
  return Array.from({ length: 42 }, (_, index) => {
    const date = new Date(gridStart.getFullYear(), gridStart.getMonth(), gridStart.getDate() + index)
    const iso = toIso(date)
    const count = recordMap.get(iso)?.length || 0
    const weekday = new Intl.DateTimeFormat('zh-CN', { weekday: 'long' }).format(date)
    return {
      key: iso,
      iso,
      day: date.getDate(),
      count,
      special: milestoneMap.has(iso),
      inMonth: date.getMonth() === activeMonth.value,
      ariaLabel: `${date.getMonth() + 1}月${date.getDate()}日，${weekday}${count ? `，${count}条记录` : ''}`
    }
  })
})

const selectedEntries = computed<Entry[]>(() => recordMap.get(selectedDate.value) || [])
const selectedMilestones = computed(() => milestoneMap.get(selectedDate.value) || [])
const selectedDateLabel = computed(() => {
  const date = parseDate(selectedDate.value)
  return {
    date: `${date.getMonth() + 1}月${date.getDate()}日`,
    weekday: new Intl.DateTimeFormat('zh-CN', { weekday: 'long' }).format(date)
  }
})
const selectedLifeDay = computed(() => Math.max(1, dayDiff(parseDate(selectedDate.value), parseDate(profile.birth_date)) + 1))
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
  if (targetIndex < 0 || targetIndex >= availableMonths.length) return
  const [year, month] = availableMonths[targetIndex].split('-').map(Number)
  activeYear.value = year
  activeMonth.value = month - 1
  const monthRecords = recordsData.filter(day => day.date.startsWith(availableMonths[targetIndex]))
  if (monthRecords.length) selectedDate.value = monthRecords[monthRecords.length - 1].date
}
</script>

<style scoped src="./life-calendar.css"></style>
