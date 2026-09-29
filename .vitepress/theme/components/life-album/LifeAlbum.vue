<template>
  <main class="album-app">
    <header class="album-header">
      <a href="/life/" class="album-back">← 返回成长页</a>
      <div>
        <p>MEMORY BOOK STUDIO</p>
        <h1>把长大的片刻，做成一本书</h1>
        <span>照片、日期和几句话，就能留下属于 {{ profile.name }} 的故事。</span>
      </div>
    </header>

    <div class="album-workspace">
      <section class="album-editor" aria-labelledby="album-editor-title">
        <div class="album-cloud">
          <div>
            <span>FAMILY STORAGE</span>
            <strong>{{ connected ? '已连接家庭存储' : '当前为本地创作' }}</strong>
            <small>{{ connected ? '保存后，使用同一家庭密码可以再次读取。' : '输入家庭密码后可上传并保存照片。' }}</small>
          </div>
          <form v-if="!connected" @submit.prevent="connectCloud">
            <input v-model="secretInput" type="password" autocomplete="current-password" placeholder="家庭数据密码" aria-label="家庭数据密码">
            <button type="submit" :disabled="isSyncing">{{ isSyncing ? '连接中…' : '连接' }}</button>
          </form>
          <div v-else class="album-cloud__actions">
            <button type="button" :disabled="isSyncing" @click="loadSavedAlbum">读取已保存</button>
            <button type="button" :disabled="isSyncing || !photos.length" @click="saveAlbum">{{ isSyncing ? '保存中…' : '保存到家庭存储' }}</button>
          </div>
          <p v-if="cloudMessage" role="status">{{ cloudMessage }}</p>
        </div>

        <div class="album-section-heading">
          <span>01 / 收集片刻</span>
          <h2 id="album-editor-title">选择照片</h2>
          <p>最多 12 张。照片先在本机预览，点击“保存到家庭存储”后才会上传。</p>
        </div>

        <label class="album-upload">
          <input type="file" accept="image/*" multiple :disabled="isSyncing" @change="addPhotos">
          <span aria-hidden="true">＋</span>
          <strong>点击上传照片</strong>
          <small>支持浏览器可打开的图片，单张不超过 15 MB</small>
        </label>
        <p v-if="uploadMessage" class="album-message" role="status">{{ uploadMessage }}</p>

        <div v-if="photos.length" class="album-photo-list">
          <article v-for="(photo, index) in photos" :key="photo.id" class="album-photo-item">
            <img :src="photo.url" :alt="photo.caption || `第 ${index + 1} 张照片`">
            <div class="album-photo-fields">
              <div class="album-photo-fields__top">
                <strong>第 {{ index + 1 }} 页</strong>
                <div>
                  <button type="button" :disabled="index === 0" :aria-label="`将第 ${index + 1} 张照片前移`" @click="movePhoto(index, -1)">↑</button>
                  <button type="button" :disabled="index === photos.length - 1" :aria-label="`将第 ${index + 1} 张照片后移`" @click="movePhoto(index, 1)">↓</button>
                  <button type="button" :class="{ 'is-avatar': avatarPhotoId === photo.id }" :aria-pressed="avatarPhotoId === photo.id" @click="avatarPhotoId = avatarPhotoId === photo.id ? '' : photo.id">{{ avatarPhotoId === photo.id ? '已设头像' : '设为头像' }}</button>
                  <button type="button" :aria-label="`移除第 ${index + 1} 张照片`" @click="removePhoto(index)">移除</button>
                </div>
              </div>
              <label>拍摄日期 <input v-model="photo.date" type="date"></label>
              <label>这一刻的故事 <input v-model="photo.caption" type="text" maxlength="100" placeholder="例如：第一次对我们笑了"></label>
            </div>
          </article>
        </div>

        <div class="album-section-heading album-section-heading--details">
          <span>02 / 写下心意</span>
          <h2>封面与寄语</h2>
        </div>
        <div class="album-general-fields">
          <label>纪念册标题 <input v-model="bookTitle" type="text" maxlength="40"></label>
          <label>写给 {{ profile.name }} 的话 <textarea v-model="dedication" rows="3" maxlength="240" placeholder="想对长大后的你说什么？"></textarea></label>
        </div>

        <button class="album-generate" type="button" :disabled="!photos.length" @click="generateStory">生成纪念册与故事 <span aria-hidden="true">→</span></button>
        <p class="album-local-note">生成后可修改故事；点击“打印 / 存为 PDF”即可保存成册。</p>
      </section>

      <section class="album-preview" aria-labelledby="album-preview-title">
        <div class="album-preview__heading">
          <div>
            <span>03 / 预览成册</span>
            <h2 id="album-preview-title">{{ generated ? '你的成长纪念册' : '等待第一张照片' }}</h2>
          </div>
          <button v-if="generated" type="button" @click="printAlbum">打印 / 存为 PDF</button>
        </div>

        <div v-if="!generated" class="album-empty">
          <span aria-hidden="true">✦</span>
          <strong>故事从一张照片开始</strong>
          <p>选择照片并写下一句话，再生成可保存的纪念册。</p>
        </div>

        <div v-else>
          <label class="album-story-edit">编辑生成的故事 <textarea v-model="story" rows="8"></textarea></label>
          <div class="album-book">
            <article class="album-page album-cover">
              <img :src="photos[0].url" alt="纪念册封面照片">
              <div class="album-cover__copy">
                <span>THE LITTLE DAYS</span>
                <h2>{{ bookTitle || `${profile.name}的成长纪念册` }}</h2>
                <p>{{ dedication || '愿这些小小的日子，在未来依然闪闪发光。' }}</p>
              </div>
            </article>

            <article v-for="(photo, index) in photos" :key="photo.id" class="album-page album-story-page">
              <div class="album-story-page__meta"><span>CHAPTER {{ String(index + 1).padStart(2, '0') }}</span><time v-if="photo.date" :datetime="photo.date">{{ formatAlbumDate(photo.date) }}</time></div>
              <img :src="photo.url" :alt="photo.caption || `第 ${index + 1} 张成长照片`">
              <h3>{{ photo.caption || '记住这一刻' }}</h3>
              <p>{{ pageStory(photo, index) }}</p>
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
  </main>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import profile from '../../../../life/data/profile.json'
import milestones from '../../../../life/data/milestones.json'
import {
  clearLifeDataSecret,
  hasLifeDataSecret,
  loadLifeAlbumFromRemote,
  loadLifeAlbumImageFromRemote,
  refreshLifeAvatarFromRemote,
  saveLifeAlbumToRemote,
  setLifeDataSecret,
  uploadLifeAlbumImageToRemote,
  verifyLifeDataRemoteAccess,
  type LifeAlbumManifest
} from '../life-data'

interface AlbumPhoto {
  id: string
  url: string
  date: string
  caption: string
  file?: File
  remotePath?: string
}

const MAX_PHOTOS = 12
const MAX_FILE_SIZE = 15 * 1024 * 1024
const photos = ref<AlbumPhoto[]>([])
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

function addPhotos(event: Event) {
  const input = event.target as HTMLInputElement
  const files = Array.from(input.files || [])
  const available = MAX_PHOTOS - photos.value.length
  const accepted = files.filter(file => file.type.startsWith('image/') && file.size <= MAX_FILE_SIZE).slice(0, Math.max(0, available))
  for (const file of accepted) {
    photos.value.push({
      id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      url: URL.createObjectURL(file),
      date: '',
      caption: '',
      file
    })
  }
  if (accepted.length) generated.value = false
  uploadMessage.value = files.length === accepted.length
    ? `已加入 ${accepted.length} 张照片`
    : `已加入 ${accepted.length} 张；最多 ${MAX_PHOTOS} 张，单张不超过 15 MB，且需为图片文件。`
  input.value = ''
}

function removePhoto(index: number) {
  const [photo] = photos.value.splice(index, 1)
  if (photo) URL.revokeObjectURL(photo.url)
  if (photo?.id === avatarPhotoId.value) avatarPhotoId.value = ''
  generated.value = false
}

function movePhoto(index: number, offset: number) {
  const target = index + offset
  if (target < 0 || target >= photos.value.length) return
  const [photo] = photos.value.splice(index, 1)
  photos.value.splice(target, 0, photo)
  generated.value = false
}

function formatAlbumDate(iso: string) {
  const [year, month, day] = iso.split('-')
  return `${year} 年 ${Number(month)} 月 ${Number(day)} 日`
}

function dayOfLife(iso: string) {
  const birth = new Date(`${profile.birth_date}T00:00:00`)
  const date = new Date(`${iso}T00:00:00`)
  const days = Math.round((date.getTime() - birth.getTime()) / 86_400_000)
  return Number.isFinite(days) && days >= 0 ? `出生第 ${days} 天` : ''
}

function pageStory(photo: AlbumPhoto, index: number) {
  const moment = milestones.find(item => item.date === photo.date)
  const age = photo.date ? dayOfLife(photo.date) : ''
  const opening = age ? `${age}，` : index === 0 ? '故事刚刚开始，' : '又一个值得记住的日子，'
  const memory = photo.caption.trim() || '我们留下了这一刻的模样'
  const punctuation = /[。！？!?]$/.test(memory) ? '' : '。'
  return `${opening}${memory}${punctuation}${moment ? `这天也是“${moment.title}”的日子。` : ''}`
}

function generateStory() {
  if (!photos.value.length) return
  const firstDate = photos.value.find(photo => photo.date)?.date
  const opening = firstDate
    ? `从 ${formatAlbumDate(firstDate)} 开始，我们把 ${profile.name} 长大的片刻收进了这本小书。`
    : `我们把 ${profile.name} 长大的片刻收进了这本小书。`
  story.value = [opening, ...photos.value.map(pageStory), dedication.value.trim() || '愿你带着爱，慢慢长大。'].join('\n\n')
  generated.value = true
}

function printAlbum() {
  window.print()
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
    const ready: AlbumPhoto[] = []
    try {
      for (const item of album.photos) {
        const image = await loadLifeAlbumImageFromRemote(item.path)
        ready.push({
          id: item.id,
          url: URL.createObjectURL(image),
          date: item.date,
          caption: item.caption,
          remotePath: item.path
        })
      }
    } catch (error) {
      for (const photo of ready) URL.revokeObjectURL(photo.url)
      throw error
    }
    for (const photo of photos.value) URL.revokeObjectURL(photo.url)
    photos.value = ready
    bookTitle.value = album.title || `${profile.name}的成长纪念册`
    dedication.value = album.dedication || '愿你带着爱，慢慢长大。'
    story.value = album.story
    avatarPhotoId.value = ready.find(photo => photo.remotePath === album.avatar_path)?.id || ''
    generated.value = ready.length > 0
    cloudMessage.value = album.photos.length
      ? `已读取 ${ready.length} 张照片`
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
  if (connected.value && !photos.value.length) await loadSavedAlbum()
}

async function saveAlbum() {
  if (!connected.value || isSyncing.value || !photos.value.length) return
  isSyncing.value = true
  try {
    if (!generated.value || !story.value.trim()) generateStory()
    for (const [index, photo] of photos.value.entries()) {
      if (photo.remotePath) continue
      if (!photo.file) throw new Error('原始照片不可用，请重新选择')
      cloudMessage.value = `正在上传第 ${index + 1} / ${photos.value.length} 张照片…`
      const compressed = await compressPhoto(photo.file)
      photo.remotePath = await uploadLifeAlbumImageToRemote(photo.id, compressed)
    }
    const manifest: LifeAlbumManifest = {
      title: bookTitle.value.trim(),
      dedication: dedication.value.trim(),
      story: story.value.trim(),
      avatar_path: photos.value.find(photo => photo.id === avatarPhotoId.value)?.remotePath || '',
      photos: photos.value.map(photo => ({
        id: photo.id,
        path: photo.remotePath!,
        date: photo.date,
        caption: photo.caption.trim()
      }))
    }
    await saveLifeAlbumToRemote(manifest)
    try {
      await refreshLifeAvatarFromRemote()
      cloudMessage.value = `已保存 ${photos.value.length} 张照片和纪念册${manifest.avatar_path ? '，首页头像已更新' : ''}。`
    } catch {
      cloudMessage.value = `已保存 ${photos.value.length} 张照片和纪念册；头像稍后刷新可见。`
    }
  } catch (error) {
    cloudMessage.value = error instanceof Error ? error.message : '保存失败，请重试'
  } finally {
    isSyncing.value = false
  }
}

onMounted(async () => {
  connected.value = hasLifeDataSecret()
  if (!connected.value) return
  try {
    await verifyLifeDataRemoteAccess()
    await loadSavedAlbum()
  } catch (error) {
    clearLifeDataSecret()
    connected.value = false
    cloudMessage.value = error instanceof Error ? error.message : '家庭存储连接失败'
  }
})

onBeforeUnmount(() => {
  for (const photo of photos.value) URL.revokeObjectURL(photo.url)
})
</script>

<style scoped src="./life-album.css"></style>
