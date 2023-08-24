import { Song } from '@/api/song/type'
import './index.css'
import { useFormatDuring } from '@/utils/number'
import SvgIcon from '@/components/SvgIcon'
import { setSong } from '@/utils/aplayer'
import useAplayerStore from '@/stores/aplayer'
import { useNavigate } from 'react-router-dom'

interface Props {
  playListTrackAll: Song[]
}

const Main: React.FC<Props> = (props) => {
  const { playListTrackAll } = props

  const { setAudio } = useAplayerStore()
  const playSong = async (song: Song) => {
    const audio = await setSong(song)
    setAudio(audio)
  }

  const navigate = useNavigate()
  const navigateToArtistDetails = (artistId: number) => {
    navigate('/artistDetails', { state: { artistId } })
  }
  const navigateToAlbumDetails = (albumId: number) => {
    navigate('/albumDetails', { state: { albumId } })
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
              <span className="col-span-3 ">
                {song.ar.map((artist, index) => {
                  return (
                    <>
                      <span
                        className="cursor-pointer hover:text-primary"
                        key={artist.id}
                        onClick={() => navigateToArtistDetails(artist.id)}
                      >
                        {artist.name}
                      </span>
                      {index != song.ar.length - 1 && <span>/</span>}
                    </>
                  )
                })}
              </span>
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
