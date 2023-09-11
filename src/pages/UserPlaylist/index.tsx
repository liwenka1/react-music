import { useUserPlaylist } from '@/api/user'
import CoverImage from '@/components/CoverImage'
import Loading from '@/components/Loading'
import SvgIcon from '@/components/SvgIcon'
import { useQuery } from 'react-query'
import { useLocation, useNavigate } from 'react-router-dom'
import avatarLoadingImgUrl from '@/assets/img/avatarLoading.png'
import LazyImg from 'react-lazyimg-component'

const UserPlaylist: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const navigateToPlaylistDetails = (playlistId: number) => {
    navigate('/playlistDetails', { state: { playlistId } })
  }
  const limit = 35
  const {
    data: playlist,
    isSuccess,
    isLoading,
    error
  } = useQuery(['userPlaylist', location.state.userId], () =>
    useUserPlaylist(location.state.userId, limit)
  )

  if (isLoading) {
    return <Loading />
  }

  if (error) {
    return <div>Error occurred while fetching data.</div>
  }

  if (isSuccess) {
    return (
      <div className="col-span-full flex flex-col">
        <div className="col-span-full grid grid-cols-7 gap-4">
          <LazyImg
            className="w-full rounded-full col-span-1"
            src={playlist[0].creator.avatarUrl}
            alt={playlist[0].creator.nickname}
            placeholder={avatarLoadingImgUrl}
          />
          <div className="col-span-6 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold my-2">
                {playlist[0].creator.nickname}
              </h1>
              <span className="text-xs font-light">
                {playlist[0].creator.signature}
              </span>
            </div>
            <div className="flex mb-2">
              <span className="svg-button bg-primary text-white mr-2">
                <SvgIcon name="plus" className="w-5 h-5 mr-1" />
                <span>关注</span>
              </span>
            </div>
          </div>
        </div>
        <div className="col-span-full">
          <div className="my-4">
            <span className="cursor-pointer text-primary underline-text">
              创建的歌单
            </span>
          </div>
          <div className="grid gap-4 grid-cols-6 mt-12">
            {playlist.map((item) => {
              return (
                <div
                  className="w-full h-auto cursor-pointer"
                  key={item.id}
                  onClick={() => navigateToPlaylistDetails(item.id)}
                >
                  <CoverImage
                    imgUrl={item.coverImgUrl}
                    imgAlt={item.name}
                    id={item.id}
                    type="playlist"
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
      </div>
    )
  }

  return null
}

export default UserPlaylist
