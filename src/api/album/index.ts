import http from '@/utils/request'
import { AlbumInfo, AlbumNewest } from './type'

// 最新专辑
export const useAlbumNewest = async () => {
  const { albums, total } = await http.get<AlbumNewest>('/album/newest')
  return { albums, total }
}

// 获取专辑内容
export const useAlbum = async (id: number) => {
  const { album, songs } = await http.get<AlbumInfo>('album', { id: id })

  return { album, songs }
}
