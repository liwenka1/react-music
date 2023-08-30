import http from '@/utils/request'
import { TopPlaylistHighquality } from './type'

// 获取精品歌单
export const useTopPlaylistHighquality = async (params?: {
  limit?: number
  before?: number
  cat: string
}) => {
  const result = await http.get<TopPlaylistHighquality>(
    '/top/playlist/highquality',
    params
  )
  return result
}
