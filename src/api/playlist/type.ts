export interface Song {
  name: string
  id: number
  pst: number
  t: number
  ar: SongAr[]
  alia: string[]
  pop: number
  st: number
  rt?: unknown
  fee: number
  v: number
  crbt?: unknown
  cf: string
  al: SongAl
  dt: number
  h: SongH
  m: SongM
  l: SongL
  a?: unknown
  cd: string
  no: number
  rtUrl?: unknown
  ftype: number
  rtUrls: unknown[]
  djId: number
  copyright: number
  s_id: number
  mark: number
  originCoverType: number
  originSongSimpleData?: unknown
  tagPicList?: unknown
  resourceState: boolean
  version: number
  songJumpInfo?: unknown
  entertainmentTags?: unknown
  single: number
  noCopyrightRcmd?: unknown
  rtype: number
  rurl?: unknown
  mst: number
  cp: number
  mv: number
  publishTime: number
}

export interface SongAr {
  id: number
  name: string
  tns: unknown[]
  alias: unknown[]
}

export interface SongAl {
  id: number
  name: string
  picUrl: string
  tns: unknown[]
  pic_str: string
  pic: number
}

export interface SongH {
  br: number
  fid: number
  size: number
  vd: number
}

export interface SongM {
  br: number
  fid: number
  size: number
  vd: number
}

export interface SongL {
  br: number
  fid: number
  size: number
  vd: number
}
