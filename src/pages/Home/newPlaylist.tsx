import SvgIcon from '@/components/SvgIcon'
import { useNavigate } from 'react-router-dom'
import CoverImage from '@/components/CoverImage'
import { Personalized } from '@/api/personalized/type'

interface Props {
  personalized: Personalized[]
}

const NewPlaylist: React.FC<Props> = (props) => {
  const navigate = useNavigate()
  const navigateToPlaylistDetails = (playlistId: number) => {
    navigate('/playlistDetails', { state: { playlistId } })
  }

  return (
    <div className="col-span-full">
      <div className="flex items-center mb-4">
        <h2 className="text-xl">推荐歌单</h2>
        <SvgIcon className="w-6 h-6" name="chevron-right"></SvgIcon>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-6">
        {props.personalized.map((item) => {
          return (
            <div
              className="w-full h-auto cursor-pointer"
              key={item.id}
              onClick={() => navigateToPlaylistDetails(item.id)}
            >
              <CoverImage
                imgUrl={item.picUrl}
                imgAlt={item.name}
                playCount={item.playCount}
                id={item.id}
              />
              <p
                className="hover:underline hover:underline-offset-1 line-clamp-2"
                title={item.name}
              >
                {item.name}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default NewPlaylist
