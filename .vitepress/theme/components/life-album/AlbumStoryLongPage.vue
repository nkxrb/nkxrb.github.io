<template>
  <section ref="root" class="story-reader" role="dialog" aria-modal="true" aria-label="成长纪念长页">
    <div class="story-reader__texture" aria-hidden="true"></div>
    <header class="story-reader__topbar">
      <button ref="readerCloseButton" class="story-reader__close" type="button" aria-label="关闭成长长页" @click="emit('close')">×</button>
      <div class="story-reader__brand">
        <span>成长纪念册</span>
        <strong>{{ profileName }}</strong>
      </div>
      <button class="story-reader__music" type="button" :class="{ 'is-on': musicOn }" :aria-pressed="musicOn" aria-label="切换背景音乐" @click="toggleMusic">
        <span aria-hidden="true">♫</span>
      </button>
      <div class="story-reader__progress" aria-hidden="true"><i :style="{ transform: `scaleX(${progress})` }"></i></div>
    </header>

    <nav class="story-reader__dots" aria-label="章节导航">
      <button v-for="chapter in chapters" :key="chapter.id" type="button" :class="{ 'is-active': activeChapter === chapter.index }" :aria-label="`第 ${chapter.index + 1} 章`" :aria-current="activeChapter === chapter.index ? 'step' : undefined" @click="scrollToChapter(chapter.index)"></button>
    </nav>

    <div ref="scrollArea" class="story-reader__scroll" @scroll="updateProgress">
      <main class="story-reader__content">
        <article
          v-for="chapter in chapters"
          :key="chapter.id"
          :ref="element => registerChapter(chapter, element)"
          class="story-chapter"
          :class="[`story-layout-${chapter.layout}`, `story-animation-${chapter.animation}`, { 'is-active': activeChapter === chapter.index }]"
          :data-chapter-index="chapter.index"
        >
          <div class="story-chapter__decor story-chapter__decor--cloud" aria-hidden="true"></div>
          <div class="story-chapter__decor story-chapter__decor--stars" aria-hidden="true">✦　·　✧</div>
          <div class="story-chapter__inner">
            <template v-if="chapter.kind === 'cover' || chapter.kind === 'ending'">
              <div class="story-cover__media story-reveal-media">
                <StoryMedia :media="chapter.media[0]" :alt="chapter.title" :video-playing="playingVideos.has(chapter.id)" @open="openLightbox" @video="toggleVideo(chapter, $event)" />
              </div>
              <div class="story-cover__veil" aria-hidden="true"></div>
              <div class="story-cover__copy story-reveal-copy">
                <span class="story-eyebrow">{{ chapter.eyebrow }}</span>
                <h1>{{ chapter.title }}</h1>
                <p>{{ chapter.body }}</p>
                <small v-if="chapter.kind === 'cover'">向下滑动，开启成长故事</small>
              </div>
            </template>

            <template v-else-if="chapter.kind === 'birth' || chapter.kind === 'video'">
              <div class="story-split__copy story-reveal-copy">
                <span class="story-eyebrow">{{ chapter.eyebrow }}</span>
                <h2>{{ chapter.title }}</h2>
                <p>{{ chapter.body }}</p>
                <div v-if="chapter.items" class="story-mini-stats">
                  <div v-for="item in chapter.items" :key="item.title"><strong>{{ item.text }}</strong><span>{{ item.title }}</span></div>
                </div>
              </div>
              <div class="story-split__media story-reveal-media">
                <StoryMedia :media="chapter.media[0]" :alt="chapter.title" :video-playing="playingVideos.has(chapter.id)" @open="openLightbox" @video="toggleVideo(chapter, $event)" />
              </div>
            </template>

            <template v-else-if="chapter.kind === 'growth'">
              <div class="story-growth__heading story-reveal-copy">
                <span class="story-eyebrow">{{ chapter.eyebrow }}</span>
                <h2>{{ chapter.title }}</h2>
                <p>{{ chapter.body }}</p>
              </div>
              <div class="story-growth__chart story-reveal-svg">
                <svg viewBox="0 0 360 230" role="img" aria-label="成长曲线占位图">
                  <path class="story-chart__axis" d="M28 14V202H345" />
                  <path class="story-chart__line story-chart__line--one" pathLength="1" d="M28 168 C75 153 81 122 124 132 S183 98 220 114 S285 55 340 72" />
                  <path class="story-chart__line story-chart__line--two" pathLength="1" d="M28 187 C71 173 105 172 141 150 S200 160 229 134 S294 116 340 91" />
                  <g v-for="(point, index) in growthPoints" :key="index" class="story-chart__point" :style="{ '--point-delay': `${index * .1}s` }" tabindex="0" role="button" :aria-label="`${point.label}的照片`" @mouseenter="activeGrowthPoint = index" @mouseleave="activeGrowthPoint = null" @focus="activeGrowthPoint = index" @blur="activeGrowthPoint = null">
                    <circle :cx="point.x" :cy="point.y" r="6" />
                    <text :x="point.x" :y="point.y - 13">{{ point.label }}</text>
                  </g>
                </svg>
                <div class="story-growth__thumbs"><StoryMedia v-for="media in chapter.media.slice(0, 3)" :key="media.id" :media="media" alt="曲线照片占位" @open="openLightbox" /></div>
                <div v-if="activeGrowthPoint !== null" class="story-growth__peek" aria-live="polite">
                  <StoryMedia :media="chapter.media[activeGrowthPoint % Math.max(1, chapter.media.length)]" :alt="`${growthPoints[activeGrowthPoint].label}照片`" @open="openLightbox" />
                </div>
              </div>
            </template>

            <template v-else-if="chapter.kind === 'timeline'">
              <div class="story-timeline__heading story-reveal-copy"><span class="story-eyebrow">{{ chapter.eyebrow }}</span><h2>{{ chapter.title }}</h2><p>{{ chapter.body }}</p></div>
              <div class="story-timeline story-reveal-svg">
                <svg class="story-timeline__line" viewBox="0 0 28 620" preserveAspectRatio="none" aria-hidden="true"><path d="M14 4 C4 105 24 165 12 250 S23 420 14 616" /></svg>
                <div v-for="(item, index) in chapter.items" :key="item.title" class="story-timeline__item" :style="{ '--item-index': index }">
                  <span class="story-timeline__node"></span>
                  <StoryMedia :media="item.media" :alt="item.title" @open="openLightbox" />
                  <div><time>{{ item.text }}</time><h3>{{ item.title }}</h3><p>这一刻的故事占位。</p></div>
                </div>
              </div>
            </template>

            <template v-else-if="chapter.kind === 'wall'">
              <div class="story-wall__heading story-reveal-copy"><span class="story-eyebrow">{{ chapter.eyebrow }}</span><h2>{{ chapter.title }}</h2><p>{{ chapter.body }}</p></div>
              <div class="story-wall story-reveal-media">
                <div v-for="(media, index) in chapter.media.slice(0, 8)" :key="media.id" class="story-polaroid" :style="{ '--tilt': `${[-5, 3, -2, 4, -4, 2][index % 6]}deg`, '--wall-index': index }"><StoryMedia :media="media" :alt="`日常照片 ${index + 1}`" @open="openLightbox" /><span>日常碎片 · 00</span></div>
              </div>
            </template>

            <template v-else-if="chapter.kind === 'stats'">
              <div class="story-stats__heading story-reveal-copy"><span class="story-eyebrow">{{ chapter.eyebrow }}</span><h2>{{ chapter.title }}</h2><p>{{ chapter.body }}</p></div>
              <div class="story-stat-card story-reveal-number"><strong>{{ chapter.stat?.value }}</strong><span>{{ chapter.stat?.label }}</span><small>{{ chapter.stat?.note }}</small></div>
              <div class="story-stats__row story-reveal-copy"><div v-for="item in chapter.items" :key="item.title"><strong>{{ item.text }}</strong><span>{{ item.title }}</span></div></div>
            </template>

            <template v-else-if="chapter.kind === 'firsts'">
              <div class="story-firsts__heading story-reveal-copy"><span class="story-eyebrow">{{ chapter.eyebrow }}</span><h2>{{ chapter.title }}</h2><p>{{ chapter.body }}</p></div>
              <div class="story-firsts story-reveal-media">
                <div v-for="item in chapter.items" :key="item.title" class="story-first-card"><StoryMedia :media="item.media" :alt="item.title" @open="openLightbox" /><strong>{{ item.title }}</strong><span>{{ item.text }}</span></div>
              </div>
            </template>

            <template v-else-if="chapter.kind === 'letter'">
              <div class="story-letter story-reveal-copy"><span class="story-eyebrow">{{ chapter.eyebrow }}</span><div class="story-letter__paper"><span class="story-letter__stamp">♡</span><h2>{{ chapter.title }}</h2><p>{{ chapter.body }}</p><div class="story-letter__sign">爱你的家人<br><small>日期占位</small></div></div></div>
            </template>

            <template v-else>
              <div class="story-extra__copy story-reveal-copy"><span class="story-eyebrow">{{ chapter.eyebrow }}</span><h2>{{ chapter.title }}</h2><p>{{ chapter.body }}</p></div>
              <div class="story-extra__gallery story-reveal-media"><StoryMedia v-for="media in chapter.media" :key="media.id" :media="media" :alt="chapter.title" @open="openLightbox" /></div>
            </template>
          </div>
        </article>
      </main>
    </div>

    <div v-if="lightboxMedia" class="story-lightbox" role="dialog" aria-modal="true" aria-label="查看照片" @click.self="closeLightbox">
      <button type="button" class="story-lightbox__close" aria-label="关闭预览" @click="closeLightbox">×</button>
      <StoryMedia :media="lightboxMedia" alt="成长照片预览" @open="closeLightbox" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, type ComponentPublicInstance } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import type { AlbumEvent } from './album-types'
import { buildStoryChapters, type StoryChapter, type StoryMedia as StoryMediaItem } from './story-chapters'
import StoryMedia from './StoryMedia.vue'

const props = defineProps<{
  profileName: string
  title: string
  dedication: string
  story: string
  events: AlbumEvent[]
}>()

const emit = defineEmits<{ close: [] }>()
const root = ref<HTMLElement | null>(null)
const scrollArea = ref<HTMLElement | null>(null)
const readerCloseButton = ref<HTMLButtonElement | null>(null)
const progress = ref(0)
const activeChapter = ref(0)
const musicOn = ref(false)
const lightboxMedia = ref<StoryMediaItem | null>(null)
const playingVideos = ref(new Set<string>())
const activeGrowthPoint = ref<number | null>(null)
const chapterElements = new Map<string, HTMLElement>()
let triggers: ScrollTrigger[] = []
let masterTrigger: ScrollTrigger | null = null

const chapters = computed(() => buildStoryChapters(props.profileName, props.title, props.dedication, props.events))
const growthPoints = [
  { x: 82, y: 143, label: '出生' },
  { x: 161, y: 118, label: '满月' },
  { x: 247, y: 101, label: '百日' },
  { x: 329, y: 72, label: '现在' }
]

function registerChapter(chapter: StoryChapter, element: Element | ComponentPublicInstance | null) {
  if (element instanceof HTMLElement) chapterElements.set(chapter.id, element)
}

function scrollToChapter(index: number) {
  const chapter = chapters.value[index]
  const element = chapter && chapterElements.get(chapter.id)
  const scrollRect = scrollArea.value?.getBoundingClientRect()
  if (!element || !scrollArea.value || !scrollRect) return
  const top = element.getBoundingClientRect().top - scrollRect.top + scrollArea.value.scrollTop
  scrollArea.value.scrollTo({ top, behavior: 'smooth' })
}

function openLightbox(media: StoryMediaItem) {
  lightboxMedia.value = media
}

function closeLightbox() {
  lightboxMedia.value = null
}

function toggleMusic() {
  musicOn.value = !musicOn.value
}

function toggleVideo(chapter: StoryChapter, playing: boolean) {
  const next = new Set(playingVideos.value)
  if (playing) next.add(chapter.id)
  else next.delete(chapter.id)
  playingVideos.value = next
}

function updateProgress() {
  if (!scrollArea.value) return
  const max = Math.max(1, scrollArea.value.scrollHeight - scrollArea.value.clientHeight)
  progress.value = Math.min(1, Math.max(0, scrollArea.value.scrollTop / max))
}

function setupMotion() {
  if (!scrollArea.value) return
  gsap.registerPlugin(ScrollTrigger)
  const elements = root.value?.querySelectorAll<HTMLElement>('.story-reveal-copy, .story-reveal-media, .story-reveal-svg, .story-reveal-number') || []
  elements.forEach((element, elementIndex) => {
    const chapter = element.closest<HTMLElement>('.story-chapter')
    const animation = Number(chapter?.className.match(/story-animation-(\d+)/)?.[1] || 1)
    const isMedia = element.classList.contains('story-reveal-media')
    const from = animation === 2
      ? { autoAlpha: 0, scale: .9 }
      : animation === 3 || animation === 6
        ? { autoAlpha: 0, clipPath: 'inset(0 100% 0 0)' }
        : animation === 4
          ? { autoAlpha: 0, x: elementIndex % 2 ? 18 : -18, scale: .84, filter: 'blur(8px)' }
          : animation === 5
            ? { autoAlpha: 0, y: -32, rotate: -4 }
            : animation === 7
              ? { autoAlpha: 0, scale: .94, y: 12 }
              : animation === 8
                ? { autoAlpha: 0, y: 38, scale: .97 }
                : { autoAlpha: 0, y: 30 }
    const to = animation === 3 || animation === 6
      ? { autoAlpha: 1, clipPath: 'inset(0 0% 0 0)' }
      : { autoAlpha: 1, x: 0, y: 0, scale: 1, rotate: 0, filter: 'blur(0px)' }
    const delay = animation === 1
      ? (elementIndex % 4) * .06
      : animation === 5
        ? (elementIndex % 5) * .08
        : animation === 6 && isMedia
          ? .34
          : 0
    gsap.set(element, from)
    const trigger = ScrollTrigger.create({
      trigger: element,
      scroller: scrollArea.value,
      start: 'top 84%',
      end: 'bottom 16%',
      onEnter: () => gsap.fromTo(element, from, { ...to, delay, duration: .68, ease: animation === 2 ? 'back.out(1.7)' : 'power2.out', overwrite: true }),
      onEnterBack: () => gsap.fromTo(element, from, { ...to, delay, duration: .68, ease: animation === 2 ? 'back.out(1.7)' : 'power2.out', overwrite: true }),
      onLeaveBack: () => gsap.set(element, from),
      onLeave: () => gsap.set(element, from)
    })
    triggers.push(trigger)
    if (animation === 8 && isMedia) {
      const parallaxTarget = element.querySelector<HTMLElement>('.story-media') || element
      const parallaxTrigger = ScrollTrigger.create({
        trigger: chapter || element,
        scroller: scrollArea.value,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        onUpdate: self => gsap.set(parallaxTarget, { y: (self.progress - .5) * 26 }),
        onLeaveBack: () => gsap.set(parallaxTarget, { y: -13 }),
        onLeave: () => gsap.set(parallaxTarget, { y: 13 })
      })
      triggers.push(parallaxTrigger)
    }
  })
  masterTrigger = ScrollTrigger.create({
    scroller: scrollArea.value,
    start: 0,
    end: 'max',
    onUpdate: self => {
      progress.value = self.progress
      const current = chapters.value.reduce((selected, chapter) => {
        const element = chapterElements.get(chapter.id)
        const scrollRect = scrollArea.value?.getBoundingClientRect()
        if (element && scrollRect && element.getBoundingClientRect().top < scrollRect.top + scrollRect.height * .52) return chapter.index
        return selected
      }, 0)
      activeChapter.value = current
    }
  })
}

onMounted(async () => {
  await nextTick()
  readerCloseButton.value?.focus()
  setupMotion()
  ScrollTrigger.refresh()
})

onBeforeUnmount(() => {
  triggers.forEach(trigger => trigger.kill())
  masterTrigger?.kill()
  triggers = []
  masterTrigger = null
})
</script>

<style scoped src="./album-story-long-page.css"></style>
