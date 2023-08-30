import http from '@/utils/request'
import {
  ArtistAlbum,
  ArtistDesc,
  ArtistDetailData,
  ArtistSongs,
  ArtistsInfo
} from './type'

// 获取歌手单曲
export const useArtists = async (id: number) => {
  const { artist, hotSongs } = await http.get<ArtistsInfo>('/artists', {
    id: id
  })
  return { artist, hotSongs }
}

// 获取歌手详情
export const useArtistDetail = async (id: number) => {
  const { data } = await http.get<ArtistDetailData>('/artist/detail', {
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
  return await http.get<ArtistSongs>('/artist/songs', {
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
  return await http.get<ArtistAlbum>('/artist/album', {
    id: id,
    limit: limit,
    offset: offset
  })
}

// 获取歌手描述
export const useArtistDesc = async (id: number) => {
  const data = await http.get<ArtistDesc>('/artist/desc', { id: id })
  return data
}
