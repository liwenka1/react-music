import { ArtistDesc, ArtistDetail, HotSong } from '@/api/artist/type'
import SongsItem from '@/components/SongsItem'
import { useState } from 'react'
import Songs from './songs'
import Albums from './albums'
import SvgIcon from '@/components/SvgIcon'
import useAplayerStore from '@/stores/aplayer'
import { setSong } from '@/utils/aplayer'

interface Props {
  hotSongs: HotSong[]
  artistDetail: ArtistDetail
  artistDesc: ArtistDesc
}

const Main: React.FC<Props> = (props) => {
  const { hotSongs, artistDetail, artistDesc } = props
  const [artistType, setArtistType] = useState('hotSongs')
  const { ap, setAudio } = useAplayerStore()
  const playHotSongs = async () => {
    ap?.list.clear()
    for (const audio of hotSongs) {
      setAudio(await setSong(audio))
    }
  }

  return (
    <div className="col-span-full">
      <div className="my-4">
        <span
          className={`mr-10 cursor-pointer ${
            artistType == 'hotSongs' ? 'text-primary underline-text' : ''
          }`}
          onClick={() => setArtistType('hotSongs')}
        >
          精选
        </span>
        <span
          className={`cursor-pointer ${
            artistType == 'songs' ? 'text-primary underline-text' : ''
          }`}
          onClick={() => setArtistType('songs')}
        >
          歌曲{artistDetail.artist.musicSize}
        </span>
        <span
          className={`mx-10 cursor-pointer ${
            artistType == 'albums' ? 'text-primary underline-text' : ''
          }`}
          onClick={() => setArtistType('albums')}
        >
          专辑{artistDetail.artist.albumSize}
        </span>
        <span
          className={`cursor-pointer ${
            artistType == 'details' ? 'text-primary underline-text' : ''
          }`}
          onClick={() => setArtistType('details')}
        >
          详情
        </span>
      </div>
      <div className={`${artistType == 'hotSongs' ? '' : 'hidden'}`}>
        <span className="svg-button mt-8" onClick={playHotSongs}>
          <SvgIcon name="play" className="w-5 h-5 mr-1" />
          <span>播放全部</span>
        </span>
        <div className="grid grid-cols-12 gap-4 mt-8 mb-1 text-xs font-light">
          <span className="col-span-8">歌曲</span>
          <span className="col-span-3">专辑</span>
          <span className="col-span-1">时长</span>
        </div>
        {hotSongs.map((hotSong) => {
          return (
            <SongsItem
              song={hotSong}
              showArtist={false}
              showAlbum={true}
              key={hotSong.id}
            />
          )
        })}
      </div>
      <div className={`${artistType == 'songs' ? '' : 'hidden'}`}>
        <Songs musicSize={artistDetail.artist.musicSize} />
      </div>
      <div className={`${artistType == 'albums' ? '' : 'hidden'}`}>
        <Albums albumSize={artistDetail.artist.albumSize} />
      </div>
      <div className={`${artistType == 'details' ? '' : 'hidden'}`}>
        <span className="text-xs font-light">{artistDesc.briefDesc}</span>
        {artistDesc.introduction.map((item, index) => {
          return (
            <div key={index}>
              <p className="text-sm mt-4 mb-2">{item.ti}</p>
              <span className="text-xs font-light">{item.txt}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Main
