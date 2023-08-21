import { PersonalizedNewSong } from '@/api/personalized/type'
import SvgIcon from '@/components/SvgIcon'
import { setNewSong } from '@/utils/aplayer'
import { useNavigate } from 'react-router-dom'
import useAplayerStore from '@/stores/aplayer'

interface Props {
  personalizedNewSong: PersonalizedNewSong[]
}

const NewSong: React.FC<Props> = (props) => {
  const navigate = useNavigate()
  const navigateToArtistDetails = () => {
    navigate('/artistDetails')
  }

  const { setAudio } = useAplayerStore()
  const playNewSong = async (newSong: PersonalizedNewSong) => {
    const audio = await setNewSong(newSong)
    setAudio(audio)
  }

  return (
    <div className="col-span-full">
      <div className="flex items-center mb-4">
        <h2 className="text-xl">推荐新音乐</h2>
        <SvgIcon className="w-6 h-6" name="chevron-right" />
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
        {props.personalizedNewSong.map((item) => {
          return (
            <div
              className="w-full h-auto flex items-center rounded-md hover:bg-secondary/80 transition-all"
              key={item.id}
            >
              <img
                src={item.picUrl}
                alt={item.name}
                className="rounded-md w-1/12 h-auto mr-4"
              />
              <div>
                <p className="line-clamp-1" title={item.name}>
                  {item.name}
                </p>
                <p
                  className="hover:underline hover:underline-offset-1 font-extralight line-clamp-1 cursor-pointer"
                  title={item.song.artists
                    .map((artist) => artist.name)
                    .join('/')}
                  onClick={navigateToArtistDetails}
                >
                  {item.song.artists.map((artist) => artist.name).join('/')}
                </p>
              </div>
              <div className="flex ml-auto mr-2">
                <SvgIcon
                  name="play-circle"
                  className="w-5 h-5 cursor-pointer hover:text-primary mr-1"
                  onClick={() => playNewSong(item)}
                />
                <SvgIcon
                  name="star"
                  className="w-5 h-5 cursor-pointer hover:text-primary "
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default NewSong
