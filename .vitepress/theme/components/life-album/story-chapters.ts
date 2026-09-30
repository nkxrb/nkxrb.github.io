import type { AlbumEvent } from './album-types'

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
  items?: Array<{ title: string; text: string; media?: StoryMedia }>
}

const layoutSequence: StoryLayout[] = ['A', 'B', 'H', 'C', 'D', 'E', 'F', 'B', 'G', 'A', 'H', 'C', 'D', 'E', 'F']
const animationSequence: StoryAnimation[] = [8, 1, 3, 5, 4, 7, 2, 6, 1, 8, 5, 3, 7, 2, 4]

function mediaFromEvent(event?: AlbumEvent): StoryMedia[] {
  return event?.photos.length
    ? event.photos.map(photo => ({ id: photo.id, url: photo.url, caption: photo.caption, type: 'image' as const }))
    : [{ id: 'placeholder-image', type: 'placeholder' }]
}

function chapterMeta(index: number, forceLayout?: StoryLayout) {
  return {
    index,
    layout: forceLayout || layoutSequence[index % layoutSequence.length],
    animation: animationSequence[index % animationSequence.length]
  }
}

export function buildStoryChapters(profileName: string, title: string, dedication: string, events: AlbumEvent[]): StoryChapter[] {
  const firstEvent = events[0]
  const eventMedia = events.flatMap(mediaFromEvent)
  const safeTitle = title || `${profileName}的成长纪念册`
  const chapters: StoryChapter[] = [
    {
      id: 'cover',
      ...chapterMeta(0, 'A'),
      kind: 'cover',
      eyebrow: 'GROWING STORY / 2026',
      title: safeTitle || '宝宝小名',
      body: dedication || '出生日期 · 向下滑动开启成长故事',
      media: mediaFromEvent(firstEvent)
    },
    {
      id: 'birth',
      ...chapterMeta(1, 'B'),
      kind: 'birth',
      eyebrow: 'CHAPTER 01 / 出生记录',
      title: '你好，世界',
      body: firstEvent?.caption || '出生照片与第一句想说的话，留在这里。',
      date: firstEvent?.date,
      media: mediaFromEvent(firstEvent),
      items: [
        { title: '身长', text: '00 cm' },
        { title: '体重', text: '0.0 kg' },
        { title: '头围', text: '00 cm' }
      ]
    },
    {
      id: 'growth',
      ...chapterMeta(2, 'H'),
      kind: 'growth',
      eyebrow: 'CHAPTER 02 / 成长曲线',
      title: '一点一点，长成现在的样子',
      body: '身高、体重和每一次变化，都在这条线里留下轻轻的印记。',
      media: eventMedia.slice(0, 3),
      items: [
        { title: '出生', text: '00' },
        { title: '满月', text: '00' },
        { title: '今天', text: '00' }
      ]
    },
    {
      id: 'timeline',
      ...chapterMeta(3, 'C'),
      kind: 'timeline',
      eyebrow: 'CHAPTER 03 / 里程碑',
      title: '第一次，值得被记住',
      body: '把那些小小的第一次，排成一条温柔的时间线。',
      media: eventMedia.slice(0, 4),
      items: ['第一次抬头', '第一次翻身', '第一次笑出声'].map((item, index) => ({
        title: item,
        text: '日期占位 · 这一刻的描述',
        media: eventMedia[index] || { id: `timeline-${index}`, type: 'placeholder' as const }
      }))
    },
    {
      id: 'wall',
      ...chapterMeta(4, 'D'),
      kind: 'wall',
      eyebrow: 'CHAPTER 04 / 日常碎片',
      title: '普通日子，也会发光',
      body: '一组拍立得，把每天的微小快乐留在纸上。',
      media: eventMedia.length ? eventMedia : [{ id: 'wall-placeholder', type: 'placeholder' }]
    },
    {
      id: 'stats',
      ...chapterMeta(5, 'E'),
      kind: 'stats',
      eyebrow: 'CHAPTER 05 / 成长数字',
      title: '这一年，我们收集了好多好多',
      body: '每个数字背后，都是一段认真生活的证据。',
      media: [],
      stat: { value: '000', label: '成长日记', note: '照片、拥抱和被记住的日子' },
      items: [
        { title: '照片', text: '000 张' },
        { title: '奶量', text: '000 ml' },
        { title: '尿布', text: '000 片' }
      ]
    },
    {
      id: 'firsts',
      ...chapterMeta(6, 'F'),
      kind: 'firsts',
      eyebrow: 'CHAPTER 06 / 第一次系列',
      title: '第一次做很多事',
      body: '横向滑动，把每一张“第一次”交给未来的你。',
      media: [],
      items: ['第一次出门', '第一次看海', '第一次叫妈妈'].map((item, index) => ({
        title: item,
        text: '照片 / GIF 占位',
        media: eventMedia[index] || { id: `first-${index}`, type: 'gif' as const }
      }))
    },
    {
      id: 'video',
      ...chapterMeta(7, 'B'),
      kind: 'video',
      eyebrow: 'CHAPTER 07 / 视频回忆',
      title: '这一段，想留给声音',
      body: '把想留下的声音和动作，轻轻放在这里。',
      media: [{ id: 'memory-video', type: 'video' }]
    },
    {
      id: 'letter',
      ...chapterMeta(8, 'G'),
      kind: 'letter',
      eyebrow: 'CHAPTER 08 / 写给宝宝的信',
      title: '亲爱的宝宝',
      body: dedication || '这里放一封写给未来的信。愿你慢慢长大，也一直保留心里的光。',
      media: []
    },
    {
      id: 'ending',
      ...chapterMeta(9, 'A'),
      kind: 'ending',
      eyebrow: 'THE STORY CONTINUES',
      title: '故事还在继续',
      body: '封底全家福照片占位 · 下一章，等你长大一点再写。',
      media: mediaFromEvent(events.at(-1))
    }
  ]

  const extras = events.slice(1).map((event, index) => {
    const chapterIndex = chapters.length + index
    return {
      id: `event-${event.id}`,
      ...chapterMeta(chapterIndex),
      kind: 'extra' as const,
      eyebrow: `CHAPTER ${String(chapterIndex - 8).padStart(2, '0')} / 新的片刻`,
      title: event.title || '又一个值得记住的日子',
      body: event.caption || '照片和故事占位。',
      date: event.date,
      media: mediaFromEvent(event)
    }
  })

  return [...chapters, ...extras]
}
