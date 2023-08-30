import http from '@/utils/request'
import { PlayListDetailInfo, PlayListTrackAll } from './type'

// 获取歌单所有歌曲
export const usePlayListTrackAll = async (
  id: number,
  limit?: number,
  offset?: number
) => {
  const { songs } = await http.get<PlayListTrackAll>('/playlist/track/all', {
    id: id,
    limit: limit,
    offset: offset
  })
  return songs
}

// 获取歌单详情
export const usePlayListDetail = async (id: number, s: number = 8) => {
  const { playlist } = await http.get<PlayListDetailInfo>('/playlist/detail', {
    id: id,
    s: s
  })
  return playlist
}
