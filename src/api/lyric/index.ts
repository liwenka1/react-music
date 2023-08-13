import http from '@/utils/request'

export const useLyric = async (id: number) => {
  return await http.get<{
    code: number
    lrc: { lyric: string }
  }>('lyric', { id: id })
}
