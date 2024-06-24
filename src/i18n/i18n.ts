// i18n.ts
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

// Translations
import translationEN from "./locales/en_US/translations.json";
import translationBR from "./locales/pt_BR/translations.json";

const resources = {
  en: { translation: translationEN },
  "pt-BR": { translation: translationBR },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // default language
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
