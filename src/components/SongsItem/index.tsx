import { Song } from '@/api/song/type'
import SvgIcon from '../SvgIcon'
import { HotSong } from '@/api/artist/type'
import { setSong } from '@/utils/aplayer'
import useAplayerStore from '@/stores/aplayer'
import { useNavigate } from 'react-router-dom'
import { useFormatDuring } from '@/utils/number'

interface Props {
  song: Song | HotSong
  showArtist: boolean
  showAlbum: boolean
}

const SongsItem: React.FC<Props> = (prpos) => {
  const { song, showArtist, showAlbum } = prpos

  const { ap, setAudio } = useAplayerStore()
  const playSong = async (song: Song | HotSong) => {
    const audio = await setSong(song)
    setAudio(audio)
    ap?.list.switch(ap?.list.audios.length - 1)
    ap?.play()
  }
  const addSong = async (song: Song | HotSong) => {
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
    <div className="songs-item" key={song.id}>
      <div
        className={`flex ${
          showArtist && showAlbum ? 'col-span-5' : 'col-span-8'
        }`}
      >
        <SvgIcon
          name="heart"
          className="w-5 h-5 mr-1 cursor-pointer hover:text-primary text-[#888888]"
        />
        <span>{song.name}</span>
        <div className="songs-icon">
          <SvgIcon
            name="play-circle"
            className="svg-icon mr-1"
            onClick={() => playSong(song)}
          />
          <SvgIcon
            name="plus-circle"
            className="svg-icon"
            onClick={() => addSong(song)}
          />
        </div>
      </div>
      {showArtist && (
        <span className="col-span-3">
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
      )}
      {showAlbum && (
        <span
          className="col-span-3 cursor-pointer hover:text-primary"
          onClick={() => navigateToAlbumDetails(song.al.id)}
        >
          {song.al.name}
        </span>
      )}
      <span className="col-span-1">{useFormatDuring(song.dt / 1000)}</span>
    </div>
  )
}

export default SongsItem
