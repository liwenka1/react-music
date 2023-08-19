import { Album } from '@/api/album/type'
import SvgIcon from '@/components/SvgIcon'

interface Props {
  albums: Album[]
}

const Album: React.FC<Props> = (props) => {
  return (
    <div className="col-span-full">
      <div className="flex items-center mb-4">
        <h2 className="text-xl cursor-pointer">新碟推荐</h2>
        <SvgIcon className="w-6 h-6 cursor-pointer" name="chevron-right" />
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-6">
        {props.albums.map((item) => {
          return (
            <div
              className="w-full h-auto cursor-pointer flex items-center rounded-md hover:bg-secondary/80"
              key={item.id}
            >
              <div className="w-1/4 mr-4">
                <img src={item.picUrl} alt={item.name} className="rounded-md" />
              </div>
              <div>
                <p
                  className="hover:underline hover:underline-offset-1 line-clamp-1"
                  title={item.name}
                >
                  {item.name}
                </p>
                <p
                  className="hover:underline hover:underline-offset-1 font-extralight line-clamp-1"
                  title={item.artist.name}
                >
                  {item.artist.name}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Album
