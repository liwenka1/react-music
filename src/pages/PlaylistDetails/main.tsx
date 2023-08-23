import { Song } from '@/api/song/type'
import './index.css'
import { useFormatDuring } from '@/utils/number'
import SvgIcon from '@/components/SvgIcon'
import { setSong } from '@/utils/aplayer'
import useAplayerStore from '@/stores/aplayer'

interface Props {
  playListTrackAll: Song[]
}

const Main: React.FC<Props> = (props) => {
  const { playListTrackAll } = props
  console.log(playListTrackAll)

  const { setAudio } = useAplayerStore()
  const playSong = async (song: Song) => {
    const audio = await setSong(song)
    setAudio(audio)
  }

  return (
    <div className="col-span-full">
      <div className="my-4">
        <span className="underline-text text-primary">
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
            <div className="song-item" key={song.id}>
              <div className="col-span-5 flex">
                <SvgIcon
                  name="star"
                  className="w-5 h-5 mr-1 cursor-pointer hover:text-primary text-[#888888]"
                />
                <span>{song.name}</span>
                <div className="song-icon">
                  <SvgIcon
                    name="play-circle"
                    className="svg-icon mr-1"
                    onClick={() => playSong(song)}
                  />
                  <SvgIcon name="plus-circle" className="svg-icon" />
                </div>
              </div>
              <span className="col-span-3 cursor-pointer hover:text-primary">
                {song.ar.map((artist) => artist.name).join('/')}
              </span>
              <span className="col-span-3 cursor-pointer hover:text-primary">
                {song.al.name}
              </span>
              <span className="col-span-1">
                {useFormatDuring(song.dt / 1000)}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Main
