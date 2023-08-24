import { useLocation } from 'react-router-dom'
import { useQueries } from 'react-query'
import {
  useArtists,
  useArtistAlbum,
  useArtistDetail,
  useArtistSongs
} from '@/api/artist'
import Header from './header'
import Loading from '@/components/Loading'

const ArtistDetails: React.FC = () => {
  const location = useLocation()
  const [artists, artistDetail, artistSongs, artistAlbum] = useQueries([
    {
      queryKey: 'artists',
      queryFn: () => useArtists(location.state.artistId)
    },
    {
      queryKey: 'artistDetail',
      queryFn: () => useArtistDetail(location.state.artistId)
    },
    {
      queryKey: 'artistSongs',
      queryFn: () => useArtistSongs(location.state.artistId)
    },
    {
      queryKey: 'artistAlbum',
      queryFn: () => useArtistAlbum(location.state.artistId)
    }
  ])
  console.log(artists, artistSongs, artistAlbum)

  if (artists.isLoading) {
    return <Loading />
  }

  if (artists.error) {
    return <div>Error occurred while fetching data.</div>
  }

  if (artists.isSuccess && artistDetail.isSuccess) {
    return (
      <>
        <div className="col-span-full flex flex-col">
          <Header artistDetail={artistDetail.data} />
          <div>这里是ArtistDetails</div>
        </div>
      </>
    )
  }
}

export default ArtistDetails
