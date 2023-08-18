import SimpleSlider from '@/components/SimpleSlider'
import PlayList from './playList'
import Album from './album'
import { useQueries } from 'react-query'
import { useBanner } from '@/api/banner'
import { useTopPlaylistHighquality } from '@/api/top'
import { useAlbumNewest } from '@/api/album'
import Loading from '@/components/Loading'

const Home: React.FC = () => {
  const [banner, topPlaylistHighquality, albumNewest] = useQueries([
    { queryKey: 'banner', queryFn: () => useBanner() },
    {
      queryKey: 'topPlaylistHighquality',
      queryFn: () => useTopPlaylistHighquality({ limit: 12, cat: '全部' })
    },
    { queryKey: 'AlbumNewest', queryFn: () => useAlbumNewest() }
  ])

  if (
    banner.isLoading ||
    topPlaylistHighquality.isLoading ||
    albumNewest.isLoading
  ) {
    return <Loading />
  }

  if (banner.error || topPlaylistHighquality.error || albumNewest.error) {
    return <div>Error occurred while fetching data.</div>
  }

  if (
    banner.isSuccess &&
    topPlaylistHighquality.isSuccess &&
    albumNewest.isSuccess
  ) {
    return (
      <>
        <SimpleSlider banner={banner.data} />
        <PlayList playlists={topPlaylistHighquality.data.playlists} />
        <Album albums={albumNewest.data.albums} />
      </>
    )
  }
}

export default Home
