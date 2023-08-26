import { useArtistSongs } from '@/api/artist'
import { Song } from '@/api/song/type'
import SongsItem from '@/components/SongsItem'
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { useLocation } from 'react-router-dom'

const Songs: React.FC = React.memo(() => {
  const location = useLocation()
  const [songs, setSongs] = useState([] as Song[])
  const limit = 20
  const [offset, setOffset] = useState(1)
  const { data, isSuccess, isLoading, refetch } = useQuery('artistSongs', () =>
    useArtistSongs(location.state.artistId, 'time', limit, (offset - 1) * limit)
  )
  const [noMore, setNoMore] = useState(false)
  useEffect(() => {
    if (isSuccess && data) {
      if (data.songs.length < limit) setNoMore(true)
      setSongs([...songs, ...data.songs])
      setOffset(offset + 1)
    }
  }, [isSuccess, data])

  return (
    <div>
      <div className="grid grid-cols-12 gap-4 mt-8 mb-1 text-xs font-light">
        <span className="col-span-8">歌曲</span>
        <span className="col-span-3">专辑</span>
        <span className="col-span-1">时长</span>
      </div>
      {songs.map((song) => {
        return <SongsItem song={song} showArtist={false} key={song.id} />
      })}
      {!noMore && (
        <div className="flex items-center justify-center my-5 text-primary cursor-pointer">
          {isLoading ? (
            <span>加载中。。。</span>
          ) : (
            <span onClick={() => refetch()}>加载更多</span>
          )}
        </div>
      )}
    </div>
  )
})

Songs.displayName = 'Songs'
export default Songs
