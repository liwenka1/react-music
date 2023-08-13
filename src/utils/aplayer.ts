import { usePlayListTrackAll } from '@/api/playlist'
import { audio } from '@/components/Aplayer/type'
import { useLyric } from '@/api/lyric'
import { Song } from '@/api/playlist/type'

const getSongUrl = (id: number) => {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`
}

const getLyric = async (id: number) => {
  const res = await useLyric(id)
  return res.lrc.lyric
}

export const setPlayList = async (
  id: number,
  limit: number,
  offect: number
): Promise<Song[]> => {
  const songList = await usePlayListTrackAll(id, limit, offect)
  return songList
}

export const setSong = async (x: Song): Promise<audio> => {
  const lrc = await getLyric(x.id)
  const audio = {
    name: x.al.name,
    artist: x.ar[0].name,
    url: getSongUrl(x.id),
    cover: x.al.picUrl,
    lrc
  }
  return audio
}
