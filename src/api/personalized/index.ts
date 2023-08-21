import http from '@/utils/request'
import { Personalized, PersonalizedNewSong } from './type'

// 推荐歌单
export const usePersonalized = async (limit: number) => {
  const { result } = await http.get<{ result: Personalized[] }>(
    '/personalized',
    { limit: limit }
  )
  return result
}

// 推荐新音乐
export const usePersonalizedNewSong = async () => {
  const { result } = await http.get<{ result: PersonalizedNewSong[] }>(
    '/personalized/newsong'
  )
  return result
}
