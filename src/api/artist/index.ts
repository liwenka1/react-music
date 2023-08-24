import http from '@/utils/request'
import { Artist, ArtistDetail, HotSong } from './type'
import { Song } from '../song/type'
import { Album } from '../album/type'

// 获取歌手详情
export const useArtists = async (id: number) => {
  const { artist, hotSongs } = await http.get<{
    artist: Artist
    hotSongs: HotSong[]
  }>('/artists', {
    id: id
  })
  return { artist, hotSongs }
}

// 获取歌手详情
export const useArtistDetail = async (id: number) => {
  const { data } = await http.get<{ data: ArtistDetail }>('/artist/detail', {
    id: id
  })
  return data
}

// 歌手全部歌曲
export const useArtistSongs = async (
  id: number,
  order: string = 'time',
  limit: number = 10,
  offset: number = 0
) => {
  return await http.get<{ songs: Song[] }>('/artist/songs', {
    id: id,
    order: order,
    limit: limit,
    offset: offset
  })
}

// 获取歌手专辑
export const useArtistAlbum = async (
  id: number,
  limit: number = 10,
  offset: number = 0
) => {
  return await http.get<{ hotAlbums: Album[] }>('/artist/album', {
    id: id,
    limit: limit,
    offset: offset
  })
}
