import { useEffect } from 'react'
import useAplayerStore from '@/stores/aplayer'
import './index.css'

const Aplayer: React.FC = () => {
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
