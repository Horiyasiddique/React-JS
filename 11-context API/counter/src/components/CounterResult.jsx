import { useContext } from 'react'
import counterContext from '../context/counterContext'

const CounterResult = () => {
    const {count} = useContext(counterContext)
  return (
    <div className='mb-5 text-3xl text-white font-bold bg-[#1A1A1A] rounded p-2'>
      Count : {count}
    </div>
  )
}

export default CounterResult;