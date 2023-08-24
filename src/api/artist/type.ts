export interface Artist {
  albumSize: number
  alias: string[]
  briefDesc: string
  fansCount: number
  followed: boolean
  id: number
  img1v1Id: number
  img1v1Id_str: string
  img1v1Url: string
  musicSize: number
  name: string
  picId: number
  picId_str: string
  picUrl: string
  topicPerson: number
  trans: string
}

export interface Mv {
  id: number
  name: string
  status: number
  artistName: string
  artist: Artist
  imgurl16v9: string
  imgurl: string
  duration: number
  playCount: number
  publishTime: string
  subed: boolean
}

export interface ArtistDetail {
  videoCount: number
  identify: ArtistDetailIdentify
  artist: ArtistDetailArtist
  blacklist: boolean
  preferShow: number
  showPriMsg: boolean
  secondaryExpertIdentiy: ArtistDetailSecondaryExpertIdentiy[]
}
export interface ArtistDetailIdentify {
  imageUrl?: unknown
  imageDesc: string
  actionUrl: string
}
export interface ArtistDetailArtistRank {
  rank: number
  type: number
}
export interface ArtistDetailArtist {
  id: number
  avatar: string
  cover: string
  name: string
  transNames: string[]
  identities: string[]
  identifyTag?: unknown
  briefDesc: string
  rank: ArtistDetailArtistRank
  albumSize: number
  musicSize: number
  mvSize: number
}
export interface ArtistDetailSecondaryExpertIdentiy {
  expertIdentiyId: number
  expertIdentiyName: string
  expertIdentiyCount: number
}

export interface ArtistDesc {
  introduction: ArtistDescIntroduction[]
  briefDesc: string
  count: number
  topicData: ArtistDescTopicData[]
}
export interface ArtistDescIntroduction {
  ti: string
  txt: string
}
export interface ArtistDescTopicDataTopicContent {
  type: number
  id: number
  content: string
}
export interface ArtistDescTopicDataTopic {
  id: number
  addTime: number
  mainTitle: string
  title: string
  content: ArtistDescTopicDataTopicContent[]
  userId: number
  cover: number
  headPic: number
  shareContent: string
  wxTitle: string
  showComment: boolean
  status: number
  seriesId: number
  pubTime: number
  readCount: number
  tags: string[]
  pubImmidiatly: boolean
  auditor: string
  auditTime: number
  auditStatus: number
  startText: string
  delReason: string
  showRelated: boolean
  fromBackend: boolean
  rectanglePic: number
  updateTime: number
  reward: boolean
  summary: string
  memo?: unknown
  adInfo: string
  categoryId: number
  hotScore: number
  recomdTitle: string
  recomdContent: string
  number: number
}
export interface ArtistDescTopicDataCreatorExperts {
  1: string
}
export interface ArtistDescTopicDataCreator {
  userId: number
  userType: number
  nickname: string
  avatarImgId: number
  avatarUrl: string
  backgroundImgId: number
  backgroundUrl: string
  signature: string
  createTime: number
  userName: string
  accountType: number
  shortUserName: string
  birthday: number
  authority: number
  gender: number
  accountStatus: number
  province: number
  city: number
  authStatus: number
  description?: unknown
  detailDescription?: unknown
  defaultAvatar: boolean
  expertTags?: unknown
  experts: ArtistDescTopicDataCreatorExperts
  djStatus: number
  locationStatus: number
  vipType: number
  followed: boolean
  mutual: boolean
  authenticated: boolean
  lastLoginTime: number
  lastLoginIP: string
  remarkName?: unknown
  viptypeVersion: number
  authenticationTypes: number
  avatarDetail?: unknown
  anchor: boolean
}
export interface ArtistDescTopicData {
  topic: ArtistDescTopicDataTopic
  creator: ArtistDescTopicDataCreator
  shareCount: number
  commentCount: number
  likedCount: number
  liked: boolean
  rewardCount: number
  rewardMoney: number
  relatedResource?: unknown
  rectanglePicUrl: string
  coverUrl: string
  categoryId: number
  categoryName: string
  reward: boolean
  shareContent: string
  wxTitle: string
  addTime: number
  seriesId: number
  showComment: boolean
  showRelated: boolean
  memo?: unknown
  summary: string
  recmdTitle: string
  recmdContent: string
  commentThreadId: string
  mainTitle: string
  tags: string[]
  readCount: number
  url: string
  title: string
  id: number
  number: number
}

export interface HotSong {
  rtUrls: unknown[]
  ar: Ar[]
  al: Al
  st: number
  noCopyrightRcmd: unknown
  songJumpInfo: unknown
  rtype: number
  rurl: unknown
  pst: number
  alia: string[]
  pop: number
  rt?: string
  mst: number
  cp: number
  crbt: unknown
  cf: string
  dt: number
  h?: H
  sq?: Sq
  hr: unknown
  l?: L
  rtUrl: unknown
  ftype: number
  no: number
  fee: number
  djId: number
  mv: number
  t: number
  v: number
  cd: string
  a: unknown
  m?: M
  name: string
  id: number
  privilege: unknown
  eq?: string
}

export interface Ar {
  id: number
  name: string
  alia?: string[]
}

export interface Al {
  id: number
  name: string
  picUrl: string
  pic_str: string
  pic: number
  alia?: string[]
}

export interface H {
  br: number
  fid: number
  size: number
  vd: number
  sr: number
}

export interface Sq {
  br: number
  fid: number
  size: number
  vd: number
  sr: number
}

export interface L {
  br: number
  fid: number
  size: number
  vd: number
  sr: number
}

export interface M {
  br: number
  fid: number
  size: number
  vd: number
  sr: number
}
