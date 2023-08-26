import { Song } from '@/api/song/type'
import SongsItem from '@/components/SongsItem'

interface Props {
  playListTrackAll: Song[]
}

const Main: React.FC<Props> = (props) => {
  const { playListTrackAll } = props

  return (
    <div className="col-span-full">
      <div className="my-4">
        <span className="underline-text text-primary cursor-pointer">
          歌曲{playListTrackAll.length}
        </span>
      </div>
      <div>
        <div className="grid grid-cols-12 gap-4 mt-8 mb-1 text-xs font-light">
          <span className="col-span-5">歌曲</span>
          <span className="col-span-3">歌手</span>
          <span className="col-span-3">专辑</span>
          <span className="col-span-1">时长</span>
        </div>
        {playListTrackAll.map((song) => {
          return (
            <SongsItem
              song={song}
              showArtist={true}
              showAlbum={true}
              key={song.id}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Main
