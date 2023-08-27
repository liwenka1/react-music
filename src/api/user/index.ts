import http from '@/utils/request'
import { PlayListDetail } from '../playlist/type'

// 获取用户歌单
export const useUserPlaylist = async (
  uid: number,
  limit: number = 10,
  offset: number = 0
) => {
  return await http.get<{ playlist: PlayListDetail[] }>('/user/playlist', {
    uid: uid,
    limit: limit,
    offset: offset
  })
}
