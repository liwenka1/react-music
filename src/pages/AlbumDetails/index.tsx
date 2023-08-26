import { useLocation } from 'react-router-dom'

const AlbumDetails: React.FC = () => {
  const location = useLocation()
  console.log(location.state.albumId)

  return <div>这里是AlbumDetails</div>
}

export default AlbumDetails
