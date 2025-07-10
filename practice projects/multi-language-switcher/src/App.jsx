import ContextProvider from './context/ContextProvider'
import Content from './componets/Content'
import Select from './componets/Select'

function App() {

  return (
    <ContextProvider>

      <h1 className='text-7xl text-center font-bold text-pink-400'>Multi Language Translation App</h1>
      <Select />
      <Content />
    </ContextProvider>
  )
}

export default App
