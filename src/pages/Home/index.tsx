import { Link } from 'react-router-dom'
import useCounterStore from '@/stores/counter'
import { Switch } from '@/components/ui/switch'

const Home = () => {
  const counter = useCounterStore((state) => state.counter)
  const increase = useCounterStore((state) => state.increase)

  return (
    <div>
      这里是Home
      <span>123</span>
      <Link to="/about">去about</Link>
      <Switch />
      <button onClick={() => increase(1)}> counter: {counter} </button>
    </div>
  )
}

export default Home
