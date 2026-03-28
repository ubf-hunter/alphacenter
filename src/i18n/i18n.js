import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import frCommon from './locales/fr/common.json';
import enCommon from './locales/en/common.json';
import frNavigation from './locales/fr/navigation.json';
import enNavigation from './locales/en/navigation.json';
import frHome from './locales/fr/home.json';
import enHome from './locales/en/home.json';
import frAbout from './locales/fr/about.json';
import enAbout from './locales/en/about.json';
import frProgrammes from './locales/fr/programmes.json';
import enProgrammes from './locales/en/programmes.json';
import frContact from './locales/fr/contact.json';
import enContact from './locales/en/contact.json';
import frOrientation from './locales/fr/orientation.json';
import enOrientation from './locales/en/orientation.json';
import frApplication from './locales/fr/application.json';
import enApplication from './locales/en/application.json';
import frSeo from './locales/fr/seo.json';
import enSeo from './locales/en/seo.json';
import frValidation from './locales/fr/validation.json';
import enValidation from './locales/en/validation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      fr: {
        common: frCommon,
        navigation: frNavigation,
        home: frHome,
        about: frAbout,
        programmes: frProgrammes,
        contact: frContact,
        orientation: frOrientation,
        application: frApplication,
        seo: frSeo,
        validation: frValidation,
      },
      en: {
        common: enCommon,
        navigation: enNavigation,
        home: enHome,
        about: enAbout,
        programmes: enProgrammes,
        contact: enContact,
        orientation: enOrientation,
        application: enApplication,
        seo: enSeo,
        validation: enValidation,
      },
    },
    fallbackLng: 'fr',
    supportedLngs: ['fr', 'en'],
    defaultNS: 'common',
    ns: ['common', 'navigation', 'home', 'about', 'programmes', 'contact', 'orientation', 'application', 'seo', 'validation'],
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
    initImmediate: false,
    react: {
      useSuspense: false,
    },
  });

export default i18n;
