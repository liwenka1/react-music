import { PlayListDetail } from '@/api/playlist/type'
import { convertToTenThousand } from '@/utils/number'
import SvgIcon from '@/components/SvgIcon'
import './index.css'

interface props {
  playListDetail: PlayListDetail
}

const CoverPlaylist: React.FC<props> = (props) => {
  return (
    <div className="cover-play-image">
      <img
        src={props.playListDetail.coverImgUrl}
        alt={props.playListDetail.name}
        className="rounded-md"
      />
      <div className="mask flex justify-center items-center">
        <SvgIcon
          className="w-10 text-white play-icon opacity-0 transition-opacity hover:text-primary"
          name="play-circle"
        />
      </div>
      <div className="play-count">
        <div>
          <SvgIcon className="w-5 h-5 inline-block mx-1" name="musical-note" />
          <span>{convertToTenThousand(props.playListDetail.playCount)}</span>
        </div>
      </div>
    </div>
  )
}
export default CoverPlaylist
