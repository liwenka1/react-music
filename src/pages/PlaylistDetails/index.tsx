import { useLocation } from 'react-router-dom'
import { setPlayList, setSong } from '@/utils/aplayer'
import { useEffect } from 'react'

const PlaylistDetails: React.FC = () => {
  const location = useLocation()
  console.log(location)
  const getPlayListTrackAll = async (id: number) => {
    const songList = await setPlayList(id, 10, 0)
    console.log(songList, setSong)
  }
  useEffect(() => {
    getPlayListTrackAll(location.state.playlistId)
  }, [])

  return <div>这里是PlaylistDetails</div>
}

export default PlaylistDetails
