import { ArtistDetail } from '@/api/artist/type'
import SvgIcon from '@/components/SvgIcon'

interface Props {
  artistDetail: ArtistDetail
}

const Header: React.FC<Props> = (props) => {
  const { artistDetail } = props

  return (
    <div className="grid grid-cols-7 gap-4">
      <img
        className="w-full rounded-full col-span-1"
        src={artistDetail.artist.avatar}
        alt={artistDetail.artist.name}
      />
      <div className="col-span-6 flex flex-col justify-between">
        <span className="text-3xl font-bold">{artistDetail.artist.name}</span>
        <span className="line-clamp-2 text-xs font-light">
          {artistDetail.identify.imageDesc || ''}
        </span>
        <div className="flex text-xs font-light">
          <span className="mr-4">单曲数：{artistDetail.artist.musicSize}</span>
          <span className="mr-4">专辑数：{artistDetail.artist.albumSize}</span>
          <span>MV数：{artistDetail.artist.mvSize}</span>
        </div>
        <div className="flex mb-2">
          <span className="svg-button bg-primary text-white mr-2">
            <SvgIcon name="plus" className="w-5 h-5 mr-1" />
            <span>关注</span>
          </span>
          <span className="svg-button">
            <SvgIcon name="signal" className="w-5 h-5 mr-1" />
            <span>歌手电台</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Header
