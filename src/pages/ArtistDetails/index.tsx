import { useLocation } from 'react-router-dom'
import { useQueries } from 'react-query'
import { useArtists, useArtistDetail, useArtistDesc } from '@/api/artist'
import Header from './header'
import Loading from '@/components/Loading'
import Main from './main'

const ArtistDetails: React.FC = () => {
  const location = useLocation()
  const [artists, artistDetail, artistDesc] = useQueries([
    {
      queryKey: ['artists', location.state.artistId],
      queryFn: () => useArtists(location.state.artistId),
      staleTime: Infinity
    },
    {
      queryKey: ['artistDetail', location.state.artistId],
      queryFn: () => useArtistDetail(location.state.artistId),
      staleTime: Infinity
    },
    {
      queryKey: ['artistDesc', location.state.artistId],
      queryFn: () => useArtistDesc(location.state.artistId),
      staleTime: Infinity
    }
  ])

  if (artists.isLoading || artistDetail.isLoading || artistDesc.isLoading) {
    return <Loading />
  }

  if (artists.error || artistDetail.error || artistDesc.error) {
    return <div>Error occurred while fetching data.</div>
  }

  if (artists.isSuccess && artistDetail.isSuccess && artistDesc.isSuccess) {
    return (
      <div className="col-span-full flex flex-col">
        <Header artistDetail={artistDetail.data} />
        <Main
          hotSongs={artists.data.hotSongs}
          artistDetail={artistDetail.data}
          artistDesc={artistDesc.data}
        ></Main>
      </div>
    )
  }

  return null
}

export default ArtistDetails
