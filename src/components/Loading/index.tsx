import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Loading: React.FC = () => {
  return (
    <>
      <Skeleton height={'30%'} count={3} />
      <Skeleton height={'30%'} count={3} />
      <Skeleton height={'30%'} count={3} />
      <Skeleton height={'30%'} count={3} />
    </>
  )
}

export default Loading
