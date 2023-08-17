import { Suspense } from 'react'

const lazyLoad = (
  Component: React.LazyExoticComponent<() => JSX.Element | undefined>
) => {
  return (
    <Suspense>
      <Component />
    </Suspense>
  )
}

export default lazyLoad
