import { useNavigate, useLocation } from 'react-router-dom'
import { Button } from '../ui/button'

const Sidebar: React.FC = () => {
  const sidebarItems = [
    { title: '推荐', link: '/home' },
    { title: '排行', link: '/toplist' },
    { title: '分类歌单', link: '/playlist' },
    { title: '歌手', link: '/artist' },
    { title: '数字专辑', link: '/album' },
    { title: '关于', link: '/about' }
  ]
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <div className="sidebar">
      <div className="px-3 py-2">
        <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
          Discover
        </h2>
        <div className="space-y-1">
          {sidebarItems.map((item) => {
            return (
              <Button
                variant={item.link == location.pathname ? 'default' : 'ghost'}
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
  )
}

export default Sidebar
