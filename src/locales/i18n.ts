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
               rights: 'All rights reserved.',
               done: 'All tasks completed',
            },
         },
         ru: {
            translation: {
               todos: 'ЗАДАЧИ',
               edit: 'Правка',
               delete: 'Удалить',
               rights: 'Все права защищены.',
               done: 'Все делишки выполнены',
            },
         },
      },
   });
