import { Outlet } from 'react-router-dom'
import Nav from '@/components/Nav'
import Sidebar from '@/components/Sidebar'
import Tags from '@/components/Tags'
import Aplayer from '@/components/Aplayer'

const Layout = () => {
  return (
    <>
      <Nav />
      <div className="flex flex-row mb-20">
        <Sidebar />
        <div className="flex flex-col lg:ml-60 w-full lg:w-4/5 xl:w-5/6">
          <div className="tags-container">
            <Tags />
          </div>
          <div className="main-container">
            <Outlet />
            <Aplayer />
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout
