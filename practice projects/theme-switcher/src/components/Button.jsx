import { useContext } from 'react'
import themeContext from '../context/themeContext'

const Button = () => {
  const { theme, toggleTheme, currentTheme } = useContext(themeContext)
  
  return (
    <button 
      className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${currentTheme.button} shadow-md hover:shadow-lg active:scale-95`}
      onClick={toggleTheme}
    >
      Toggle to {theme === "dark" ? "light 🌞" : "dark 🌙"}
    </button>
  )
}

export default Button