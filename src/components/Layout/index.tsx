import { Outlet } from 'react-router-dom'
import Nav from '@/components/Nav'
import Sidebar from '@/components/Sidebar'
import Aplayer from '@/components/Aplayer'

const Layout = () => {
  return (
    <>
      <div className="flex flex-row h-screen">
        <Sidebar />
        <div className="flex flex-col lg:ml-60 w-auto">
          <Nav />
          <div className="overflow-y-auto flex-1">
            <div className="main-container">
              <Outlet />
            </div>
          </div>
          <Aplayer />
        </div>
      </div>
    </>
  )
}

export default Layout
