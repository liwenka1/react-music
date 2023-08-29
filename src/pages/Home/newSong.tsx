import { PersonalizedNewSong } from '@/api/personalized/type'
import SvgIcon from '@/components/SvgIcon'
import { setNewSong } from '@/utils/aplayer'
import { useNavigate } from 'react-router-dom'
import useAplayerStore from '@/stores/aplayer'
import loadingImgUrl from '@/assets/img/loading.png'
import LazyImg from 'react-lazyimg-component'

interface Props {
  personalizedNewSong: PersonalizedNewSong[]
}

const NewSong: React.FC<Props> = (props) => {
  const navigate = useNavigate()
  const navigateToArtistDetails = (artistId: number) => {
    navigate('/artistDetails', { state: { artistId } })
  }

  const { ap, setAudio } = useAplayerStore()
  const playNewSong = async (newSong: PersonalizedNewSong) => {
    const audio = await setNewSong(newSong)
    setAudio(audio)
    ap?.list.switch(ap?.list.audios.length - 1)
    ap?.play()
  }
  const addNewSong = async (song: PersonalizedNewSong) => {
    const audio = await setNewSong(song)
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
              <LazyImg
                src={item.picUrl}
                alt={item.name}
                placeholder={loadingImgUrl}
                className="rounded-md w-1/12 h-auto mr-4"
              />
              <div>
                <p className="line-clamp-1" title={item.name}>
                  {item.name}
                </p>
                <p className="flex">
                  {item.song.artists.map((artist, index) => {
                    return (
                      <>
                        <span
                          className="hover:underline hover:underline-offset-1 font-extralight line-clamp-1 cursor-pointer"
                          title={artist.name}
                          onClick={() => navigateToArtistDetails(artist.id)}
                        >
                          {artist.name}
                        </span>
                        {index != item.song.artists.length - 1 && (
                          <span>/</span>
                        )}
                      </>
                    )
                  })}
                </p>
              </div>
              <div className="flex ml-auto mr-2">
                <SvgIcon
                  name="play-circle"
                  className="svg-icon mr-1"
                  onClick={() => playNewSong(item)}
                />
                <SvgIcon
                  name="plus-circle"
                  className="svg-icon mr-1"
                  onClick={() => addNewSong(item)}
                />
                <SvgIcon name="heart" className="svg-icon " />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default NewSong
