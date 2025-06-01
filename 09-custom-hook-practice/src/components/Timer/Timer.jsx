import useTimer from "../../hooks/useTimer"

const Timer = () => {
    const {count, increment, decrement, reset} = useTimer(5)
  return (
    <>
    <h1>Count : {count}</h1>
    <button onClick={increment}>Increment +</button>
    <button onClick={decrement}>Decrement -</button>
    <button onClick={reset}>Reset</button>
    </>
  )
}

export default Timer
