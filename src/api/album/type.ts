import type { Artist } from '../artist/type'
import { Song } from '../song/type'

export interface Album {
  songs: unknown[]
  paid: boolean
  onSale: boolean
  mark: number
  blurPicUrl: string
  companyId: number
  alias: string[]
  artists: Artist[]
  copyrightId: number
  picId: number
  artist: Artist
  publishTime: number
  company: string
  briefDesc: string
  picUrl: string
  commentThreadId: string
  pic: number
  tags: string
  description: string
  status: number
  subType: string
  name: string
  id: number
  type: string
  size: number
  picId_str: string
}

export interface AlbumNewest {
  albums: Album[]
  code: number
  total: number
}

export interface AlbumInfo {
  album: Album
  songs: Song[]
}
