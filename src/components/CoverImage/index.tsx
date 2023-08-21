import { useNumberFormat } from '@/utils/number'
import SvgIcon from '@/components/SvgIcon'
import './index.css'
import { setSong } from '@/utils/aplayer'
import { usePlayListTrackAll } from '@/api/playlist'
import useAplayerStore from '@/stores/aplayer'
import { SyntheticEvent } from 'react'

interface props {
  imgUrl: string
  imgAlt: string
  playCount: number
  id: number
}

const CoverImage: React.FC<props> = (props) => {
  const { imgUrl, imgAlt, playCount, id } = props

  const { ap, setAudio } = useAplayerStore()
  const playPlaylist = async (e: SyntheticEvent, id: number) => {
    e.stopPropagation()
    e.nativeEvent.stopImmediatePropagation()
    const audioList = await usePlayListTrackAll(id)
    ap?.list.clear()
    for (const audio of audioList) {
      setAudio(await setSong(audio))
    }
  }
  return (
    <div className="cover-image">
      <img src={imgUrl} alt={imgAlt} className="rounded-md" />
      <div className="mask flex justify-center items-center">
        <SvgIcon
          className="w-10 text-white play-icon opacity-0 transition-opacity hover:text-primary"
          name="play-circle"
          onClick={(e: SyntheticEvent) => playPlaylist(e, id)}
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
