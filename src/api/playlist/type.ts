export interface PlayListDetail {
  id: number
  name: string
  coverImgId: number
  coverImgUrl: string
  coverImgId_str: string
  adType: number
  userId: number
  createTime: number
  status: number
  opRecommend: boolean
  highQuality: boolean
  newImported: boolean
  updateTime: number
  trackCount: number
  specialType: number
  privacy: number
  trackUpdateTime: number
  commentThreadId: string
  playCount: number
  trackNumberUpdateTime: number
  subscribedCount: number
  cloudTrackCount: number
  ordered: boolean
  description: string
  tags: string[]
  updateFrequency?: unknown
  backgroundCoverId: number
  backgroundCoverUrl?: unknown
  titleImage: number
  titleImageUrl?: unknown
  englishTitle?: unknown
  officialPlaylistType?: unknown
  subscribers: PlayListDetailSubscribers[]
  subscribed: boolean
  creator: PlayListDetailCreator
  tracks: PlayListDetailTracks[]
  videoIds?: unknown
  videos?: unknown
  trackIds: PlayListDetailTrackIds[]
  shareCount: number
  commentCount: number
  remixVideo?: unknown
  sharedUsers?: unknown
  historySharedUsers?: unknown
}

export interface PlayListDetailSubscribers {
  defaultAvatar: boolean
  province: number
  authStatus: number
  followed: boolean
  avatarUrl: string
  accountStatus: number
  gender: number
  city: number
  birthday: number
  userId: number
  userType: number
  nickname: string
  signature: string
  description: string
  detailDescription: string
  avatarImgId: number
  backgroundImgId: number
  backgroundUrl: string
  authority: number
  mutual: boolean
  expertTags?: unknown
  experts?: unknown
  djStatus: number
  vipType: number
  remarkName?: unknown
  authenticationTypes: number
  avatarDetail?: unknown
  avatarImgIdStr: string
  backgroundImgIdStr: string
  anchor: boolean
  avatarImgId_str: string
}

export interface PlayListDetailCreatorAvatarDetail {
  userType: number
  identityLevel: number
  identityIconUrl: string
}

export interface PlayListDetailCreator {
  defaultAvatar: boolean
  province: number
  authStatus: number
  followed: boolean
  avatarUrl: string
  accountStatus: number
  gender: number
  city: number
  birthday: number
  userId: number
  userType: number
  nickname: string
  signature: string
  description: string
  detailDescription: string
  avatarImgId: number
  backgroundImgId: number
  backgroundUrl: string
  authority: number
  mutual: boolean
  expertTags?: unknown
  experts?: unknown
  djStatus: number
  vipType: number
  remarkName?: unknown
  authenticationTypes: number
  avatarDetail: PlayListDetailCreatorAvatarDetail
  avatarImgIdStr: string
  backgroundImgIdStr: string
  anchor: boolean
  avatarImgId_str: string
}

export interface PlayListDetailTracksAr {
  id: number
  name: string
  tns: unknown[]
  alias: unknown[]
}

export interface PlayListDetailTracksAl {
  id: number
  name: string
  picUrl: string
  tns: unknown[]
  pic_str: string
  pic: number
}

export interface PlayListDetailTracksH {
  br: number
  fid: number
  size: number
  vd: number
}

export interface PlayListDetailTracksM {
  br: number
  fid: number
  size: number
  vd: number
}

export interface PlayListDetailTracksL {
  br: number
  fid: number
  size: number
  vd: number
}

export interface PlayListDetailTracks {
  name: string
  id: number
  pst: number
  t: number
  ar: PlayListDetailTracksAr[]
  alia: unknown[]
  pop: number
  st: number
  rt: string
  fee: number
  v: number
  crbt?: unknown
  cf: string
  al: PlayListDetailTracksAl
  dt: number
  h: PlayListDetailTracksH
  m: PlayListDetailTracksM
  l: PlayListDetailTracksL
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
  single: number
  noCopyrightRcmd?: unknown
  cp: number
  mv: number
  rtype: number
  rurl?: unknown
  mst: number
  publishTime: number
  resourceState: boolean
  version: number
}

export interface PlayListDetailTrackIds {
  id: number
  v: number
  t: number
  at: number
  alg?: unknown
  uid: number
  rcmdReason: string
  sc?: unknown
}

export interface PlaylistHighqualityTag {
  id: number
  name: string
  type: number
  category: number
  hot: boolean
}
