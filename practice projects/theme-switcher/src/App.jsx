import Card from './components/Card'
import ThemeContextProvider from './context/ThemeContextProvider'

function App() {
  return (
    <ThemeContextProvider>
      <Card />
    </ThemeContextProvider>
  )
}

export default App
