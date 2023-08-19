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
    <div className="playMusic w-auto h-auto bg-background p-0 m-0 ml-6 rounded-md"></div>
  )
}

export default Aplayer
