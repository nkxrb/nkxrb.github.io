<template>
  <main class="album-app">
    <div v-if="!isAccessChecked" class="album-entry-loading" aria-hidden="true"></div>

    <template v-if="isAccessChecked && connected">
      <header class="album-hero">
      <div class="album-hero__grain" aria-hidden="true"></div>
      <nav class="album-hero__nav" aria-label="纪念册导航">
        <a href="/life/" class="album-back">← 返回成长页</a>
        <span>MEMORY BOOK</span>
      </nav>
      <div class="album-hero__copy">
        <p class="album-kicker">MEMORY BOOK</p>
        <h1>时光机</h1>
        <p>一个事件可以放进一组照片。让画面、日期和几句话，慢慢长成属于 {{ profile.name }} 的故事。</p>
      </div>
      </header>

      <div class="album-workspace">
      <section class="album-editor" aria-labelledby="album-editor-title">
        <div class="album-cloud">
          <div class="album-cloud__copy">
            <span class="album-kicker">KEEP THE DAYS</span>
            <strong>把这本纪念册留存下来</strong>
            <small>给故事加上一把只属于家人的钥匙。</small>
          </div>
          <form v-if="!connected" @submit.prevent="connectCloud">
            <input v-model="secretInput" type="password" autocomplete="current-password" placeholder="家庭数据密码" aria-label="家庭数据密码">
            <button type="submit" :disabled="isSyncing">连接</button>
          </form>
          <div v-else class="album-cloud__actions">
            <button type="button" :disabled="isSyncing" @click="loadSavedAlbum">读取已保存</button>
            <button type="button" :disabled="isSyncing || !photoCount" @click="saveAlbum">保存到家庭存储</button>
          </div>
          <p v-if="cloudMessage" class="album-sr-only" role="status">{{ cloudMessage }}</p>
        </div>

        <div class="album-section-heading">
          <span>01 / COLLECT THE MOMENTS</span>
          <h2 id="album-editor-title">先收集事件，再放入照片</h2>
          <p>同一个事件可以收进多张照片，让日期、画面和一句话彼此呼应。</p>
        </div>

        <div class="album-editor-actions">
          <label class="album-upload-button">
            <input type="file" accept="image/*" multiple :disabled="isSyncing" @change="addPhotos">
            <span aria-hidden="true">＋</span> 添加照片
          </label>
          <button type="button" class="album-add-event" :disabled="isSyncing" @click="addEvent">
            <span aria-hidden="true">✦</span> 新增事件
          </button>
          <small>{{ photoCount }} 张 · {{ events.length }} 个事件</small>
        </div>
        <p v-if="uploadMessage" class="album-message album-sr-only" role="status">{{ uploadMessage }}</p>

        <div v-if="events.length" class="album-event-list">
          <article
            v-for="(event, eventIndex) in events"
            :key="event.id"
            class="album-event-editor"
            :class="{ 'is-active': activeEventId === event.id }"
            @focusin="activeEventId = event.id"
          >
            <div class="album-event-editor__top">
              <div>
                <span class="album-event-editor__index">EVENT {{ String(eventIndex + 1).padStart(2, '0') }}</span>
                <strong>{{ event.title || '未命名事件' }}</strong>
                <small>{{ event.photos.length }} 张照片{{ event.date ? ` · ${formatAlbumDate(event.date)}` : '' }}</small>
              </div>
              <div class="album-inline-actions">
                <button type="button" :disabled="eventIndex === 0" :aria-label="`将事件 ${eventIndex + 1} 上移`" @click="moveEvent(eventIndex, -1)">↑</button>
                <button type="button" :disabled="eventIndex === events.length - 1" :aria-label="`将事件 ${eventIndex + 1} 下移`" @click="moveEvent(eventIndex, 1)">↓</button>
                <button type="button" class="album-danger-button" :aria-label="`删除事件 ${eventIndex + 1}`" @click="removeEvent(eventIndex)">删除</button>
              </div>
            </div>

            <div class="album-event-editor__body">
              <div class="album-event-photos">
                <div v-for="(photo, photoIndex) in event.photos" :key="photo.id" class="album-photo-tile">
                  <img :src="photo.url" :alt="photo.caption || `${event.title || '事件'}的第 ${photoIndex + 1} 张照片`" loading="lazy" decoding="async">
                  <span class="album-photo-tile__number">{{ String(photoIndex + 1).padStart(2, '0') }}</span>
                  <button type="button" class="album-photo-tile__remove" :aria-label="`移除第 ${photoIndex + 1} 张照片`" @click="removePhoto(eventIndex, photoIndex)">×</button>
                  <div class="album-photo-tile__move">
                    <button type="button" :disabled="photoIndex === 0" :aria-label="`将照片 ${photoIndex + 1} 前移`" @click="movePhoto(eventIndex, photoIndex, -1)">←</button>
                    <button type="button" :disabled="photoIndex === event.photos.length - 1" :aria-label="`将照片 ${photoIndex + 1} 后移`" @click="movePhoto(eventIndex, photoIndex, 1)">→</button>
                  </div>
                </div>
                <label class="album-photo-add-tile">
                  <input type="file" accept="image/*" multiple :disabled="isSyncing" @change="addPhotos($event, event.id)">
                  <span aria-hidden="true">＋</span>
                  <strong>继续加入</strong>
                  <small>同一事件的照片</small>
                </label>
              </div>

              <div class="album-event-fields">
                <label>
                  <span>发生日期</span>
                  <input v-model="event.date" type="date">
                </label>
                <label>
                  <span>事件标题</span>
                  <input v-model="event.title" type="text" maxlength="60" placeholder="例如：第一次出门散步">
                </label>
                <label>
                  <span>写下这一刻</span>
                  <textarea v-model="event.caption" rows="4" maxlength="260" placeholder="当时发生了什么？你想把哪句话留给未来的他？"></textarea>
                </label>
              </div>
            </div>
          </article>
        </div>

        <div v-else class="album-editor-empty">
          <span aria-hidden="true">✦</span>
          <strong>从一个事件开始</strong>
          <p>点击“新增事件”，或直接添加照片，我们会为你准备第一章。</p>
        </div>

        <div class="album-section-heading album-section-heading--avatar">
          <span>02 / PORTRAIT SETTINGS</span>
          <h2 id="album-avatar-title">头像设置</h2>
          <p>替成长故事挑选一张熟悉的脸。</p>
        </div>
        <section class="album-avatar-settings" aria-labelledby="album-avatar-title">
          <div class="album-avatar-preview">
            <div class="album-avatar-preview__ring">
              <img v-if="avatarPhoto" :src="avatarPhoto.url" :alt="`${profile.name}的当前头像`" loading="lazy" decoding="async">
              <span v-else aria-hidden="true">{{ profile.name.slice(0, 1) }}</span>
            </div>
            <small>{{ avatarPhoto ? '当前头像' : '使用默认头像' }}</small>
          </div>
          <div class="album-avatar-controls">
            <p>选一张喜欢的照片，作为这本册子的头像。</p>
            <div v-if="photoCount" class="album-avatar-options">
              <button v-for="photo in allPhotos" :key="photo.id" type="button" class="album-avatar-option" :class="{ 'is-selected': avatarPhotoId === photo.id }" :aria-label="`将这张照片设为头像`" :aria-pressed="avatarPhotoId === photo.id" @click="selectAvatar(photo)">
                <img :src="photo.url" alt="" loading="lazy" decoding="async">
                <span v-if="avatarPhotoId === photo.id">当前</span>
              </button>
            </div>
            <button type="button" class="album-avatar-reset" :disabled="!avatarPhotoId" @click="clearAvatar">恢复默认头像</button>
            <p v-if="avatarMessage" class="album-avatar-message album-sr-only" role="status">{{ avatarMessage }}</p>
          </div>
        </section>

        <div class="album-section-heading album-section-heading--details">
          <span>03 / WRITE THE HEART</span>
          <h2>封面与寄语</h2>
        </div>
        <div class="album-general-fields">
          <label><span>纪念册标题</span><input v-model="bookTitle" type="text" maxlength="40"></label>
          <label><span>写给 {{ profile.name }} 的话</span><textarea v-model="dedication" rows="3" maxlength="240" placeholder="想对长大后的你说什么？"></textarea></label>
        </div>

        <button class="album-generate" type="button" :disabled="!photoCount" @click="generateStory">
          <span>{{ generated ? '更新纪念册' : '生成纪念册' }}</span><span aria-hidden="true">↗</span>
        </button>
        <p class="album-local-note">把每一个平凡瞬间，留给未来慢慢重逢。</p>
      </section>

      <section class="album-preview" aria-labelledby="album-preview-title">
        <div class="album-preview__heading">
          <div>
            <span>03 / READ THE STORY</span>
            <h2 id="album-preview-title">{{ generated ? '你的成长长卷' : '故事还在等第一章' }}</h2>
          </div>
          <div class="album-preview__actions">
            <button v-if="generated" type="button" class="album-reader-button" @click="openReader"><span aria-hidden="true">◉</span> 开始长卷阅读</button>
            <button v-if="generated" type="button" @click="printAlbum">打印 / 存为 PDF</button>
          </div>
        </div>

        <div v-if="!generated" class="album-empty">
          <span aria-hidden="true">✦</span>
          <strong>故事从一张照片开始</strong>
          <p>把照片放进事件，写下一句话，再滚动查看你的第一版长卷。</p>
        </div>

        <div v-else>
          <label class="album-story-edit"><span>编辑整本书的尾声与旁白</span><textarea v-model="story" rows="6"></textarea></label>
          <div class="album-book">
            <article class="album-page album-cover">
              <img v-if="firstPhoto" :src="firstPhoto.url" alt="纪念册封面照片" loading="lazy" decoding="async">
              <div class="album-cover__wash" aria-hidden="true"></div>
              <div class="album-cover__copy">
                <span>THE LITTLE DAYS</span>
                <h2>{{ bookTitle || `${profile.name}的成长纪念册` }}</h2>
                <p>{{ dedication || '愿这些小小的日子，在未来依然闪闪发光。' }}</p>
                <small>{{ eventCount }} CHAPTERS · {{ photoCount }} PHOTOGRAPHS</small>
              </div>
            </article>

            <article v-for="(event, index) in eventsWithPhotos" :key="event.id" class="album-page album-story-page">
              <div class="album-story-page__meta"><span>CHAPTER {{ String(index + 1).padStart(2, '0') }}</span><time v-if="event.date" :datetime="event.date">{{ formatAlbumDate(event.date) }}</time></div>
              <div class="album-story-gallery" :class="`album-story-gallery--${Math.min(event.photos.length, 4)}`">
                <button v-for="photo in event.photos" :key="photo.id" type="button">
                  <img :src="photo.url" :alt="photo.caption || `${event.title || '事件'}照片`" loading="lazy" decoding="async">
                </button>
              </div>
              <h3>{{ event.title || '记住这一刻' }}</h3>
              <p>{{ pageStory(event, index) }}</p>
            </article>

            <article class="album-page album-ending">
              <span>TO BE CONTINUED</span>
              <h2>亲爱的 {{ profile.name }}</h2>
              <p class="album-ending__story">{{ story }}</p>
              <p>往后的每一天，故事还会继续。</p>
            </article>
          </div>
        </div>
      </section>
      </div>
    </template>

    <AlbumStoryLongPage
      v-if="isAccessChecked && isReaderOpen"
      :profile-name="profile.name"
      :title="bookTitle"
      :dedication="dedication"
      :story="story"
      :events="eventsWithPhotos"
      @close="closeReader"
    />

  </main>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import profile from '../../../../life/data/profile.json'
import AlbumStoryLongPage from './AlbumStoryLongPage.vue'
import type { AlbumEvent, AlbumPhoto } from './album-types'
import milestones from '../../../../life/data/milestones.json'
import {
  clearLifeDataSecret,
  hasLifeDataSecret,
  loadLifeAlbumFromRemote,
  loadLifeAlbumImageFromRemote,
  refreshLifeAvatarFromRemote,
  saveLifeAlbumToRemote,
  setLifeDataSecret,
  syncLifeAppleTouchIcon,
  uploadLifeAlbumImageToRemote,
  verifyLifeDataRemoteAccess,
  type LifeAlbumManifest
} from '../life-data'

const MAX_FILE_SIZE = 15 * 1024 * 1024
const events = ref<AlbumEvent[]>([])
const activeEventId = ref('')
const bookTitle = ref(`${profile.name}的成长纪念册`)
const dedication = ref('愿你带着爱，慢慢长大。')
const story = ref('')
const generated = ref(false)
const uploadMessage = ref('')
const avatarPhotoId = ref('')
const connected = ref(false)
const isSyncing = ref(false)
const secretInput = ref('')
const cloudMessage = ref('')
const isReaderOpen = ref(false)
const avatarMessage = ref('')
const isAccessChecked = ref(false)

const allPhotos = computed(() => events.value.flatMap(event => event.photos))
const eventsWithPhotos = computed(() => events.value.filter(event => event.photos.length))
const eventCount = computed(() => eventsWithPhotos.value.length)
const photoCount = computed(() => allPhotos.value.length)
const firstPhoto = computed(() => allPhotos.value[0] || null)
const avatarPhoto = computed(() => allPhotos.value.find(photo => photo.id === avatarPhotoId.value) || null)

function makeId(prefix: string) {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
}

function createEvent() {
  const event: AlbumEvent = { id: makeId('event'), date: '', title: '', caption: '', photos: [] }
  events.value.push(event)
  activeEventId.value = event.id
  generated.value = false
  return event
}

function addEvent() {
  createEvent()
  uploadMessage.value = '已新增一个事件，可以继续为它加入照片。'
}

function addPhotos(inputEvent: Event, eventId = activeEventId.value) {
  const input = inputEvent.target as HTMLInputElement
  const files = Array.from(input.files || [])
  if (!files.length) return

  const target = events.value.find(event => event.id === eventId) || events.value.at(-1) || createEvent()
  activeEventId.value = target.id
  const accepted = files
    .filter(file => file.type.startsWith('image/') && file.size <= MAX_FILE_SIZE)

  for (const file of accepted) {
    target.photos.push({
      id: makeId('photo'),
      url: URL.createObjectURL(file),
      date: target.date,
      caption: '',
      file
    })
  }
  if (accepted.length) generated.value = false
  uploadMessage.value = files.length === accepted.length
    ? `已加入 ${accepted.length} 张照片到「${target.title || '未命名事件'}」`
    : `已加入 ${accepted.length} 张；未加入的图片需要小于 15 MB。`
  input.value = ''
}

function removeEvent(index: number) {
  const [event] = events.value.splice(index, 1)
  if (!event) return
  for (const photo of event.photos) URL.revokeObjectURL(photo.url)
  if (event.id === activeEventId.value) activeEventId.value = events.value[index]?.id || events.value[index - 1]?.id || ''
  if (event.photos.some(photo => photo.id === avatarPhotoId.value)) clearAvatar()
  generated.value = false
}

function moveEvent(index: number, offset: number) {
  const target = index + offset
  if (target < 0 || target >= events.value.length) return
  const [event] = events.value.splice(index, 1)
  events.value.splice(target, 0, event)
  generated.value = false
}

function removePhoto(eventIndex: number, photoIndex: number) {
  const event = events.value[eventIndex]
  if (!event) return
  const [photo] = event.photos.splice(photoIndex, 1)
  if (photo) URL.revokeObjectURL(photo.url)
  if (photo?.id === avatarPhotoId.value) clearAvatar()
  generated.value = false
}

function movePhoto(eventIndex: number, photoIndex: number, offset: number) {
  const event = events.value[eventIndex]
  if (!event) return
  const target = photoIndex + offset
  if (target < 0 || target >= event.photos.length) return
  const [photo] = event.photos.splice(photoIndex, 1)
  event.photos.splice(target, 0, photo)
  generated.value = false
}

function formatAlbumDate(iso: string) {
  const [year, month, day] = iso.split('-')
  return year && month && day ? `${year} 年 ${Number(month)} 月 ${Number(day)} 日` : '日期待补充'
}

function dayOfLife(iso: string) {
  const birth = new Date(`${profile.birth_date}T00:00:00`)
  const date = new Date(`${iso}T00:00:00`)
  const days = Math.round((date.getTime() - birth.getTime()) / 86_400_000)
  return Number.isFinite(days) && days >= 0 ? `出生第 ${days} 天` : ''
}

function pageStory(event: AlbumEvent, index: number) {
  const moment = milestones.find(item => item.date === event.date)
  const age = event.date ? dayOfLife(event.date) : ''
  const opening = age ? `${age}，` : index === 0 ? '故事刚刚开始，' : '又一个值得记住的日子，'
  const memory = event.caption.trim() || event.title.trim() || '我们留下了这一刻的模样'
  const punctuation = /[。！？!?]$/.test(memory) ? '' : '。'
  return `${opening}${memory}${punctuation}${moment ? `这天也是“${moment.title}”的日子。` : ''}`
}

function generateStory() {
  if (!photoCount.value) return
  const firstDate = eventsWithPhotos.value.find(event => event.date)?.date
  const opening = firstDate
    ? `从 ${formatAlbumDate(firstDate)} 开始，我们把 ${profile.name} 长大的片刻收进了这本小书。`
    : `我们把 ${profile.name} 长大的片刻收进了这本小书。`
  story.value = [opening, ...eventsWithPhotos.value.map(pageStory), dedication.value.trim() || '愿你带着爱，慢慢长大。'].join('\n\n')
  generated.value = true
}

function printAlbum() {
  window.print()
}

function selectAvatar(photo: AlbumPhoto) {
  avatarPhotoId.value = photo.id
  avatarMessage.value = '头像已更新，保存纪念册后会同步到家庭存储。'
  syncLifeAppleTouchIcon(photo.url)
}

function clearAvatar() {
  avatarPhotoId.value = ''
  avatarMessage.value = '已恢复默认头像。'
  syncLifeAppleTouchIcon(null)
}

function publicAlbumAssetUrl(path: string) {
  const base = import.meta.env.BASE_URL || '/'
  return `${base.replace(/\/$/, '')}/${path.replace(/^\/+/, '')}`
}

function isPublicAlbumMediaPath(value: unknown): value is string {
  return typeof value === 'string' && /^life\/media\/[a-z0-9-]+\.jpg$/u.test(value)
}

interface PublicAlbumManifest {
  title: string
  dedication: string
  story: string
  avatarPath: string
  events: AlbumEvent[]
}

function normalizePublicAlbum(data: unknown): PublicAlbumManifest {
  const raw = data && typeof data === 'object' ? data as Record<string, unknown> : {}
  const legacyPhotos = Array.isArray(raw.photos) ? raw.photos : []
  const rawEvents = Array.isArray(raw.events)
    ? raw.events
    : legacyPhotos.map(photo => ({ photo }))
  const normalizedEvents: AlbumEvent[] = []

  for (const item of rawEvents) {
    const event = item && typeof item === 'object' ? item as Record<string, unknown> : {}
    const fallbackPhoto = event.photo && typeof event.photo === 'object' ? event.photo as Record<string, unknown> : null
    const photos = Array.isArray(event.photos) ? event.photos : fallbackPhoto ? [fallbackPhoto] : []
    const readyPhotos: AlbumPhoto[] = photos.flatMap(photo => {
      const record = photo && typeof photo === 'object' ? photo as Record<string, unknown> : {}
      const path = record.path
      if (!isPublicAlbumMediaPath(path)) return []
      const id = typeof record.id === 'string' ? record.id : path.split('/').at(-1)?.replace(/\.jpg$/u, '') || makeId('photo')
      return [{
        id,
        url: publicAlbumAssetUrl(path),
        date: typeof record.date === 'string' ? record.date : typeof event.date === 'string' ? event.date : '',
        caption: typeof record.caption === 'string' ? record.caption : '',
        remotePath: path
      }]
    })
    if (!readyPhotos.length) continue
    normalizedEvents.push({
      id: typeof event.id === 'string' ? event.id : readyPhotos[0].id,
      date: typeof event.date === 'string' ? event.date : readyPhotos[0].date,
      title: typeof event.title === 'string' ? event.title : typeof fallbackPhoto?.caption === 'string' ? fallbackPhoto.caption : '',
      caption: typeof event.caption === 'string' ? event.caption : '',
      photos: readyPhotos
    })
  }

  return {
    title: typeof raw.title === 'string' ? raw.title : '',
    dedication: typeof raw.dedication === 'string' ? raw.dedication : '',
    story: typeof raw.story === 'string' ? raw.story : '',
    avatarPath: isPublicAlbumMediaPath(raw.avatar_path) ? raw.avatar_path : '',
    events: normalizedEvents
  }
}

async function loadPublicAlbum() {
  try {
    const response = await fetch(publicAlbumAssetUrl('life/media/album.json'), { cache: 'no-store' })
    if (!response.ok) return
    const manifest = normalizePublicAlbum(await response.json())
    const readyEvents: AlbumEvent[] = manifest.events.map(event => ({
      ...event,
      photos: event.photos.map(photo => ({
        ...photo,
        url: publicAlbumAssetUrl(photo.remotePath || `life/media/${photo.id}.jpg`)
      }))
    }))
    events.value = readyEvents
    activeEventId.value = readyEvents[0]?.id || ''
    bookTitle.value = manifest.title || `${profile.name}的成长纪念册`
    dedication.value = manifest.dedication || '愿你带着爱，慢慢长大。'
    story.value = manifest.story
    generated.value = readyEvents.length > 0
    const avatar = readyEvents.flatMap(event => event.photos).find(photo => photo.remotePath === manifest.avatarPath)
    avatarPhotoId.value = avatar?.id || ''
    syncLifeAppleTouchIcon(avatar?.url || null)
  } catch {
    events.value = []
    generated.value = false
    syncLifeAppleTouchIcon(null)
  }
}

function openReader() {
  if (!connected.value) {
    isReaderOpen.value = true
    return
  }
  if (!generated.value || !photoCount.value) return
  isReaderOpen.value = true
  document.body.classList.add('album-reader-open')
  document.documentElement.requestFullscreen?.().catch(() => {})
}

function closeReader() {
  if (!connected.value) {
    window.location.assign('/life/')
    return
  }
  isReaderOpen.value = false
  document.body.classList.remove('album-reader-open')
  if (document.fullscreenElement) document.exitFullscreen?.().catch(() => {})
}

async function compressPhoto(file: File) {
  const bitmap = await createImageBitmap(file)
  try {
    const scale = Math.min(1, 1600 / Math.max(bitmap.width, bitmap.height))
    const canvas = document.createElement('canvas')
    canvas.width = Math.max(1, Math.round(bitmap.width * scale))
    canvas.height = Math.max(1, Math.round(bitmap.height * scale))
    const context = canvas.getContext('2d')
    if (!context) throw new Error('当前浏览器无法处理图片')
    context.fillStyle = '#fff'
    context.fillRect(0, 0, canvas.width, canvas.height)
    context.drawImage(bitmap, 0, 0, canvas.width, canvas.height)
    for (const quality of [.82, .72, .6, .48]) {
      const blob = await new Promise<Blob | null>(resolve => canvas.toBlob(resolve, 'image/jpeg', quality))
      if (!blob) throw new Error('图片压缩失败')
      if (blob.size <= 900_000) return blob
    }
    throw new Error('照片压缩后仍过大，请换一张尺寸更小的图片')
  } finally {
    bitmap.close()
  }
}

async function loadSavedAlbum() {
  if (!connected.value || isSyncing.value) return
  isSyncing.value = true
  cloudMessage.value = '正在读取纪念册…'
  try {
    const album = await loadLifeAlbumFromRemote()
    const readyEvents: AlbumEvent[] = []
    try {
      for (const event of album.events) {
        const readyPhotos: AlbumPhoto[] = []
        for (const item of event.photos) {
          const image = await loadLifeAlbumImageFromRemote(item.path)
          readyPhotos.push({
            id: item.id,
            url: URL.createObjectURL(image),
            date: item.date || event.date,
            caption: item.caption,
            remotePath: item.path
          })
        }
        if (readyPhotos.length) readyEvents.push({ ...event, photos: readyPhotos })
      }
    } catch (error) {
      for (const event of readyEvents) for (const photo of event.photos) URL.revokeObjectURL(photo.url)
      throw error
    }
    for (const event of events.value) for (const photo of event.photos) URL.revokeObjectURL(photo.url)
    events.value = readyEvents
    activeEventId.value = readyEvents[0]?.id || ''
    bookTitle.value = album.title || `${profile.name}的成长纪念册`
    dedication.value = album.dedication || '愿你带着爱，慢慢长大。'
    story.value = album.story
    const loadedAvatar = readyEvents.flatMap(event => event.photos).find(photo => photo.remotePath === album.avatar_path)
    avatarPhotoId.value = loadedAvatar?.id || ''
    syncLifeAppleTouchIcon(loadedAvatar?.url || null)
    generated.value = readyEvents.length > 0
    cloudMessage.value = album.events.length
      ? `已读取 ${readyEvents.length} 个事件、${readyEvents.flatMap(event => event.photos).length} 张照片`
      : '云端还没有纪念册，上传照片后可以保存。'
  } catch (error) {
    cloudMessage.value = error instanceof Error ? error.message : '读取失败'
  } finally {
    isSyncing.value = false
  }
}

async function connectCloud() {
  if (!secretInput.value.trim() || isSyncing.value) return
  isSyncing.value = true
  cloudMessage.value = '正在连接家庭存储…'
  try {
    await setLifeDataSecret(secretInput.value)
    await verifyLifeDataRemoteAccess()
    connected.value = true
    secretInput.value = ''
    cloudMessage.value = '已连接，可保存照片和纪念册。'
  } catch (error) {
    clearLifeDataSecret()
    connected.value = false
    cloudMessage.value = error instanceof Error ? error.message : '连接失败，请检查密码'
  } finally {
    isSyncing.value = false
  }
  if (connected.value && !photoCount.value) await loadSavedAlbum()
}

async function saveAlbum() {
  if (!connected.value || isSyncing.value || !photoCount.value) return
  isSyncing.value = true
  try {
    if (!generated.value || !story.value.trim()) generateStory()
    let uploaded = 0
    for (const event of eventsWithPhotos.value) {
      for (const photo of event.photos) {
        if (photo.remotePath) continue
        if (!photo.file) throw new Error('原始照片不可用，请重新选择')
        uploaded += 1
        cloudMessage.value = `正在上传第 ${uploaded} 张照片（共 ${photoCount.value} 张）…`
        const compressed = await compressPhoto(photo.file)
        photo.remotePath = await uploadLifeAlbumImageToRemote(photo.id, compressed)
      }
    }
    const manifest: LifeAlbumManifest = {
      title: bookTitle.value.trim(),
      dedication: dedication.value.trim(),
      story: story.value.trim(),
      avatar_path: eventsWithPhotos.value.flatMap(event => event.photos).find(photo => photo.id === avatarPhotoId.value)?.remotePath || '',
      events: eventsWithPhotos.value.map(event => ({
        id: event.id,
        date: event.date,
        title: event.title.trim(),
        caption: event.caption.trim(),
        photos: event.photos.map(photo => ({
          id: photo.id,
          path: photo.remotePath!,
          date: photo.date || event.date,
          caption: photo.caption.trim()
        }))
      }))
    }
    await saveLifeAlbumToRemote(manifest)
    try {
      await refreshLifeAvatarFromRemote()
      cloudMessage.value = `已保存 ${eventCount.value} 个事件、${photoCount.value} 张照片${manifest.avatar_path ? '，首页头像已更新' : ''}。`
    } catch {
      cloudMessage.value = `已保存 ${eventCount.value} 个事件、${photoCount.value} 张照片；头像稍后刷新可见。`
    }
  } catch (error) {
    cloudMessage.value = error instanceof Error ? error.message : '保存失败，请重试'
  } finally {
    isSyncing.value = false
  }
}

onMounted(async () => {
  connected.value = hasLifeDataSecret()
  if (!connected.value) {
    await loadPublicAlbum()
    isReaderOpen.value = true
    document.body.classList.add('album-reader-open')
    isAccessChecked.value = true
    return
  }
  isAccessChecked.value = true
  try {
    await verifyLifeDataRemoteAccess()
    await loadSavedAlbum()
  } catch (error) {
    clearLifeDataSecret()
    connected.value = false
    isReaderOpen.value = true
    document.body.classList.add('album-reader-open')
    cloudMessage.value = error instanceof Error ? error.message : '家庭存储连接失败'
  }
})

onBeforeUnmount(() => {
  if (document.fullscreenElement) document.exitFullscreen?.().catch(() => {})
  document.body.classList.remove('album-reader-open')
  for (const event of events.value) for (const photo of event.photos) URL.revokeObjectURL(photo.url)
})
</script>

<style scoped src="./life-album.css"></style>
