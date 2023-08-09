import { RouterProvider } from 'react-router-dom'
import router from './router'
import Nav from '@/components/Nav'
import Sidebar from '@/components/Sidebar'
import Tags from '@/components/Tags'
import { ThemeProvider } from '@/components/theme-provider'

const App = () => {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Nav />
        <div className="flex flex-row">
          <Sidebar />
          <div className="flex flex-col lg:ml-60 w-full lg:w-4/5 xl:w-5/6">
            <div className="tags-container">
              <Tags />
            </div>
            <div className="videos-container">
              <RouterProvider router={router} />
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
