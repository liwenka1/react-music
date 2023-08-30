import { useArtistSongs } from '@/api/artist'
import { Song } from '@/api/song/type'
import SongsItem from '@/components/SongsItem'
import SvgIcon from '@/components/SvgIcon'
import useAplayerStore from '@/stores/aplayer'
import { setSong } from '@/utils/aplayer'
import React, { useEffect, useState } from 'react'
import { useQuery, useQueryClient } from 'react-query'
import { useLocation } from 'react-router-dom'

interface Props {
  musicSize: number
}

const Songs: React.FC<Props> = (props) => {
  const { musicSize } = props
  const location = useLocation()
  const [songs, setSongs] = useState([] as Song[])
  const limit = 20
  const [offset, setOffset] = useState(1)
  const {
    data: artistSongs,
    isSuccess,
    isLoading,
    refetch
  } = useQuery(
    ['artistSongs', location.state.artistId, offset],
    () =>
      useArtistSongs(
        location.state.artistId,
        'time',
        limit,
        (offset - 1) * limit
      ),
    { staleTime: Infinity }
  )
  const queryClient = useQueryClient()
  useEffect(() => {
    refetch().then(() => {
      if (isSuccess && artistSongs) {
        setSongs([...songs, ...artistSongs.songs])
      } else {
        const cachedData = queryClient.getQueryData([
          'artistSongs',
          location.state.artistId,
          offset
        ]) as { songs: Song[] }
        setSongs([...songs, ...cachedData.songs])
      }
    })
  }, [offset])

  const { ap, setAudio } = useAplayerStore()
  const playSongs = async () => {
    ap?.list.clear()
    for (const audio of songs) {
      setAudio(await setSong(audio))
    }
  }

  return (
    <>
      <span className="svg-button mt-8" onClick={playSongs}>
        <SvgIcon name="play" className="w-5 h-5 mr-1" />
        <span>播放全部</span>
      </span>
      <div className="grid grid-cols-12 gap-4 mt-8 mb-1 text-xs font-light">
        <span className="col-span-8">歌曲</span>
        <span className="col-span-3">专辑</span>
        <span className="col-span-1">时长</span>
      </div>
      {songs.map((song) => {
        return (
          <SongsItem
            song={song}
            showArtist={false}
            showAlbum={true}
            key={song.id}
          />
        )
      })}
      {musicSize > songs.length && (
        <div className="flex items-center justify-center my-5 text-primary cursor-pointer">
          {isLoading ? (
            <span>加载中。。。</span>
          ) : (
            <span onClick={() => setOffset(offset + 1)}>加载更多</span>
          )}
        </div>
      )}
    </>
  )
}

export default Songs
