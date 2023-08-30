import { Album } from '@/api/album/type'
import { useArtistAlbum } from '@/api/artist'
import CoverImage from '@/components/CoverImage'
import React, { useEffect, useState } from 'react'
import { useQuery, useQueryClient } from 'react-query'
import { useLocation, useNavigate } from 'react-router-dom'

interface Props {
  albumSize: number
}

const Albums: React.FC<Props> = (props) => {
  const { albumSize } = props
  const location = useLocation()
  const [hotAlbums, setHotAlbums] = useState([] as Album[])
  const limit = 12
  const [offset, setOffset] = useState(1)
  const {
    data: artistAlbum,
    isSuccess,
    isLoading,
    refetch
  } = useQuery(
    ['artistAlbum', location.state.artistId, offset],
    () => useArtistAlbum(location.state.artistId, limit, (offset - 1) * limit),
    { staleTime: Infinity }
  )
  const queryClient = useQueryClient()
  useEffect(() => {
    refetch().then(() => {
      if (isSuccess && artistAlbum) {
        setHotAlbums([...hotAlbums, ...artistAlbum.hotAlbums])
      } else {
        const cachedData = queryClient.getQueryData([
          'artistAlbum',
          location.state.artistId,
          offset
        ]) as { hotAlbums: Album[] }
        setHotAlbums([...hotAlbums, ...cachedData.hotAlbums])
      }
    })
  }, [offset])
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
                type="album"
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
      {albumSize > hotAlbums.length && (
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

export default Albums
