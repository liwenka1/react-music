import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { useQuery } from 'react-query'
import { useTopPlaylistHighquality } from '@/api/top'
import SvgIcon from '@/components/SvgIcon'
import { convertToTenThousand } from '@/utils/number'
import { setPlayList, setSong } from '@/utils/aplayer'
import useAplayerStore from '@/stores/aplayer'

const PlayList = () => {
  const { isLoading, error, data } = useQuery('useTopPlaylistHighquality', () =>
    useTopPlaylistHighquality({ limit: 12, cat: '全部' })
  )
  const { ap, setAudio } = useAplayerStore()

  const getPlayListTrackAll = async (id: number) => {
    const songList = await setPlayList(id, 10, 0)
    ap?.list.clear()
    for (const song of songList) {
      const audio = await setSong(song)
      setAudio(audio)
    }
  }

  if (isLoading || !data) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error occurred</div>
  }
  return (
    <Card className="col-span-full">
      <CardHeader>
        <CardTitle>热门推荐</CardTitle>
        <CardDescription>精品歌单</CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4 sm:grid-cols-6">
        {data.playlists.map((item) => {
          return (
            <div className="w-full h-auto cursor-pointer" key={item.id}>
              <div className="relative">
                <img
                  src={item.coverImgUrl}
                  alt={item.name}
                  className="rounded"
                />
                <div className="absolute bg-sprite bg-no-repeat bg-280% w-full h-full top-0 left-0" />
                <div className="absolute h-1/5 inset-x-0 bottom-0 flex justify-between bg-black bg-opacity-40 text-slate-200 cursor-auto">
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
                className="hover:underline hover:underline-offset-1"
                title={item.name}
              >
                {item.name}
              </p>
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}

export default PlayList
