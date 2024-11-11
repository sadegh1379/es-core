import 'i18next';
import locales from 'locales/en';

declare module 'i18next' {
	interface CustomTypeOptions {
		resources: typeof locales;
	}
}
