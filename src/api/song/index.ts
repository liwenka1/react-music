import http from '@/utils/request'
import { SongUrl } from './type'

export async function useSongUrl(id: number) {
  const { data } = await http.get<{ data: SongUrl[] }>('/song/url', { id: id })
  return data
}
