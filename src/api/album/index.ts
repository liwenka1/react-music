import http from '@/utils/request'
import { Album } from './type'

export const useAlbumNewest = async () => {
  return await http.get<{
    albums: Album[]
    code: number
    total: number
  }>('/album/newest')
}
