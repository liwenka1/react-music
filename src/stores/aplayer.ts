import { create } from 'zustand'
import { audio } from '@/components/Aplayer/type'
import APlayer from 'APlayer'

interface AplayerState {
  ap: APlayer | null
  initializeAplayer: () => void
  audio: audio[]
  setAudio: (audio: audio[] | audio) => void
}

const useAplayerStore = create<AplayerState>((set) => ({
  ap: null,
  initializeAplayer: () => {
    set((state) => {
      const newAPlayer = new APlayer({
        container: document.querySelector('.playMusic') as HTMLDivElement,
        mini: false,
        autoplay: false,
        theme: '#FADFA3',
        loop: 'all',
        order: 'random',
        preload: 'auto',
        volume: 0.7,
        mutex: true,
        listFolded: false,
        listMaxHeight: 90,
        lrcType: 3,
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
      const updatedAudio = Array.isArray(newAudio)
        ? newAudio
        : [...state.audio, newAudio]

      // 更新ap的音频数据
      state.ap?.list.clear()
      state.ap?.list.add(updatedAudio)

      return {
        ...state,
        audio: updatedAudio
      }
    })
}))

export default useAplayerStore
