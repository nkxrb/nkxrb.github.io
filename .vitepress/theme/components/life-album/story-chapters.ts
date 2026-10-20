import type { AlbumEvent, AlbumStoryFacts } from './album-types'

export type StoryLayout = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H'
export type StoryAnimation = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
export type StoryKind = 'cover' | 'birth' | 'growth' | 'timeline' | 'wall' | 'stats' | 'firsts' | 'video' | 'letter' | 'ending' | 'extra'

export interface StoryMedia {
  id: string
  url?: string
  caption?: string
  type: 'image' | 'gif' | 'video' | 'placeholder'
}

export interface StoryChapter {
  id: string
  index: number
  kind: StoryKind
  layout: StoryLayout
  animation: StoryAnimation
  eyebrow: string
  title: string
  body: string
  date?: string
  media: StoryMedia[]
  stat?: { value: string; label: string; note: string }
  items?: Array<{ title: string; text: string; detail?: string; media?: StoryMedia }>
}

const layoutSequence: StoryLayout[] = ['A', 'B', 'H', 'C', 'D', 'E', 'F', 'B', 'G', 'A', 'H', 'C', 'D', 'E', 'F']
const animationSequence: StoryAnimation[] = [8, 1, 3, 5, 4, 7, 2, 6, 1, 8, 5, 3, 7, 2, 4]

function mediaFromEvent(event?: AlbumEvent): StoryMedia[] {
  if (!event) return [{ id: 'placeholder-image', type: 'placeholder' }]
  return [
    ...event.photos.map(photo => ({ id: photo.id, url: photo.url, caption: photo.caption, type: 'image' as const })),
    ...(event.videos || []).map(video => ({ id: video.id, url: video.url, caption: video.caption, type: 'video' as const }))
  ]
}

function chapterMeta(index: number, forceLayout?: StoryLayout) {
  return {
    index,
    layout: forceLayout || layoutSequence[index % layoutSequence.length],
    animation: animationSequence[index % animationSequence.length]
  }
}

function formatStoryDate(date: string) {
  const [, month, day] = date.split('-')
  return month && day ? `${Number(month)}月${Number(day)}日` : date
}

export function buildStoryChapters(
  profileName: string,
  title: string,
  dedication: string,
  story: string,
  events: AlbumEvent[],
  facts?: AlbumStoryFacts
): StoryChapter[] {
  const firstEvent = events[0]
  const eventMedia = events.flatMap(mediaFromEvent)
  const allVideos = events.flatMap(event => event.videos || [])
  const mediaById = new Map(eventMedia.map(media => [media.id, media]))
  const measurements = facts?.growthRecords || []
  const highlights = facts?.highlights || []
  const birth = facts?.birth
  const safeTitle = title || `${profileName}的成长纪念册`
  const photoCount = events.reduce((count, event) => count + event.photos.length, 0)
  const momentCount = photoCount + allVideos.length
  const checkupPhotos = measurements.flatMap(record => {
    const event = events.find(item => item.date === record.date)
    const photo = event && mediaFromEvent(event).find(media => media.type === 'image')
    return photo ? [photo] : []
  })
  const everydayPhotos = events
    .filter(event => event.date >= '2026-08-28')
    .flatMap(event => event.photos.map(photo => ({ id: photo.id, url: photo.url, caption: photo.caption, type: 'image' as const })))
  const chapters: StoryChapter[] = [
    {
      id: 'cover',
      ...chapterMeta(0, 'A'),
      kind: 'cover',
      eyebrow: 'GROWING STORY / 2026',
      title: safeTitle || '宝宝小名',
      body: dedication || '从第一次见面开始，收藏安崽慢慢长大的日子。',
      media: mediaFromEvent(firstEvent)
    },
    {
      id: 'birth',
      ...chapterMeta(1, 'B'),
      kind: 'birth',
      eyebrow: 'CHAPTER 01 / 出生记录',
      title: '你好，世界',
      body: firstEvent?.caption || '2026 年 7 月 14 日，安崽来到我们身边。',
      date: firstEvent?.date,
      media: mediaFromEvent(firstEvent),
      items: birth ? [
        { title: '出生时间', text: birth.time },
        { title: '出生体重', text: birth.weight },
        { title: '出生身长', text: birth.height }
      ] : []
    },
    {
      id: 'growth',
      ...chapterMeta(2, 'H'),
      kind: 'growth',
      eyebrow: 'CHAPTER 02 / 成长曲线',
      title: '一点一点，长成现在的样子',
      body: '每次儿保和接种时量下的身高体重，都替成长留下了刻度。',
      media: checkupPhotos,
      items: measurements.map(record => ({
        title: `${formatStoryDate(record.date)} · ${record.label}`,
        text: `${record.weight} · ${record.height}`
      }))
    },
    {
      id: 'timeline',
      ...chapterMeta(3, 'C'),
      kind: 'timeline',
      eyebrow: 'CHAPTER 03 / 里程碑',
      title: '小小的第一次，慢慢来到',
      body: '这些动作和声音没有催促谁，只在安崽自己的时间里出现。',
      media: highlights.flatMap(item => {
        const media = mediaById.get(item.mediaId)
        return media ? [media] : []
      }),
      items: highlights.map(item => ({
        title: item.title,
        text: formatStoryDate(item.date),
        detail: item.detail,
        media: mediaById.get(item.mediaId)
      }))
    },
    {
      id: 'wall',
      ...chapterMeta(4, 'D'),
      kind: 'wall',
      eyebrow: 'CHAPTER 04 / 日常碎片',
      title: '普通日子，也会发光',
      body: '打哈欠、睡熟、被抱起来笑一笑，都是我们舍不得略过的日常。',
      media: everydayPhotos.slice(0, 8)
    },
    {
      id: 'stats',
      ...chapterMeta(5, 'E'),
      kind: 'stats',
      eyebrow: 'CHAPTER 05 / 成长数字',
      title: '这些日子，有了清晰的刻度',
      body: '从出生那天的 7.46 斤、50 厘米，到一次次儿保和接种时的新记录。',
      media: [],
      stat: {
        value: String(momentCount),
        label: '个珍藏片刻',
        note: `${photoCount} 张照片 · ${allVideos.length} 段视频`
      },
      items: [
        { title: '第一次儿保', text: measurements[0] ? `${measurements[0].weight} · ${measurements[0].height}` : '待记录' },
        { title: '第二次儿保', text: measurements[1] ? `${measurements[1].weight} · ${measurements[1].height}` : '待记录' },
        { title: '接种五联', text: measurements[2] ? `${measurements[2].weight} · ${measurements[2].height}` : '待记录' }
      ]
    }
  ]

  const trackingVideos = allVideos.filter(video => /rattle|panda/.test(video.id))
  if (trackingVideos.length) {
    chapters.push({
      id: 'firsts',
      ...chapterMeta(chapters.length, 'F'),
      kind: 'firsts',
      eyebrow: '成长片刻 / 会看、会听，也会回应',
      title: '你的目光开始追着世界走',
      body: '摇铃换了方向，你的眼睛也跟着转过去；熊猫出现时，你会停下来认真看一会儿。',
      media: [],
      items: trackingVideos.map(video => ({
        title: video.caption,
        text: formatStoryDate(video.date),
        media: { id: video.id, url: video.url, caption: video.caption, type: 'video' as const }
      }))
    })
  }

  if (allVideos.length) {
    const voiceVideo = allVideos.find(video => /babbling/.test(video.id)) || allVideos[0]
    chapters.push({
      id: 'video',
      ...chapterMeta(chapters.length, 'B'),
      kind: 'video',
      eyebrow: '成长片刻 / 第一次听见你的表达',
      title: '咿咿呀呀，是你在和我们聊天',
      body: '从手脚的小动作，到忽然发出的声音；我们一遍遍回放，想把这一刻再听久一点。',
      media: [{ id: voiceVideo.id, url: voiceVideo.url, caption: voiceVideo.caption, type: 'video' as const }]
    })
  }

  chapters.push(
    {
      id: 'letter',
      ...chapterMeta(chapters.length, 'G'),
      kind: 'letter',
      eyebrow: '写给你的信',
      title: '亲爱的宝宝',
      body: story || dedication || '愿你慢慢长大，也一直保留对世界的好奇。',
      media: []
    },
    {
      id: 'ending',
      ...chapterMeta(chapters.length + 1, 'A'),
      kind: 'ending',
      eyebrow: 'THE STORY CONTINUES',
      title: '故事还在继续',
      body: '2026 年 10 月 21 日是你的百日。下一页，我们等那一天再写。',
      media: mediaFromEvent(events.at(-1))
    }
  )

  const extras = events.slice(1).map((event, index) => {
    const chapterIndex = chapters.length + index
    return {
      id: `event-${event.id}`,
      ...chapterMeta(chapterIndex),
      kind: 'extra' as const,
      eyebrow: `CHAPTER ${String(chapterIndex + 1).padStart(2, '0')} / ${formatStoryDate(event.date)}`,
      title: event.title || '又一个值得记住的日子',
      body: event.caption || '又多留住了一个日子。',
      date: event.date,
      media: mediaFromEvent(event)
    }
  })

  return [...chapters, ...extras]
}
