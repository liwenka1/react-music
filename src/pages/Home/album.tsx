import { useAlbumNewest } from '@/api/album'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { useQuery } from 'react-query'

const Album = () => {
  const { isLoading, error, data } = useQuery('useAlbumNewest', () =>
    useAlbumNewest()
  )
  console.log(data)

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error occurred</div>}
      <Card className="col-span-full">
        <CardHeader>
          <CardTitle>新碟上架</CardTitle>
          <CardDescription>热门新碟</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4 sm:grid-cols-6">
          {data &&
            data.albums.map((item) => {
              return (
                <div className="w-full h-auto cursor-pointer" key={item.id}>
                  <div className="relative">
                    <img src={item.picUrl} alt="" className="rounded" />
                    <div className="absolute bg-sprite bg-no-repeat bg-280% w-full h-full top-0 left-0" />
                  </div>
                  <p
                    className="hover:underline hover:underline-offset-1"
                    title={item.name}
                  >
                    {item.name}
                  </p>
                  <p
                    className="hover:underline hover:underline-offset-1 font-extralight"
                    title={item.artist.name}
                  >
                    {item.artist.name}
                  </p>
                </div>
              )
            })}
        </CardContent>
      </Card>
    </>
  )
}

export default Album
