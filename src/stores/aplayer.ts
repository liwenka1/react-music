import { create } from 'zustand'
import { audio } from '@/components/Aplayer/type,'

interface AplayerState {
  audio: audio[]
  setAudio: (audio: audio[] | audio) => void
}

const useAplayerStore = create<AplayerState>()((set) => ({
  audio: [],
  setAudio: (newAudio) =>
    set(() => ({
      audio: Array.isArray(newAudio) ? newAudio : [newAudio]
    }))
}))

export default useAplayerStore
