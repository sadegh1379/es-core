import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enJSON from './locales/en';
import arJSON from './locales/ar';
import faJSON from './locales/fa';
import ruJSON from './locales/ru';
import deJSON from './locales/de';
import esJSON from './locales/es';

i18n.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		fallbackLng: 'en',

		interpolation: {
			escapeValue: false, // not needed for react as it escapes by default
		},
		supportedLngs: ['en', 'fa', 'ru', 'ar', 'de', 'es'],
		resources: {
			en: {
				...enJSON,
			},
			fa: {
				...faJSON,
			},
			ru: {
				...ruJSON,
			},
			ar: {
				...arJSON,
			},
			de: {
				...deJSON,
			},
			es: {
				...esJSON,
			},
		},
	});

export default i18n;
