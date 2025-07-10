import { useState } from "react";
import languageContext from "./languageContext";

const ContextProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const translations = {
    en: { title: "Welcome", description: "This is a demo app" },
    ur: { title: "خوش آمدید", description: "یہ ایک ڈیمو ایپ ہے" },
    fr: { title: "Bienvenue", description: "Ceci est une application de démo" },
  };

  return (
  <languageContext.Provider value={{language, setLanguage, translations}}>
    <div className="max-w-screen min-h-screen bg-slate-800 p-6  ">
    {children}
    </div>
    </languageContext.Provider>
    );
};

export default ContextProvider;
