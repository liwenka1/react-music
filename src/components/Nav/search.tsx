import { useState } from 'react'
import SvgIcon from '../SvgIcon'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

const Search: React.FC = () => {
  const [open, setOpen] = useState(false)
  console.log(open)
  const sidebarItems = [
    { title: '推荐', link: '/home' },
    { title: '排行', link: '/toplist' },
    { title: '分类歌单', link: '/playlist' },
    { title: '歌手', link: '/artist' },
    { title: '数字专辑', link: '/album' },
    { title: '关于', link: '/about' }
  ]

  return (
    <div className="hidden md:flex items-center space-x-2 w-1/2 relative">
      <div className="flex items-center flex-auto justify-between">
        <Input
          placeholder="Search"
          className="w-full h-auto rounded-full"
          onFocus={() => setOpen(true)}
          onBlur={() => setOpen(false)}
        />
        <SvgIcon
          className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 cursor-pointer"
          name="magnifying-glass"
        />
      </div>
      {open && (
        <div className="bg-background p-4 rounded-md absolute top-10 z-20 border">
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
              Discover
            </h2>
            <div className="space-y-1">
              {sidebarItems.map((item) => {
                return (
                  <Button
                    variant={
                      item.link == location.pathname ? 'default' : 'ghost'
                    }
                    className="w-full justify-start"
                    key={item.link}
                  >
                    {item.title}
                  </Button>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Search
