import http from '@/utils/request'
import { BannerInfo } from './type'

// banner
export const useBanner = async () => {
  const { banners } = await http.get<BannerInfo>('/banner', {
    type: 1
  })
  return banners
}
