import { Album } from '@/api/album/type'
import { useArtistAlbum } from '@/api/artist'
import CoverImage from '@/components/CoverImage'
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { useLocation, useNavigate } from 'react-router-dom'

const Albums: React.FC = () => {
  const location = useLocation()
  const [hotAlbums, setHotAlbums] = useState([] as Album[])
  const limit = 12
  const [offset, setOffset] = useState(1)
  const { data, isSuccess, isLoading, refetch } = useQuery('artistAlbum', () =>
    useArtistAlbum(location.state.artistId, limit, (offset - 1) * limit)
  )
  const [noMore, setNoMore] = useState(false)
  useEffect(() => {
    if (isSuccess && data) {
      if (data.hotAlbums.length < limit) setNoMore(true)
      setHotAlbums([...hotAlbums, ...data.hotAlbums])
      setOffset(offset + 1)
    }
  }, [isSuccess, data])
  const navigate = useNavigate()
  const navigateToAlbumDetails = (albumId: number) => {
    navigate('/albumDetails', { state: { albumId } })
  }

  return (
    <>
      <div className="grid gap-4 grid-cols-6 mt-12">
        {hotAlbums.map((album) => {
          return (
            <div
              className="w-full h-auto cursor-pointer"
              key={album.id}
              onClick={() => navigateToAlbumDetails(album.id)}
            >
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
}

export default Albums
