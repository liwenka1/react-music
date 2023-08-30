import { PlayListDetail } from '@/api/playlist/type'
import { Song } from '@/api/song/type'
import SvgIcon from '@/components/SvgIcon'
import { setSong } from '@/utils/aplayer'
import useAplayerStore from '@/stores/aplayer'
import { useNavigate } from 'react-router-dom'
import avatarLoadingImgUrl from '@/assets/img/avatarLoading.png'
import LazyImg from 'react-lazyimg-component'

interface Props {
  playListDetail: PlayListDetail
  songs: Song[]
}

const Header: React.FC<Props> = (props) => {
  const { playListDetail, songs } = props
  const { ap, setAudio } = useAplayerStore()
  const playPlaylist = async () => {
    ap?.list.clear()
    for (const audio of songs) {
      setAudio(await setSong(audio))
    }
  }

  const navigate = useNavigate()
  const navigateToUserPlaylist = (userId: number) => {
    navigate('/userPlaylist', { state: { userId } })
  }

  return (
    <div className="grid grid-cols-7 gap-4">
      <LazyImg
        className="w-full rounded-md col-span-1"
        src={playListDetail.coverImgUrl}
        alt={playListDetail.name}
        placeholder={avatarLoadingImgUrl}
      />
      <div className="col-span-6 flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold my-2">{playListDetail.name}</h1>
          <div className="flex flex-row my-2 items-center">
            <LazyImg
              className="w-6 rounded-full"
              src={playListDetail.creator.avatarUrl}
              alt=""
              placeholder={avatarLoadingImgUrl}
            />
            <span
              className="text-sm mx-2 cursor-pointer hover:text-primary"
              onClick={() =>
                navigateToUserPlaylist(playListDetail.creator.userId)
              }
            >
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
        <div className="flex mb-2" onClick={playPlaylist}>
          <span className="svg-button bg-primary text-white mr-2">
            <SvgIcon name="play" className="w-5 h-5 mr-1" />
            <span>播放全部</span>
          </span>
          <span className="svg-button">
            <SvgIcon name="heart" className="w-5 h-5 mr-1" />
            <span>收藏</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Header
