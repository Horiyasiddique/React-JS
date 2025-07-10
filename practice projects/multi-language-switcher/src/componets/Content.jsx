import { useContext } from "react"
import languageContext from "../context/languageContext"

const Content = () => {
    const {translations, language} = useContext(languageContext)
  return (
    <div className="space-y-4">
        <h1 className="text-5xl font-bold text-pink-400 text-center">{translations[language].title}</h1>
      <p className="text-gray-300 leading-relaxed text-center text-2xl">{translations[language].description}</p>
    </div>
  )
}

export default Content
