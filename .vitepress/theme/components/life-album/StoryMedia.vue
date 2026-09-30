<template>
  <button v-if="media.type === 'placeholder' || !media.url" type="button" class="story-media story-media--placeholder" :class="`story-media--${media.type}`" :aria-label="`${alt}占位`" @click="emit('open', media)">
    <span class="story-media__scribble" aria-hidden="true">✦</span>
    <strong>{{ mediaLabel }}</strong>
    <small>{{ alt }}</small>
  </button>
  <button v-else-if="media.type === 'video'" type="button" class="story-media story-media--video" @click="emit('open', media)">
    <video ref="video" :src="media.url" muted loop playsinline preload="none" :autoplay="videoPlaying" :aria-label="alt"></video>
    <span class="story-media__play" aria-hidden="true">▶</span>
    <small>{{ alt }}</small>
  </button>
  <button v-else type="button" class="story-media story-media--image" @click="emit('open', media)">
    <img :src="media.url" :alt="alt" loading="lazy" decoding="async">
    <span v-if="media.type === 'gif'" class="story-media__gif">GIF</span>
  </button>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import type { StoryMedia } from './story-chapters'

const props = withDefaults(defineProps<{
  media?: StoryMedia
  alt: string
  videoPlaying?: boolean
}>(), { videoPlaying: false })

const emit = defineEmits<{ open: [media: StoryMedia]; video: [playing: boolean] }>()
const video = ref<HTMLVideoElement | null>(null)
const media = computed(() => props.media || { id: 'missing', type: 'placeholder' as const })
const mediaLabel = computed(() => media.value.type === 'video' ? '视频占位' : media.value.type === 'gif' ? 'GIF 占位' : '图片占位')
let observer: IntersectionObserver | null = null

onMounted(() => {
  if (media.value.type !== 'video' || !video.value || typeof IntersectionObserver === 'undefined') return
  observer = new IntersectionObserver(entries => {
    const visible = entries[0]?.isIntersecting === true
    emit('video', visible)
    if (visible) video.value?.play().catch(() => {})
    else video.value?.pause()
  }, { threshold: .35 })
  observer.observe(video.value)
})

onBeforeUnmount(() => observer?.disconnect())

watch(() => props.videoPlaying, async playing => {
  if (!video.value) return
  if (playing) await video.value.play().catch(() => {})
  else video.value.pause()
})
</script>

<style scoped src="./story-media.css"></style>
