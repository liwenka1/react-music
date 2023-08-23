import { Song } from '@/api/song/type'
import './index.css'

interface Props {
  playListTrackAll: Song[]
}

const Main: React.FC<Props> = (props) => {
  const { playListTrackAll } = props
  console.log(playListTrackAll)

  return (
    <div className="col-span-full">
      <div className="my-4">
        <span className="underline-text text-primary">
          歌曲{playListTrackAll.length}
        </span>
      </div>
      <div>
        <span>歌单</span>
      </div>
    </div>
  )
}

export default Main
