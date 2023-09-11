import { useAlbum } from '@/api/album'
import { useQuery } from 'react-query'
import { useLocation } from 'react-router-dom'
import Header from './header'
import Main from './main'
import Loading from '@/components/Loading'

const AlbumDetails: React.FC = () => {
  const location = useLocation()
  const {
    data: albumInfo,
    isSuccess,
    isLoading,
    error
  } = useQuery(['album', location.state.albumId], () =>
    useAlbum(location.state.albumId)
  )
  if (isLoading) {
    return <Loading />
  }

  if (error) {
    return <div>Error occurred while fetching data.</div>
  }

  if (isSuccess) {
    return (
      <div className="col-span-full flex flex-col">
        <Header album={albumInfo.album} songs={albumInfo.songs} />
        <Main album={albumInfo.album} songs={albumInfo.songs} />
      </div>
    )
  }

  return null
}

export default AlbumDetails
