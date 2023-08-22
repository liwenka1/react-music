import http from '@/utils/request'
import { Banner } from './type'

// banner
export const useBanner = async () => {
  const { banners } = await http.get<{ banners: Banner[] }>('/banner', {
    type: 1
  })
  return banners
}
