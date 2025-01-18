import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
   .use(initReactI18next)
   .use(LanguageDetector)
   .init({
      debug: true,
      fallbackLng: 'en',
      resources: {
         en: {
            translation: {
               todos: 'TODOS',
               edit: 'Edit',
               delete: 'Delete',
            },
         },
         ru: {
            translation: {
               todos: 'ЗАДАЧИ',
               edit: 'Редактировать',
               delete: 'Удалить',
            },
         },
      },
   });
