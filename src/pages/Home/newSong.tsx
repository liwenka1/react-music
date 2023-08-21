import { PersonalizedNewSong } from '@/api/personalized/type'
import SvgIcon from '@/components/SvgIcon'
import { useNavigate } from 'react-router-dom'

interface Props {
  personalizedNewSong: PersonalizedNewSong[]
}

const NewSong: React.FC<Props> = (props) => {
  const navigate = useNavigate()
  const navigateToAlbum = () => {
    navigate('/album')
  }
  const navigateToAlbumDetails = () => {
    navigate('/albumDetails')
  }
  const navigateToArtistDetails = () => {
    navigate('/artistDetails')
  }

  return (
    <div className="col-span-full">
      <div className="flex items-center mb-4">
        <h2 className="text-xl cursor-pointer" onClick={navigateToAlbum}>
          推荐新音乐
        </h2>
        <SvgIcon
          className="w-6 h-6 cursor-pointer"
          name="chevron-right"
          onClick={navigateToAlbum}
        />
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
        {props.personalizedNewSong.map((item) => {
          return (
            <div
              className="w-full h-auto flex items-center rounded-md hover:bg-secondary/80 transition-all"
              key={item.id}
            >
              <img
                src={item.picUrl}
                alt={item.name}
                className="object-cover rounded-md w-1/5 h-auto mr-4 cursor-pointer"
                onClick={navigateToAlbumDetails}
              />
              <div>
                <p
                  className="hover:underline hover:underline-offset-1 line-clamp-1 cursor-pointer"
                  title={item.name}
                  onClick={navigateToAlbumDetails}
                >
                  {item.name}
                </p>
                <p
                  className="hover:underline hover:underline-offset-1 font-extralight line-clamp-1 cursor-pointer"
                  title={item.song.artists[0].name}
                  onClick={navigateToArtistDetails}
                >
                  {item.song.artists[0].name}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default NewSong
