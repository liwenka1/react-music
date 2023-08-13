import 'APlayer/dist/APlayer.min.css'
import APlayer from 'APlayer'
import { useEffect, useRef } from 'react'
import useAplayerStore from '@/stores/aplayer'

const Aplayer = () => {
  const ap = useRef<APlayer | null>(null)
  const { audio } = useAplayerStore()

  useEffect(() => {
    // if (ap.current) {
    //   // 如果 APlayer 实例已存在，则更新 audio 数据
    //   ap.current.list.clear()
    //   ap.current.list.add(audio)
    //   return
    // }

    ap.current = new APlayer({
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
      audio: [...audio]
    })

    return () => {
      ap.current?.destroy()
    }
  }, [audio])

  return (
    <div className="playMusic w-full fixed bottom-0 z-20 bg-background p-0 m-0"></div>
  )
}

export default Aplayer
