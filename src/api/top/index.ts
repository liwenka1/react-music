import http from '@/utils/request'
import { PlayListDetail } from '../playlist/type'

export const useTopPlaylistHighquality = async (params?: {
  limit?: number
  before?: number
  cat: string
}) => {
  const result = await http.get<{
    playlists: PlayListDetail[]
    total: number
    more: boolean
    lasttime: number
  }>('top/playlist/highquality', params)
  return result
}
