/* other imports */
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';
import { ReactNode } from 'react';

const TranslationWrapper = (props: { children: ReactNode }) => {
	return <I18nextProvider i18n={i18n}>{props.children}</I18nextProvider>;
};

export default TranslationWrapper;
