import ar from './dictionaries/ar.json';
import en from './dictionaries/en.json';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const getCurrentLang = () => {
  return 'en';
};

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    lng: getCurrentLang(),
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: en,
      },
      ar: {
        translation: ar,
      },
    },
  });

export default i18n;
