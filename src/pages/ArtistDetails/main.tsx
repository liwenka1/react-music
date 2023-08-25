import { Song } from '@/api/song/type'
import SvgIcon from '@/components/SvgIcon'
import useAplayerStore from '@/stores/aplayer'
import { setSong } from '@/utils/aplayer'
import { useFormatDuring } from '@/utils/number'
import { useNavigate } from 'react-router-dom'

interface Props {
  songs: Song[]
}

const Main: React.FC<Props> = (props) => {
  const { songs } = props
  const { setAudio } = useAplayerStore()
  const playSong = async (song: Song) => {
    const audio = await setSong(song)
    setAudio(audio)
  }

  const navigate = useNavigate()
  const navigateToAlbumDetails = (albumId: number) => {
    navigate('/albumDetails', { state: { albumId } })
  }

  return (
    <div className="col-span-full">
      <div className="my-4">
        <span className="underline-text text-primary">歌曲{songs.length}</span>
        <span className="underline-text text-primary mx-10">
          专辑{songs.length}
        </span>
        <span className="underline-text text-primary">详情{songs.length}</span>
      </div>
      <div>
        <div className="grid grid-cols-12 gap-4 mt-8 mb-1 text-xs font-light">
          <span className="col-span-8">歌曲</span>
          <span className="col-span-3">专辑</span>
          <span className="col-span-1">时长</span>
        </div>
        {songs.map((song) => {
          return (
            <div className="song-item" key={song.id}>
              <div className="col-span-8 flex">
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
              <span
                className="col-span-3 cursor-pointer hover:text-primary"
                onClick={() => navigateToAlbumDetails(song.al.id)}
              >
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
