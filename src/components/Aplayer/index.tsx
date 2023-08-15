import 'APlayer/dist/APlayer.min.css'
import { useEffect } from 'react'
import useAplayerStore from '@/stores/aplayer'
import './index.css'

const Aplayer = () => {
  const { ap, initializeAplayer } = useAplayerStore()

  useEffect(() => {
    initializeAplayer()

    return () => {
      ap?.destroy()
    }
  }, [])

  return (
    <div className="playMusic w-full lg:w-4/5 xl:w-5/6 fixed bottom-0 z-20 bg-background p-0 m-0"></div>
  )
}

export default Aplayer
