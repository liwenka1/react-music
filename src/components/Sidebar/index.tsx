import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
  const sidebarItems = [
    { title: '推荐', link: '/home' },
    { title: '排行榜', link: '/toplist' },
    { title: '歌单', link: '/playlist' },
    { title: '歌手', link: '/artist' },
    { title: '新碟上架', link: '/album' },
    { title: '关于', link: '/about' }
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const navigate = useNavigate()

  return (
    <div className="sidebar">
      <div className="flex flex-col w-full mb-2">
        {sidebarItems.map((item, index) => {
          return (
            <div
              className={`flex items-center space-x-5 px-7 py-2.5 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-500 ${
                activeIndex == index ? 'bg-gray-200 dark:bg-gray-500' : ''
              }`}
              key={index}
              onClick={() => {
                setActiveIndex(index)
                navigate(item.link)
              }}
            >
              <h2
                className={`text-sm ${
                  activeIndex == index ? 'font-semibold' : ''
                }`}
              >
                {item.title}
              </h2>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Sidebar
