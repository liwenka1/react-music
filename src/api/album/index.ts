import http from '@/utils/request'
import { Album } from './type'
import { Song } from '../song/type'

// 最新专辑
export const useAlbumNewest = async () => {
  return await http.get<{
    albums: Album[]
    code: number
    total: number
  }>('/album/newest')
}

// 获取专辑内容
export const useAlbum = async (id: number) => {
  const { album, songs } = await http.get<{ album: Album; songs: Song[] }>(
    'album',
    { id: id }
  )

  return { album, songs }
}
