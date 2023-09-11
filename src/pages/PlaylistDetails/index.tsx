import { useLocation } from 'react-router-dom'
import { useQueries } from 'react-query'
import { usePlayListDetail, usePlayListTrackAll } from '@/api/playlist'
import Loading from '@/components/Loading'
import Header from './header'
import Main from './main'

const PlaylistDetails: React.FC = () => {
  const location = useLocation()
  const [playListDetail, playListTrackAll] = useQueries([
    {
      queryKey: ['playListDetail', location.state.playlistId],
      queryFn: () => usePlayListDetail(location.state.playlistId)
    },
    {
      queryKey: ['playListTrackAll', location.state.playlistId],
      queryFn: () => usePlayListTrackAll(location.state.playlistId)
    }
  ])

  if (playListDetail.isLoading || playListTrackAll.isLoading) {
    return <Loading />
  }

  if (playListDetail.error || playListTrackAll.error) {
    return <div>Error occurred while fetching data.</div>
  }

  if (playListDetail.isSuccess && playListTrackAll.isSuccess) {
    return (
      <div className="col-span-full flex flex-col">
        <Header
          playListDetail={playListDetail.data}
          songs={playListTrackAll.data}
        />
        <Main songs={playListTrackAll.data} />
      </div>
    )
  }

  return null
}

export default PlaylistDetails
