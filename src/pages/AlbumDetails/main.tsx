import { Album } from '@/api/album/type'
import { Song } from '@/api/song/type'
import SongsItem from '@/components/SongsItem'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface SongsProps {
  songs: Song[]
}

const Songs: React.FC<SongsProps> = (props) => {
  const { songs } = props

  return (
    <div>
      <div className="grid grid-cols-12 gap-4 mt-8 mb-1 text-sm font-light">
        <span className="col-span-8">歌曲</span>
        <span className="col-span-3">歌手</span>
        <span className="col-span-1">时长</span>
      </div>
      {songs.map((song) => {
        return (
          <SongsItem
            song={song}
            showArtist={true}
            showAlbum={false}
            key={song.id}
          />
        )
      })}
    </div>
  )
}

interface InfoProps {
  album: Album
}

const Info: React.FC<InfoProps> = (props) => {
  const { album } = props
  const navigate = useNavigate()
  const navigateToArtistDetails = (artistId: number) => {
    navigate('/artistDetails', { state: { artistId } })
  }

  return (
    <>
      <div className="flex mt-8">
        <span className="text-sm whitespace-nowrap w-20">专辑:</span>
        <span className="text-sm flex-1 font-light">{album.name}</span>
      </div>
      <div className="flex mt-8">
        <span className="text-sm whitespace-nowrap w-20">歌手:</span>
        <span
          className="text-sm flex-1 cursor-pointer hover:text-primary"
          onClick={() => navigateToArtistDetails(album.artist.id)}
        >
          {album.artist.name}
        </span>
      </div>
      {album.company && (
        <div className="flex mt-8">
          <span className="text-sm whitespace-nowrap w-20">唱片公司:</span>
          <span className="text-sm font-light flex-1">{album.company}</span>
        </div>
      )}
      {album.description && (
        <div className="flex mt-8">
          <span className="text-sm whitespace-nowrap w-20">专辑简介:</span>
          <span className="text-sm font-light flex-1">{album.description}</span>
        </div>
      )}
    </>
  )
}

interface Props {
  album: Album
  songs: Song[]
}

const Main: React.FC<Props> = (props) => {
  const { album, songs } = props
  const [albumType, setAlbumType] = useState('songs')

  return (
    <div className="col-span-full">
      <div className="my-4">
        <span
          className={`mr-10 cursor-pointer ${
            albumType == 'songs' ? 'text-primary underline-text' : ''
          }`}
          onClick={() => setAlbumType('songs')}
        >
          歌曲{songs.length}
        </span>
        <span
          className={`cursor-pointer ${
            albumType == 'info' ? 'text-primary underline-text' : ''
          }`}
          onClick={() => setAlbumType('info')}
        >
          专辑信息
        </span>
      </div>
      <div className={`${albumType == 'songs' ? '' : 'hidden'}`}>
        <Songs songs={songs} />
      </div>
      <div className={`${albumType == 'info' ? '' : 'hidden'}`}>
        <Info album={album} />
      </div>
    </div>
  )
}

export default Main
