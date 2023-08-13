import { usePlayListTrackAll } from '@/api/playlist'
import { audio } from '@/components/Aplayer/type'

const getSongUrl = (id: number) => {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`
}

export const setPlayList = async (
  id: number,
  limit: number,
  offect: number
): Promise<audio[]> => {
  const res = await usePlayListTrackAll(id, limit, offect)
  const audioList = []
  for (const x of res) {
    const audio = {
      name: x.al.name,
      artist: x.ar[0].name,
      url: getSongUrl(x.id),
      cover: x.al.picUrl,
      lrc: ''
    }
    audioList.push(audio)
  }
  return audioList
}
