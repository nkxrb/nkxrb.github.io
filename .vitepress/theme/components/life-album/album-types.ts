export interface AlbumPhoto {
  id: string
  url: string
  date: string
  caption: string
  file?: File
  remotePath?: string
}

export interface AlbumEvent {
  id: string
  date: string
  title: string
  caption: string
  photos: AlbumPhoto[]
}
