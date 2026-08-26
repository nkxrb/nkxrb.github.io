<template>
  <main class="calendar-app">
    <div v-if="isDataLoading" class="calendar-loading" role="status">
      <strong>正在载入成长日历</strong>
      <span>有密钥时读取 Gitee 最新记录，否则读取 life/data 静态记录</span>
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

          <section v-if="canEditRecords" class="record-editor" aria-label="新增记录">
            <header>
              <div>
                <span>{{ editingRecord ? 'EDIT RECORD' : 'NEW RECORD' }}</span>
                <strong>{{ editingRecord ? '编辑照护记录' : '新增照护记录' }}</strong>
              </div>
              <em>{{ pendingRecordCount ? `待同步 ${pendingRecordCount} 条` : '写入 Gitee' }}</em>
            </header>

            <div class="record-fields">
              <label>
                <span>日期</span>
                <input v-model="recordForm.date" type="date">
              </label>
              <label>
                <span>时间</span>
                <input v-model="recordForm.time" type="time">
              </label>
            </div>

            <div class="event-picker" aria-label="事件类型">
              <label
                v-for="option in recordOptions"
                :key="option.id"
                class="event-chip"
                :class="{ 'is-checked': recordForm.categories.includes(option.id) }"
              >
                <input v-model="recordForm.categories" type="checkbox" :value="option.id">
                <span>{{ option.label }}</span>
              </label>
            </div>

            <label class="record-note">
              <span>备注</span>
              <textarea v-model="recordForm.note" rows="3" placeholder="奶量、状态、地点或其他补充"></textarea>
            </label>

            <div class="editor-actions">
              <button type="button" class="editor-primary" :disabled="isSavingRecord" @click="saveRecord">
                {{ isSavingRecord ? '写入中' : editingRecord ? '保存修改' : '保存记录' }}
              </button>
              <button v-if="editingRecord" type="button" :disabled="isSavingRecord" @click="cancelEditing">取消编辑</button>
              <button type="button" :disabled="!pendingRecordCount || isSavingRecord" @click="flushPendingRecords">补写待同步</button>
              <button type="button" :disabled="!pendingRecordCount || isSavingRecord" @click="clearPendingRecords">清空待同步</button>
            </div>
          </section>

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
            <li
              v-for="(entry, index) in selectedEntries"
              :key="entry.local_id || `${entry.time}-${index}`"
              :class="{ 'is-special': entry.special, 'is-local': entry.source === 'pending' }"
            >
              <time>{{ entry.time }}</time>
              <span aria-hidden="true" />
              <div class="record-timeline__content">
                <p>{{ entry.note }}<small v-if="entry.source === 'pending'">待同步</small></p>
                <div v-if="canEditRecords" class="record-row-actions">
                  <button type="button" :disabled="isSavingRecord" @click="startEditing(entry)">编辑</button>
                  <button type="button" :disabled="isSavingRecord" @click="deleteRecord(entry)">删除</button>
                </div>
              </div>
            </li>
          </ol>
          <div v-else class="empty-day">
            <span aria-hidden="true">☁</span>
            <strong>这一天还没有日记</strong>
            <p>{{ canEditRecords ? '可以在上方新增照护记录。' : '请选择带绿色标记的日期查看记录。' }}</p>
          </div>
        </section>
      </div>

      <footer class="calendar-footer">原始家庭记录来自 life/data 静态数据 · 新增记录优先写入 Gitee</footer>

      <Transition name="calendar-toast">
        <div v-if="toastMessage" class="calendar-toast" role="status">{{ toastMessage }}</div>
      </Transition>
    </template>
  </main>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, reactive, ref, watch } from 'vue'
import avatarUrl from '../../../../life/assets/avatar.jpg'
import {
  appendLifeRecordToGitee,
  appendLifeRecordsToGitee,
  deleteLifeRecordFromGitee,
  ensureLifeData,
  hasLifeDataSecret,
  lifeData,
  lifeDataError,
  lifeDataLoading,
  lifeDataSecretRequired,
  setLifeDataSecret,
  updateLifeRecordInGitee,
  type LifeMilestone,
  type LifeProfile,
  type LifeRecordCategory,
  type LifeRecordDay,
  type LifeRecordEntry,
  type LifeRecordLocator
} from '../life-data'

type Entry = LifeRecordEntry

interface RecordOption {
  id: LifeRecordCategory
  label: string
}

interface EditingRecord {
  locator: LifeRecordLocator
  source?: LifeRecordEntry['source']
}

const PENDING_RECORDS_KEY = 'life-calendar-pending-records-v1'
const weekNames = ['一', '二', '三', '四', '五', '六', '日']
const recordOptions: RecordOption[] = [
  { id: 'breastfeeding', label: '母乳' },
  { id: 'stool', label: '大便' },
  { id: 'urine', label: '小便' },
  { id: 'diaper', label: '更换尿布' },
  { id: 'clothes', label: '换洗衣服' },
  { id: 'bath', label: '洗澡' },
  { id: 'vaccine', label: '打疫苗' },
  { id: 'special', label: '其他特殊事件' }
]
const categoryPatterns: Record<LifeRecordCategory, RegExp> = {
  breastfeeding: /母乳/,
  stool: /大便|屎|粑粑/,
  urine: /小便|尿(?!布|不湿)/,
  diaper: /更换尿布|换尿布|尿不湿/,
  clothes: /换洗衣服|换衣服/,
  bath: /洗澡|擦洗/,
  vaccine: /打疫苗|疫苗|接种/,
  special: /特殊|脐带|发热|生病|医院/
}
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
const staticRecordsData = computed<LifeRecordDay[]>(() => lifeData.value?.records ?? [])
const milestonesData = computed<LifeMilestone[]>(() => lifeData.value?.milestones ?? [])
const selectedDate = ref('')
const activeYear = ref(0)
const activeMonth = ref(0)
const dataSecret = ref('')
const canEditRecords = ref(false)
const pendingRecords = ref<LifeRecordDay[]>([])
const toastMessage = ref('')
const isSavingRecord = ref(false)
const editingRecord = ref<EditingRecord | null>(null)
const recordForm = reactive({
  date: '',
  time: '',
  categories: [] as LifeRecordCategory[],
  note: ''
})

let toastTimer: ReturnType<typeof setTimeout> | undefined

const todayIso = toIso(new Date())
const isDataLoading = computed(() => lifeDataLoading.value && !lifeData.value)
const dataError = computed(() => !lifeData.value ? lifeDataError.value : '')
const isSecretRequired = computed(() => lifeDataSecretRequired.value)
const recordsData = computed<LifeRecordDay[]>(() => mergeRecordDays(
  staticRecordsData.value,
  canEditRecords.value ? pendingRecords.value : []
))
const pendingRecordCount = computed(() => pendingRecords.value.reduce((sum, day) => sum + day.entries.length, 0))
const availableMonths = computed(() => {
  const months = new Set(recordsData.value.map(day => day.date.slice(0, 7)))
  if (canEditRecords.value) months.add(todayIso.slice(0, 7))
  return [...months].sort()
})
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

function currentTime() {
  const now = new Date()
  return `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`
}

function dayDiff(later: Date, earlier: Date) {
  return Math.round((Date.UTC(later.getFullYear(), later.getMonth(), later.getDate()) - Date.UTC(earlier.getFullYear(), earlier.getMonth(), earlier.getDate())) / 86_400_000)
}

function entrySortMinutes(entry: LifeRecordEntry) {
  const match = entry.time.match(/^(\d{1,2}):(\d{2})/)
  if (!match) return Number.POSITIVE_INFINITY
  return Number(match[1]) * 60 + Number(match[2])
}

function sortEntries(entries: LifeRecordEntry[]) {
  return [...entries].sort((a, b) => entrySortMinutes(a) - entrySortMinutes(b) || a.time.localeCompare(b.time, 'zh-CN'))
}

function mergeRecordDays(staticRecords: LifeRecordDay[], draftRecords: LifeRecordDay[]) {
  const map = new Map<string, LifeRecordEntry[]>()
  for (const day of staticRecords) map.set(day.date, day.entries.map(entry => ({ ...entry, source: 'static' as const })))
  for (const day of draftRecords) {
    const entries = map.get(day.date) || []
    entries.push(...day.entries.map(entry => ({ ...entry, source: 'pending' as const })))
    map.set(day.date, entries)
  }

  return [...map.entries()]
    .map(([date, entries]) => ({ date, entries: sortEntries(entries) }))
    .sort((a, b) => a.date.localeCompare(b.date))
}

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
      special: milestoneMap.value.has(iso) || Boolean(recordMap.value.get(iso)?.some(entry => entry.special)),
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
  if (/大便|屎|粑粑/.test(entry.note)) summary.stool += 1
  if (/小便|尿(?!布|不湿)/.test(entry.note)) summary.urine += 1
  if (/AD|钙|洗澡|换衣服|换洗衣服|擦洗|脐带|尿布|尿不湿|疫苗/.test(entry.note)) summary.care += 1
  return summary
}, { feeding: 0, stool: 0, urine: 0, care: 0 }))

function setActiveMonthFromIso(iso: string) {
  const [year, month] = iso.split('-').map(Number)
  activeYear.value = year
  activeMonth.value = month - 1
}

function selectDate(iso: string) {
  selectedDate.value = iso
  if (canEditRecords.value) recordForm.date = iso
}

function moveMonth(direction: number) {
  const targetIndex = currentMonthIndex.value + direction
  if (targetIndex < 0 || targetIndex >= availableMonths.value.length) return
  const targetMonth = availableMonths.value[targetIndex]
  const [year, month] = targetMonth.split('-').map(Number)
  activeYear.value = year
  activeMonth.value = month - 1
  const monthRecords = recordsData.value.filter(day => day.date.startsWith(targetMonth))
  selectedDate.value = monthRecords.length
    ? monthRecords[monthRecords.length - 1].date
    : `${targetMonth}-01`
  if (canEditRecords.value) recordForm.date = selectedDate.value
}

function syncInitialSelection(records: LifeRecordDay[]) {
  if (selectedDate.value && (canEditRecords.value || recordMap.value.has(selectedDate.value))) return

  const latestRecord = records[records.length - 1]
  const targetDate = canEditRecords.value ? todayIso : latestRecord?.date
  if (!targetDate) return

  selectedDate.value = targetDate
  setActiveMonthFromIso(targetDate)
  if (canEditRecords.value) recordForm.date = targetDate
}

function showToast(message: string) {
  toastMessage.value = message
  if (toastTimer) clearTimeout(toastTimer)
  toastTimer = setTimeout(() => { toastMessage.value = '' }, 2400)
}

function restorePendingRecords() {
  if (!canEditRecords.value) {
    pendingRecords.value = []
    return
  }

  try {
    const stored = localStorage.getItem(PENDING_RECORDS_KEY)
    const parsed = stored ? JSON.parse(stored) : []
    if (!Array.isArray(parsed)) throw new Error('invalid local records')
    pendingRecords.value = parsed
      .filter(day => typeof day?.date === 'string' && Array.isArray(day.entries))
      .map(day => ({
        date: day.date,
        entries: day.entries.filter((entry: LifeRecordEntry) => typeof entry?.time === 'string' && typeof entry?.note === 'string')
      }))
  } catch {
    localStorage.removeItem(PENDING_RECORDS_KEY)
    pendingRecords.value = []
  }
}

function savePendingRecords() {
  localStorage.setItem(PENDING_RECORDS_KEY, JSON.stringify(pendingRecords.value))
}

function upsertPendingRecord(date: string, entry: LifeRecordEntry) {
  const nextRecords = pendingRecords.value.map(day => ({ date: day.date, entries: [...day.entries] }))
  const targetDay = nextRecords.find(day => day.date === date)
  if (targetDay) {
    targetDay.entries = sortEntries([...targetDay.entries, entry])
  } else {
    nextRecords.push({ date, entries: [entry] })
  }

  pendingRecords.value = nextRecords.sort((a, b) => a.date.localeCompare(b.date))
  savePendingRecords()
}

function replacePendingRecord(locator: LifeRecordLocator, nextDate: string, nextEntry: LifeRecordEntry) {
  const nextRecords = pendingRecords.value
    .map(day => ({
      date: day.date,
      entries: day.entries.filter(entry => !recordMatches(day.date, entry, locator))
    }))
    .filter(day => day.entries.length > 0)
  const targetDay = nextRecords.find(day => day.date === nextDate)
  if (targetDay) {
    targetDay.entries = sortEntries([...targetDay.entries, nextEntry])
  } else {
    nextRecords.push({ date: nextDate, entries: [nextEntry] })
  }
  pendingRecords.value = nextRecords.sort((a, b) => a.date.localeCompare(b.date))
  savePendingRecords()
}

function removePendingRecord(locator: LifeRecordLocator) {
  pendingRecords.value = pendingRecords.value
    .map(day => ({
      date: day.date,
      entries: day.entries.filter(entry => !recordMatches(day.date, entry, locator))
    }))
    .filter(day => day.entries.length > 0)
  savePendingRecords()
}

function recordMatches(date: string, entry: LifeRecordEntry, locator: LifeRecordLocator) {
  if (date !== locator.date) return false
  if (locator.local_id || entry.local_id) return entry.local_id === locator.local_id
  return entry.time === locator.time &&
    entry.note === locator.note &&
    Boolean(entry.special) === Boolean(locator.special)
}

function recordLocator(date: string, entry: LifeRecordEntry): LifeRecordLocator {
  return {
    date,
    time: entry.time,
    note: entry.note,
    special: entry.special,
    local_id: entry.local_id
  }
}

function inferCategories(note: string) {
  return recordOptions
    .filter(option => categoryPatterns[option.id].test(note))
    .map(option => option.id)
}

function stripCategoryLabels(note: string, categories: LifeRecordCategory[]) {
  const labels = new Set(categories
    .map(category => recordOptions.find(option => option.id === category)?.label)
    .filter(Boolean))
  return note
    .split(/[，,]/)
    .map(part => part.trim())
    .filter(part => !labels.has(part))
    .join('，')
}

function buildRecordEntry() {
  const date = recordForm.date || selectedDate.value || todayIso
  const time = recordForm.time || currentTime()
  const labels = recordForm.categories
    .map(category => recordOptions.find(option => option.id === category)?.label)
    .filter((label): label is string => Boolean(label))
  const note = [...labels, recordForm.note.trim()].filter(Boolean).join('，')

  if (!date || !time || !note) return null

  return {
    date,
    entry: {
      time,
      note,
      special: recordForm.categories.includes('special') || recordForm.categories.includes('vaccine'),
      categories: [...recordForm.categories],
      created_at: editingRecord.value ? undefined : new Date().toISOString(),
      local_id: editingRecord.value?.locator.local_id || `local-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
    } as LifeRecordEntry
  }
}

function resetRecordForm() {
  recordForm.time = currentTime()
  recordForm.categories = []
  recordForm.note = ''
}

function cancelEditing() {
  editingRecord.value = null
  resetRecordForm()
  recordForm.date = selectedDate.value || todayIso
}

async function flushPendingRecords() {
  if (!canEditRecords.value || !pendingRecordCount.value || isSavingRecord.value) return

  isSavingRecord.value = true
  try {
    await syncPendingRecords()
  } catch {
    showToast('Gitee 暂不可用，待同步记录已保留')
  } finally {
    isSavingRecord.value = false
  }
}

async function syncPendingRecords() {
  await appendLifeRecordsToGitee(pendingRecords.value)
  pendingRecords.value = []
  localStorage.removeItem(PENDING_RECORDS_KEY)
  syncInitialSelection(recordsData.value)
  showToast('待同步记录已写入 Gitee')
}

async function saveRecord() {
  const payload = buildRecordEntry()
  if (!payload) {
    showToast('请至少选择一个事件或填写备注')
    return
  }
  const { date, entry } = payload

  isSavingRecord.value = true
  if (editingRecord.value) {
    const currentEditing = editingRecord.value
    try {
      if (currentEditing.source === 'pending') {
        replacePendingRecord(currentEditing.locator, date, entry)
        showToast('待同步记录已修改')
      } else {
        await updateLifeRecordInGitee(currentEditing.locator, date, entry)
        showToast('记录已更新')
      }
      selectDate(date)
      setActiveMonthFromIso(date)
      cancelEditing()
    } catch {
      showToast('记录更新失败，请刷新后重试')
    } finally {
      isSavingRecord.value = false
    }
    return
  }

  try {
    await appendLifeRecordToGitee(date, entry)
    selectDate(date)
    setActiveMonthFromIso(date)
    resetRecordForm()
    showToast('记录已写入 Gitee')
    if (pendingRecordCount.value) {
      try {
        await syncPendingRecords()
      } catch {
        showToast('记录已写入 Gitee，待同步记录稍后重试')
      }
    }
  } catch {
    upsertPendingRecord(date, entry)
    selectDate(date)
    setActiveMonthFromIso(date)
    resetRecordForm()
    showToast('Gitee 写入失败，已暂存待同步')
  } finally {
    isSavingRecord.value = false
  }
}

function startEditing(entry: LifeRecordEntry) {
  if (!canEditRecords.value || isSavingRecord.value) return
  const categories = entry.categories?.length ? entry.categories : inferCategories(entry.note)
  editingRecord.value = {
    locator: recordLocator(selectedDate.value, entry),
    source: entry.source
  }
  recordForm.date = selectedDate.value || todayIso
  recordForm.time = entry.time.match(/^\d{1,2}:\d{2}/)?.[0] || currentTime()
  recordForm.categories = [...categories]
  recordForm.note = stripCategoryLabels(entry.note, categories)
}

async function deleteRecord(entry: LifeRecordEntry) {
  if (!canEditRecords.value || isSavingRecord.value) return
  if (!window.confirm('删除这条记录？')) return
  const locator = recordLocator(selectedDate.value, entry)

  isSavingRecord.value = true
  try {
    if (entry.source === 'pending') {
      removePendingRecord(locator)
      showToast('待同步记录已删除')
    } else {
      await deleteLifeRecordFromGitee(locator)
      showToast('记录已删除')
    }
    if (editingRecord.value && recordMatches(locator.date, locator, editingRecord.value.locator)) cancelEditing()
  } catch {
    showToast('删除失败，请刷新后重试')
  } finally {
    isSavingRecord.value = false
  }
}

function clearPendingRecords() {
  if (!pendingRecordCount.value) return
  if (!window.confirm('清空待同步记录？')) return
  pendingRecords.value = []
  localStorage.removeItem(PENDING_RECORDS_KEY)
  syncInitialSelection(recordsData.value)
  showToast('待同步记录已清空')
}

async function reloadData() {
  await ensureLifeData({ force: true })
  syncInitialSelection(recordsData.value)
}

async function submitDataSecret() {
  await setLifeDataSecret(dataSecret.value)
  canEditRecords.value = hasLifeDataSecret()
  restorePendingRecords()
  syncInitialSelection(recordsData.value)
  void flushPendingRecords()
}

watch(recordsData, syncInitialSelection)

onMounted(async () => {
  canEditRecords.value = hasLifeDataSecret()
  recordForm.date = todayIso
  recordForm.time = currentTime()
  restorePendingRecords()
  await ensureLifeData()
  syncInitialSelection(recordsData.value)
  void flushPendingRecords()
})

onBeforeUnmount(() => {
  if (toastTimer) clearTimeout(toastTimer)
})
</script>

<style scoped src="./life-calendar.css"></style>
