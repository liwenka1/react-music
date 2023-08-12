import 'APlayer/dist/APlayer.min.css'
import APlayer from 'APlayer'
import { useEffect } from 'react'

interface MusicMsg {
  id: number
  url: string
  name: string
  artist: string
  cover: string
}

const Aplayer = () => {
  useEffect(() => {
    const createDom = (musicMsg: MusicMsg) => {
      const ap = new APlayer({
        container: document.querySelector('.playMusic'),
        fixed: true,
        audio: [
          {
            ...musicMsg,
            fixed: true
          }
        ]
      })
      console.log(ap)
    }

    const musicMsg = {
      id: 0,
      url: 'http://m802.music.126.net/20230812233708/0b267a585b0b57880e0410c004c9bf30/jd-musicrep-ts/b3a8/a678/decc/bd9104db09f69153a5da31e88e919344.mp3',
      name: '你给我听好',
      artist: '陈奕迅',
      cover: ''
    }

    createDom(musicMsg)
  }, [])

  return <div className="playMusic"></div>
}

export default Aplayer
