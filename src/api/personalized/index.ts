import http from '@/utils/request'
import { PersonalizedNewSongs, Personalizeds } from './type'

// 推荐歌单
export const usePersonalized = async (limit: number) => {
  const { result } = await http.get<Personalizeds>('/personalized', {
    limit: limit
  })
  return result
}

// 推荐新音乐
export const usePersonalizedNewSong = async () => {
  const { result } = await http.get<PersonalizedNewSongs>(
    '/personalized/newsong'
  )
  return result
}
