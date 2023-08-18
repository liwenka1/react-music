import { Suspense } from 'react'

const lazyLoad = (Component: React.LazyExoticComponent<React.FC>) => {
  return (
    <Suspense>
      <Component />
    </Suspense>
  )
}

export default lazyLoad
