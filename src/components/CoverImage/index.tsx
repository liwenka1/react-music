import { useNumberFormat } from '@/utils/number'
import SvgIcon from '@/components/SvgIcon'
import './index.css'

interface props {
  imgUrl: string
  imgAlt: string
  playCount: number
}

const CoverImage: React.FC<props> = (props) => {
  const { imgUrl, imgAlt, playCount } = props

  return (
    <div className="cover-image">
      <img src={imgUrl} alt={imgAlt} className="rounded-md" />
      <div className="mask flex justify-center items-center">
        <SvgIcon
          className="w-10 text-white play-icon opacity-0 transition-opacity hover:text-primary"
          name="play-circle"
        />
      </div>
      <div className="play-count">
        <SvgIcon className="w-5 h-5 inline-block mx-1" name="musical-note" />
        <span>{useNumberFormat(playCount)}</span>
      </div>
    </div>
  )
}
export default CoverImage
