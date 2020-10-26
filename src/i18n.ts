import i18n from 'i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

export const getLanguageKey = (i18nLanguage) => {
  return i18nLanguage.split('-')[0];
};

const backendOptions = {
  loadPath: (languages, _namespaces) => {
    const language = getLanguageKey(languages[0]);
    return `/locales/${language}.json`;
  },
};

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next) // bind react-i18next to the instance
  .init({
    fallbackLng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react!!
    },
    backend: backendOptions,

    // react: {
    //   bindI18n: 'languageChanged',
    //   bindI18nStore: '',
    //   transEmptyNodeValue: '',
    //   transSupportBasicHtmlNodes: true,
    //   transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
    //   useSuspense: true,
    // },
  });

export default i18n;
