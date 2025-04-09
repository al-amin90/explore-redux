import './App.css'
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

      <button onClick={() => dispatch(increment(5))}>Increment by 5</button>
      <button onClick={() => dispatch(increment(1))}>Increment</button>
      <p>{count}</p>
      <button onClick={decrementHandler}>Decrement</button>
    </div>
  )
}

export default App
