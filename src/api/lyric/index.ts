import http from '@/utils/request'
import { Lyric } from './type'

// 获取歌词
export const useLyric = async (id: number) => {
  return await http.get<Lyric>('/lyric', { id: id })
}
