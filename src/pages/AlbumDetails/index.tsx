import { useAlbum } from '@/api/album'
import { useQuery } from 'react-query'
import { useLocation } from 'react-router-dom'
import Header from './header'
import Main from './main'
import Loading from '@/components/Loading'

const AlbumDetails: React.FC = () => {
  const location = useLocation()
  const { data, isSuccess, isLoading, error } = useQuery(
    ['album', location.state.albumId],
    () => useAlbum(location.state.albumId)
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
        <Header album={data.album} songs={data.songs} />
        <Main album={data.album} songs={data.songs} />
      </div>
    )
  }
}

export default AlbumDetails
