import SvgIcon from '@/components/SvgIcon'
import { convertToTenThousand } from '@/utils/number'
// import { setPlayList, setSong } from '@/utils/aplayer'
// import useAplayerStore from '@/stores/aplayer'
import { PlayListDetail } from '@/api/playlist/type'
import { useNavigate } from 'react-router-dom'

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
  const navigateToPlaylistDetails = () => {
    navigate('/playlistDetails')
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
          return (
            <div
              className="w-full h-auto cursor-pointer"
              key={item.id}
              onClick={navigateToPlaylistDetails}
            >
              <div className="relative hover:scale-105">
                <img
                  src={item.coverImgUrl}
                  alt={item.name}
                  className="rounded-md"
                />
                <div className="absolute h-1/5 inset-x-0 bottom-0 flex justify-between bg-black bg-opacity-40 text-slate-200 rounded-md">
                  <div>
                    <SvgIcon
                      className="w-6 h-full inline-block pl-1"
                      name="musical-note"
                    />
                    <span>{convertToTenThousand(item.playCount)}</span>
                  </div>
                </div>
              </div>
              <p
                className="hover:underline hover:underline-offset-1 line-clamp-2"
                title={item.name}
              >
                {item.name}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PlayList
