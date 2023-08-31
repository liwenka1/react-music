import http from '@/utils/request'
import { AlbumInfo, AlbumNewest } from './type'

// 最新专辑
export const useAlbumNewest = async () => {
  const data = await http.get<AlbumNewest>('/album/newest')
  return data
}

// 获取专辑内容
export const useAlbum = async (id: number) => {
  const data = await http.get<AlbumInfo>('album', { id: id })

  return data
}
