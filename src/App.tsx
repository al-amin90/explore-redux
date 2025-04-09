import './App.css'
import { Button } from './components/ui/button'
import { decrement, increment } from './redux/features/counter/CounterSlice'
import { useAppDispatch, useAppSelector } from './redux/hook'

function App() {
  const dispatch = useAppDispatch()
  const {count} = useAppSelector((state) => state.counter )

  const decrementHandler = () => {
    dispatch(decrement())
  }

  return (
    <div>
      <h1>Counter with redux</h1>

      <Button onClick={() => dispatch(increment(5))}>Increment by 5</Button>
      <Button onClick={() => dispatch(increment(1))}>Increment</Button>
      <p>{count}</p>
      <Button onClick={decrementHandler}>Decrement</Button>
    </div>
  )
}

export default App
