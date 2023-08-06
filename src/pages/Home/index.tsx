import { Link } from 'react-router-dom'
import useCounterStore from '@/stores/counter'

const Home = () => {
  const counter = useCounterStore((state) => state.counter)
  const increase = useCounterStore((state) => state.increase)

  return (
    <div>
      这里是Home
      <Link to="/about">去about</Link>
      <button onClick={() => increase(1)}> counter: {counter} </button>
    </div>
  )
}

export default Home
