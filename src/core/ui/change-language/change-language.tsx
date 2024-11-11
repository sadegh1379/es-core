import { ClyCoreConfig } from 'core/config';
import { useCloseModal } from 'helper/hooks';
import { FC } from 'react';
import { Modal } from '../modal';
import { IChangeLanguagePropTypes } from './types';
import styles from './change-language.module.css';

const ChangeLanguageModal: FC<IChangeLanguagePropTypes> = ({ status, className, setStatus, onLanguageClick }) => {
	const [_status, onClose] = useCloseModal({ status, setStatus });
	const language = ClyCoreConfig.LANGUAGE;

	const languages: [string, TLanguage][] = [
		['English', 'en'],
		['العربية', 'ar'],
		['русский', 'ru'],
		['فارسی', 'fa'],
		['deutsch', 'de'],
		['español', 'es'],
	];

	const onLanguageClickHandler = (lng: TLanguage) => {
		if (lng !== language) {
			onLanguageClick(lng);
			onClose();
		}
	};
	return (
		<div className={`${styles.container} ${className ?? ''}`}>
			<Modal maxWidth={486} title={'Choose your language'} onClose={onClose} status={_status}>
				<div className={styles.body}>
					{languages.map((item, index) => (
						<div
							key={`language_item_${index}`}
							style={{ fontFamily: item[1] === 'ar' || item[1] === 'fa' ? 'system-ui' : 'unset' }}
							className={`${styles.language} ${item[1] === language ? styles.active : ''}`}
							onClick={() => {
								onLanguageClickHandler(item[1]);
							}}
						>
							{item[0]}
						</div>
					))}
				</div>
			</Modal>
			;
		</div>
	);
};

export default ChangeLanguageModal;
