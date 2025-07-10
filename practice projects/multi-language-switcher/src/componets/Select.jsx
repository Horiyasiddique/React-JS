import { useContext } from "react";
import languageContext from "../context/languageContext";

const Select = () => {
    const {setLanguage} = useContext(languageContext)

  return (
    <div className="mb-8">
      <label htmlFor="lang" className="block text-sm font-medium text-pink-300 mb-2">
        Select Language
      </label>
      <select 
        name="lang" 
        id="lang" 
        onChange={(e) => setLanguage(e.target.value)}
        className="block w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-pink-100 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
      >
        <option value="en">English</option>
        <option value="ur">Urdu</option>
        <option value="fr">French</option>
      </select>
    </div>
  );
};

export default Select;
