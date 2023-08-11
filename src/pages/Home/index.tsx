import useCounterStore from '@/stores/counter'
import SimpleSlider from '@/components/SimpleSlider'

const Home = () => {
  const counter = useCounterStore((state) => state.counter)
  const increase = useCounterStore((state) => state.increase)

  return (
    <div>
      这里是Home
      <SimpleSlider />
      <br />
      <button onClick={() => increase(1)}> counter: {counter} </button>
    </div>
  )
}

export default Home
