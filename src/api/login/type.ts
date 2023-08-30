export interface UserProfile {
  userId: number
  userType: number
  nickname: string
  avatarImgId: number
  avatarUrl: string
  backgroundImgId: number
  backgroundUrl: string
  signature?: unknown
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
  experts?: unknown
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

export interface LoginCellphone {
  code: number
  cookie: string
  token: string
}

export interface LoginQrKey {
  data: { unikey: string }
}

export interface LoginQrCreate {
  data: { qrimg: string }
}

export interface LoginQrCheck {
  code: number
  cookie: string
}

export interface LoginStatus {
  data: {
    code: number
    profile: UserProfile
  }
}

export interface Logout {
  code: number
}
