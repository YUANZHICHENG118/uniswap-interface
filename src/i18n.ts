import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import XHR from 'i18next-xhr-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
const lang=localStorage.getItem('i18nextLng') || 'en'
i18next
  .use(XHR)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng:lang,
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
