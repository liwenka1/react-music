import { create } from 'zustand'

interface CounterState {
  counter: number
  increase: (cnt: number) => void
}

const useCounterStore = create<CounterState>()((set) => ({
  counter: 0,
  increase: (cnt) => set((state) => ({ counter: state.counter + cnt }))
}))

export default useCounterStore
