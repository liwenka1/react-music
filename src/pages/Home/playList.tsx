import SvgIcon from '@/components/SvgIcon'
// import { setPlayList, setSong } from '@/utils/aplayer'
// import useAplayerStore from '@/stores/aplayer'
import { PlayListDetail } from '@/api/playlist/type'
import { useNavigate } from 'react-router-dom'
import CoverPlaylist from '@/components/CoverPlaylist'

interface Props {
  playlists: PlayListDetail[]
}

const PlayList: React.FC<Props> = (props) => {
  // const { ap, setAudio } = useAplayerStore()

  // const getPlayListTrackAll = async (id: number) => {
  //   const songList = await setPlayList(id, 10, 0)
  //   ap?.list.clear()
  //   for (const song of songList) {
  //     const audio = await setSong(song)
  //     setAudio(audio)
  //   }
  // }

  const navigate = useNavigate()
  const navigateToPlaylist = () => {
    navigate('/playlist')
  }
  return (
    <div className="col-span-full">
      <div className="flex items-center mb-4">
        <h2 className="text-xl cursor-pointer" onClick={navigateToPlaylist}>
          歌单推荐
        </h2>
        <SvgIcon
          className="w-6 h-6 cursor-pointer"
          name="chevron-right"
          onClick={navigateToPlaylist}
        ></SvgIcon>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-10">
        {props.playlists.map((item) => {
          return <CoverPlaylist playListDetail={item} key={item.id} />
        })}
      </div>
    </div>
  )
}

export default PlayList
