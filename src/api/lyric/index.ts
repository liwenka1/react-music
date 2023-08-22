import http from '@/utils/request'

// 获取歌词
export const useLyric = async (id: number) => {
  return await http.get<{
    code: number
    lrc: { lyric: string }
  }>('/lyric', { id: id })
}
