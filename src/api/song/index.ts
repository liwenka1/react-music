import http from '@/utils/request'
import { SongUrl } from './type'

// 获取音乐 url
export async function useSongUrl(id: number) {
  const { data } = await http.get<SongUrl>('/song/url', { id: id })
  return data
}
