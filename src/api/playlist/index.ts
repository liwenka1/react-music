import http from '@/utils/request'
import { Song } from '../song/type'
import { PlayListDetail } from './type'

// 获取歌单所有歌曲
export const usePlayListTrackAll = async (
  id: number,
  limit?: number,
  offset?: number
) => {
  const { songs } = await http.get<{ songs: Song[] }>('/playlist/track/all', {
    id: id,
    limit: limit,
    offset: offset
  })
  return songs
}

// 获取歌单详情
export const usePlayListDetail = async (id: number, s: number = 8) => {
  const { playlist } = await http.get<{ playlist: PlayListDetail }>(
    '/playlist/detail',
    { id: id, s: s }
  )
  return playlist
}
