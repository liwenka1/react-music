import { PlayListDetail } from '../playlist/type'

export interface TopPlaylistHighquality {
  playlists: PlayListDetail[]
  total: number
  more: boolean
  lasttime: number
}
