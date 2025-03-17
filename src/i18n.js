import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import es from "./locales/es.json";

import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).use(initReactI18next).init({
  // });
  // i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    es: { translation: es },
  },
  // lng: "en", // Idioma predeterminado
  lng: localStorage.getItem("lang") || "en",
  fallbackLng: "en", // Idioma de respaldo
  interpolation: {
    escapeValue: false, // Permite insertar HTML si es necesario
  },
});

export default i18n;