import SvgIcon from '@/components/SvgIcon'
import { convertToTenThousand } from '@/utils/number'
import { setPlayList, setSong } from '@/utils/aplayer'
import useAplayerStore from '@/stores/aplayer'
import { PlayListDetail } from '@/api/playlist/type'

interface Props {
  playlists: PlayListDetail[]
}

const PlayList: React.FC<Props> = (props) => {
  const { ap, setAudio } = useAplayerStore()

  const getPlayListTrackAll = async (id: number) => {
    const songList = await setPlayList(id, 10, 0)
    ap?.list.clear()
    for (const song of songList) {
      const audio = await setSong(song)
      setAudio(audio)
    }
  }

  return (
    <div className="col-span-full">
      <div className="flex items-center mb-4">
        <h2 className="text-xl cursor-pointer">歌单推荐</h2>
        <SvgIcon className="w-6 h-6 cursor-pointer" name="chevron-right" />
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-10">
        {props.playlists.map((item) => {
          return (
            <div className="w-full h-auto cursor-pointer" key={item.id}>
              <div className="relative">
                <img
                  src={item.coverImgUrl}
                  alt={item.name}
                  className="rounded-md"
                />
                <div className="absolute bg-sprite bg-no-repeat bg-280% w-full h-full top-0 left-0 rounded-md" />
                <div className="absolute h-1/5 inset-x-0 bottom-0 flex justify-between bg-black bg-opacity-40 text-slate-200 cursor-auto rounded-md">
                  <div>
                    <SvgIcon
                      className="w-6 h-full inline-block pl-1"
                      name="musical-note"
                    />
                    <span>{convertToTenThousand(item.playCount)}</span>
                  </div>
                  <div onClick={() => getPlayListTrackAll(item.id)}>
                    <SvgIcon
                      className="w-6 h-full inline-block pr-1 hover:scale-110 hover:text-white cursor-pointer"
                      name="play-circle"
                    />
                  </div>
                </div>
              </div>
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

export default PlayList
