import { Outlet, useLocation } from 'react-router-dom'
import Nav from '@/components/Nav'
import Sidebar from '@/components/Sidebar'
import Aplayer from '@/components/Aplayer'
import { useEffect } from 'react'
import { Toaster } from '@/components/ui/toaster'

const Layout: React.FC = () => {
  const location = useLocation()

  useEffect(() => {
    const element = document.querySelector('.main-container')
    element?.scrollTo(0, 0)
  }, [location])

  return (
    <div className="flex flex-row h-screen">
      <Sidebar />
      <div className="flex flex-col lg:ml-60 w-full">
        <Nav />
        <div className="main-container overflow-y-auto flex-1">
          <Outlet />
          <Toaster />
        </div>
        <Aplayer />
      </div>
    </div>
  )
}

export default Layout
