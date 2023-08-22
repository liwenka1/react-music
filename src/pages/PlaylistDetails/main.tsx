import { Song } from '@/api/song/type'

interface Props {
  playListTrackAll: Song[]
}

const Main: React.FC<Props> = (props) => {
  const { playListTrackAll } = props
  console.log(playListTrackAll)

  return <div className="col-span-full">这里是Main</div>
}

export default Main
