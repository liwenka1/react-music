import { PlayListDetail } from '@/api/playlist/type'
import { Song } from '@/api/song/type'
import SvgIcon from '@/components/SvgIcon'
import './index.css'
import { setSong } from '@/utils/aplayer'
import useAplayerStore from '@/stores/aplayer'

interface Props {
  playListDetail: PlayListDetail
  playListTrackAll: Song[]
}

const Header: React.FC<Props> = (props) => {
  const { playListDetail, playListTrackAll } = props
  const { ap, setAudio } = useAplayerStore()
  const playPlaylist = async () => {
    ap?.list.clear()
    for (const audio of playListTrackAll) {
      setAudio(await setSong(audio))
    }
  }

  return (
    <div className="grid grid-cols-7 gap-4">
      <img
        className="w-full rounded-md col-span-1"
        src={playListDetail.coverImgUrl}
        alt={playListDetail.name}
      />
      <div className="col-span-6 flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold my-2">{playListDetail.name}</h1>
          <div className="flex flex-row my-2 items-center">
            <img
              className="w-6 rounded-full"
              src={playListDetail.creator.avatarUrl}
              alt=""
            />
            <span className="text-sm mx-2 cursor-pointer hover:text-primary">
              {playListDetail.creator.nickname}
            </span>
            {playListDetail.tags.map((tag, index) => {
              return (
                <span className="mx-2 text-xs font-light" key={index}>
                  {'#' + tag}
                </span>
              )
            })}
          </div>
          <p className="text-xs font-light mt-4">
            {playListDetail.description}
          </p>
        </div>
        <div className="flex mb-2">
          <span
            className="svg-button bg-primary text-white mr-2"
            onClick={playPlaylist}
          >
            <SvgIcon name="play-circle" className="w-5 h-5 mr-1" />
            <span>播放全部</span>
          </span>
          <span className="svg-button">
            <SvgIcon name="star" className="w-5 h-5 mr-1" />
            <span>收藏</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Header
