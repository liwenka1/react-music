import { lazy } from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'
import lazyLoad from './lazyLoad'

const Home = lazy(() => import('@/pages/Home'))
const About = lazy(() => import('@/pages/About'))

const routes: RouteObject[] = [
  {
    path: '/',
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />
      },
      {
        path: 'home',
        element: lazyLoad(Home)
      },
      {
        path: 'about',
        element: lazyLoad(About)
      }
    ]
  }
]

export default createBrowserRouter(routes, {
  basename: import.meta.env.VITE_BASE_URL
})
