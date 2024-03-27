import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next';


const LangSelector = ({ setMenuOn }) => {

const {t, i18n} = useTranslation()

const {english, arabic} = t("navbar")


  const handleLanguage = (lng) => {
    i18n.changeLanguage(lng).then(() => {
      setMenuOn(false)
    })
  }


    return (
        <div className="flex items-center justify-end mr-2 md:mr-8 italic">
            <p className={`${i18n.language === "en" && 'underline underline-offset-4'} cursor-pointer hover:opacity-70 duration-300`} 
               onClick={()=>handleLanguage('en')}>
                {english}
            </p>
            <span className="mx-1">/</span>
            <p className={`${i18n.language === "ar" && 'underline underline-offset-4'} cursor-pointer hover:opacity-70 duration-300`} 
               onClick={()=>handleLanguage('ar')}>
                {arabic}
            </p>
        </div>
    )
}

export default LangSelector