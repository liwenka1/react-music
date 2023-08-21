import SimpleSlider from '@/components/SimpleSlider'
import NewPlaylist from './newPlaylist'
import NewSong from './newSong'
import { useQueries } from 'react-query'
import { useBanner } from '@/api/banner'
import { usePersonalized, usePersonalizedNewSong } from '@/api/personalized'
import Loading from '@/components/Loading'

const Home: React.FC = () => {
  const [banner, personalized, personalizedNewSong] = useQueries([
    { queryKey: 'banner', queryFn: () => useBanner() },
    {
      queryKey: 'personalized',
      queryFn: () => usePersonalized(10)
    },
    {
      queryKey: 'personalizedNewSong',
      queryFn: () => usePersonalizedNewSong()
    }
  ])

  if (
    banner.isLoading ||
    personalized.isLoading ||
    personalizedNewSong.isLoading
  ) {
    return <Loading />
  }

  if (banner.error || personalized.error || personalizedNewSong.error) {
    return <div>Error occurred while fetching data.</div>
  }

  if (
    banner.isSuccess &&
    personalized.isSuccess &&
    personalizedNewSong.isSuccess
  ) {
    return (
      <>
        <SimpleSlider banner={banner.data} />
        <NewPlaylist personalized={personalized.data} />
        <NewSong personalizedNewSong={personalizedNewSong.data} />
      </>
    )
  }
}

export default Home
