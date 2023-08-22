import { create } from 'zustand'
import { audio } from '@/components/Aplayer/type'
import APlayer from 'APlayer'

interface AplayerState {
  ap: APlayer | null
  initializeAplayer: () => void
  audio: audio[]
  setAudio: (audio: audio) => void
}

const useAplayerStore = create<AplayerState>((set) => ({
  ap: null,
  initializeAplayer: () => {
    set((state) => {
      const newAPlayer = new APlayer({
        container: document.querySelector('.playMusic') as HTMLDivElement,
        mini: false,
        autoplay: false,
        fixed: false,
        theme: '#16A34A',
        loop: 'all',
        order: 'random',
        preload: 'auto',
        volume: 0.7,
        mutex: true,
        listFolded: true,
        listMaxHeight: '250px',
        lrcType: 1,
        audio: state.audio
      })

      return {
        ...state,
        ap: newAPlayer
      }
    })
  },
  audio: [],
  setAudio: (newAudio) =>
    set((state) => {
      state.ap?.list.add([newAudio])

      return {
        ...state,
        audio: [newAudio]
      }
    })
}))

export default useAplayerStore
