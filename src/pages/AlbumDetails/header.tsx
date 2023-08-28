import { Album } from '@/api/album/type'
import SvgIcon from '@/components/SvgIcon'
import { useNavigate } from 'react-router-dom'
import avatarLoadingImgUrl from '@/assets/img/avatarLoading.png'
import LazyImg from 'react-lazyimg-component'

interface Props {
  album: Album
}

const Header: React.FC<Props> = (props) => {
  const { album } = props
  const navigate = useNavigate()
  const navigateToArtistDetails = (artistId: number) => {
    navigate('/artistDetails', { state: { artistId } })
  }

  return (
    <div className="grid grid-cols-7 gap-4">
      <LazyImg
        className="w-full rounded-md col-span-1"
        src={album.picUrl}
        alt={album.name}
        placeholder={avatarLoadingImgUrl}
      />
      <div className="col-span-6 flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold my-2">{album.name}</h1>
          <span
            className="text-xs cursor-pointer hover:text-primary"
            onClick={() => navigateToArtistDetails(album.artist.id)}
          >
            {album.artist.name}
          </span>
        </div>
        <div>
          <span className="text-xs mr-4">
            {new Date(album.publishTime).toLocaleDateString()}
          </span>
          <span className="text-xs">{album.subType}</span>
        </div>
        <div className="flex mb-2">
          <span className="svg-button bg-primary text-white mr-2">
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
