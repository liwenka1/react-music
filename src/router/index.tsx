import { lazy } from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'
import lazyLoad from './lazyLoad'
import Layout from '@/components/Layout'
import ErrorBoundary from '@/components/ErrorBoundary'

const Home = lazy(() => import('@/pages/Home'))
const Toplist = lazy(() => import('@/pages/Toplist'))
const Playlist = lazy(() => import('@/pages/Playlist'))
const Artist = lazy(() => import('@/pages/Artist'))
const Album = lazy(() => import('@/pages/Album'))
const About = lazy(() => import('@/pages/About'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorBoundary />,
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
        path: 'toplist',
        element: lazyLoad(Toplist)
      },
      {
        path: 'playlist',
        element: lazyLoad(Playlist)
      },
      {
        path: 'artist',
        element: lazyLoad(Artist)
      },
      {
        path: 'album',
        element: lazyLoad(Album)
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
