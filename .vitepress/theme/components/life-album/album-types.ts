export interface AlbumPhoto {
  id: string
  url: string
  date: string
  caption: string
  file?: File
  remotePath?: string
}

export interface AlbumVideo {
  id: string
  url: string
  date: string
  caption: string
  remotePath?: string
}

export interface AlbumGrowthRecord {
  date: string
  label: string
  weight: string
  height: string
}

export interface AlbumStoryHighlight {
  date: string
  title: string
  detail: string
  mediaId: string
}

export interface AlbumStoryFacts {
  birth: {
    time: string
    weight: string
    height: string
  }
  growthRecords: AlbumGrowthRecord[]
  highlights: AlbumStoryHighlight[]
}

export interface AlbumEvent {
  id: string
  date: string
  title: string
  caption: string
  photos: AlbumPhoto[]
  videos?: AlbumVideo[]
}
