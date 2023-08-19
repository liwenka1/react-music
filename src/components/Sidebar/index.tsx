import { useNavigate, useLocation } from 'react-router-dom'
import { Button } from '../ui/button'

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
      </div>
    </>
  )
}

export default Sidebar
