import http from '@/utils/request'
import { Song } from '../song/type'

export const usePlayListTrackAll = async (
  id: number,
  limit?: number,
  offset?: number
) => {
  const { songs } = await http.get<{ songs: Song[] }>('playlist/track/all', {
    id: id,
    limit: limit,
    offset: offset
  })
  return songs
}
