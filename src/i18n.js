import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import english from "./components/languages/english.json";
import arabic from "./components/languages/arabic.json";



i18n.use(LanguageDetector).use(initReactI18next).init({
    debug: true,
    fallbackLng : "en",
    interpolation: { escapeValue: false },
    returnObjects: true,
    resources : {
        en: {
            translation: english
        },
        ar: {
            translation: arabic
        }
    }
    
  });

  export default i18n;