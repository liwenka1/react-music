import { Album } from '@/api/album/type'
import { useArtistAlbum } from '@/api/artist'
import CoverImage from '@/components/CoverImage'
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { useLocation } from 'react-router-dom'

const Albums: React.FC = React.memo(() => {
  const location = useLocation()
  const [hotAlbums, setSongs] = useState([] as Album[])
  const limit = 12
  const [offset, setOffset] = useState(1)
  const { data, isSuccess, isLoading, refetch } = useQuery('artistAlbum', () =>
    useArtistAlbum(location.state.artistId, limit, (offset - 1) * limit)
  )
  const [noMore, setNoMore] = useState(false)
  useEffect(() => {
    if (isSuccess && data) {
      if (data.hotAlbums.length < limit) setNoMore(true)
      setSongs([...hotAlbums, ...data.hotAlbums])
      setOffset(offset + 1)
    }
  }, [isSuccess, data])

  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-6">
        {hotAlbums.map((album) => {
          return (
            <div className="w-full h-auto cursor-pointer" key={album.id}>
              <CoverImage
                imgUrl={album.picUrl}
                imgAlt={album.name}
                id={album.id}
              />
              <p
                className="hover:underline hover:underline-offset-1 line-clamp-2"
                title={album.name}
              >
                {album.name}
              </p>
            </div>
          )
        })}
      </div>
      {!noMore && (
        <div className="flex items-center justify-center my-5 text-primary cursor-pointer">
          {isLoading ? (
            <span>加载中。。。</span>
          ) : (
            <span onClick={() => refetch()}>加载更多</span>
          )}
        </div>
      )}
    </>
  )
})

Albums.displayName = 'Albums'
export default Albums
