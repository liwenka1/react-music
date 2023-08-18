import { useNavigate, useLocation } from 'react-router-dom'
import { Button } from '../ui/button'
import { ScrollArea } from '../ui/scroll-area'
import { Switch } from '../ui/switch'
import useAplayerStore from '@/stores/aplayer'

const Sidebar = () => {
  const sidebarItems = [
    { title: '推荐', link: '/home' },
    { title: '排行榜', link: '/toplist' },
    { title: '歌单', link: '/playlist' },
    { title: '歌手', link: '/artist' },
    { title: '新碟上架', link: '/album' },
    { title: '关于', link: '/about' }
  ]
  const navigate = useNavigate()
  const location = useLocation()
  const { ap } = useAplayerStore()
  const playlists = ap?.list.audios
  const switchMode = (mode: string | undefined) => {
    if (mode == 'normal') {
      ap?.setMode('mini')
    } else if (mode == 'mini') {
      ap?.setMode('normal')
    }
  }

  return (
    <>
      <div className="sidebar">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Discover
          </h2>
          <div className="space-y-1">
            {sidebarItems.map((item) => {
              return (
                <Button
                  variant={
                    item.link == location.pathname ? 'secondary' : 'ghost'
                  }
                  className="w-full justify-start"
                  key={item.link}
                  onClick={() => navigate(item.link)}
                >
                  {item.title}
                </Button>
              )
            })}
          </div>
        </div>
        <div className="py-2">
          <h2 className="relative px-7 text-lg font-semibold tracking-tight">
            Playlists
          </h2>
          <ScrollArea className="h-80 px-1">
            <div className="space-y-1 p-2">
              {playlists?.map((playlist, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="w-full justify-start font-normal text-left"
                  onClick={() => ap?.list.switch(index)}
                >
                  {playlist.name}
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Switch
          </h2>
          <div className="space-y-1 px-4 flex items-center">
            <span>nomal</span>
            <Switch className="mx-2" onClick={() => switchMode(ap?.mode)} />
            <span>mini</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
