import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
export const languageInCookie = document.cookie.replace(/(?:(?:^|.*;\s*)userLang\s*\=\s*([^;]*).*$)|^.*$/, "$1");

i18n
  .use(Backend)
  .use (initReactI18next)
  .init({
    lng: `${languageInCookie}`,
    fallbackLng: "en",
    debug: true,
    // Распознавание и кэширование языковых кук
    interpolation: {
      escapeValue: false
    },
  })

export default i18n;