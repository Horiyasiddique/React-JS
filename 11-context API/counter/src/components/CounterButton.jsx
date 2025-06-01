import { useContext } from 'react'
import counterContext from '../context/counterContext'

const CounterButton = () => {
    const {increment} = useContext(counterContext)
    const {decrement} = useContext(counterContext)
  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default CounterButton;