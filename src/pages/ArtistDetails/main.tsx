import { Album } from '@/api/album/type'
import { ArtistDetail, HotSong } from '@/api/artist/type'
import { Song } from '@/api/song/type'
import CoverImage from '@/components/CoverImage'
import SongsItem from '@/components/SongsItem'
import { useState } from 'react'

interface Props {
  hotSongs: HotSong[]
  artistDetail: ArtistDetail
  songs: Song[]
  hotAlbums: Album[]
}

const Main: React.FC<Props> = (props) => {
  const { hotSongs, artistDetail, songs, hotAlbums } = props
  const [artistType, setArtistType] = useState('hotSongs')

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
      {artistType == 'hotSongs' && (
        <div>
          <div className="grid grid-cols-12 gap-4 mt-8 mb-1 text-xs font-light">
            <span className="col-span-8">歌曲</span>
            <span className="col-span-3">专辑</span>
            <span className="col-span-1">时长</span>
          </div>
          {hotSongs.map((hotSong) => {
            return (
              <SongsItem song={hotSong} showArtist={false} key={hotSong.id} />
            )
          })}
        </div>
      )}
      {artistType == 'songs' && (
        <div>
          <div className="grid grid-cols-12 gap-4 mt-8 mb-1 text-xs font-light">
            <span className="col-span-8">歌曲</span>
            <span className="col-span-3">专辑</span>
            <span className="col-span-1">时长</span>
          </div>
          {songs.map((song) => {
            return <SongsItem song={song} showArtist={false} key={song.id} />
          })}
        </div>
      )}
      {artistType == 'albums' && (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-6">
          {hotAlbums.map((album) => {
            return (
              <div className="w-full h-auto cursor-pointer" key={album.id}>
                <CoverImage
                  imgUrl={album.picUrl}
                  imgAlt={album.name}
                  id={album.id}
                />
                <p
                  className="hover:underline hover:underline-offset-1 line-clamp-2"
                  title={album.name}
                >
                  {album.name}
                </p>
              </div>
            )
          })}
        </div>
      )}
      {artistType == 'details' && (
        <div>
          <span className=" text-xs font-light">
            {artistDetail.artist.briefDesc}
          </span>
        </div>
      )}
    </div>
  )
}

export default Main
