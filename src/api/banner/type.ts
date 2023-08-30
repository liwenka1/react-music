export interface Banner {
  pic: string
  targetId: number
  targetType: number
  typeTitle: string
  bannerId: number
}

export interface BannerInfo {
  banners: Banner[]
}
