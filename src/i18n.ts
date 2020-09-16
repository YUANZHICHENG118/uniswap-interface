import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import XHR from 'i18next-xhr-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
i18next
  .use(XHR)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng:'zh-CN' ,
    backend: {
      loadPath: `./locales/{{lng}}.json`
    },
    react: {
      useSuspense: true
    },
    fallbackLng: 'en',
    preload: ['zh-CN','en','ko'],
    keySeparator: false,
    interpolation: { escapeValue: false },
  })

export default i18next
