import http from '@/utils/request'
import { PlayListDetails } from '../playlist/type'

// 获取用户歌单
export const useUserPlaylist = async (
  uid: number,
  limit: number = 10,
  offset: number = 0
) => {
  const { playlist } = await http.get<PlayListDetails>('/user/playlist', {
    uid: uid,
    limit: limit,
    offset: offset
  })
  return playlist
}
