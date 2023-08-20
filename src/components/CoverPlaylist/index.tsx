import { PlayListDetail } from '@/api/playlist/type'
import { convertToTenThousand } from '@/utils/number'
import { useNavigate } from 'react-router-dom'
import SvgIcon from '@/components/SvgIcon'
import './index.css'

interface props {
  playListDetail: PlayListDetail
}

const CoverPlaylist: React.FC<props> = (props) => {
  const navigate = useNavigate()
  const navigateToPlaylistDetails = () => {
    navigate('/playlistDetails')
  }

  return (
    <div
      className="w-full h-auto cursor-pointer"
      key={props.playListDetail.id}
      onClick={navigateToPlaylistDetails}
    >
      <div className="cover-play-image">
        <img
          src={props.playListDetail.coverImgUrl}
          alt={props.playListDetail.name}
          className="rounded-md"
        />
        <div className="mask flex justify-center items-center">
          <SvgIcon
            className="w-10 text-white play-icon opacity-0 transition-opacity hover:text-teal-400"
            name="play-circle"
          />
        </div>
        <div className="play-count">
          <div>
            <SvgIcon
              className="w-5 h-5 inline-block mx-1"
              name="musical-note"
            />
            <span>{convertToTenThousand(props.playListDetail.playCount)}</span>
          </div>
        </div>
      </div>
      <p
        className="hover:underline hover:underline-offset-1 line-clamp-2"
        title={props.playListDetail.name}
      >
        {props.playListDetail.name}
      </p>
    </div>
  )
}
export default CoverPlaylist
