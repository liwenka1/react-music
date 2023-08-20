import { Outlet } from 'react-router-dom'
import Nav from '@/components/Nav'
import Sidebar from '@/components/Sidebar'
import Aplayer from '@/components/Aplayer'

const Layout: React.FC = () => {
  return (
    <>
      <div className="flex flex-row h-screen">
        <Sidebar />
        <div className="flex flex-col lg:ml-60 w-full">
          <Nav />
          <div className="overflow-y-auto flex-1 mb-8">
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
