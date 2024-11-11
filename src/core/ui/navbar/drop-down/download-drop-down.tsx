import { ArrowRightOutline, QrCodeDownload } from 'icons';
import styles from './download-drop-down.module.css';
import { Link } from 'react-router-dom';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

export const DownloadDropDown: FC<{
	className: string;
	language: string;
	isLinkExternal: boolean;
}> = ({ className, language, isLinkExternal }) => {
	const { t } = useTranslation('navbar');
	return (
		<div className={`${className ?? ''} ${styles.download_dropDown_container}`}>
			<p className={styles.scan_txt}>{t('scan-qr-code-to-download-app')}</p>
			<QrCodeDownload className={styles.qr_code} />

			{isLinkExternal ? (
				<a href={`https://coinlocally.com/${language}/download`} className={styles.view_more}>
					{t('view-more')} <ArrowRightOutline />
				</a>
			) : (
				<Link to={`/${language}/download`} className={styles.view_more}>
					{t('view-more')} <ArrowRightOutline />
				</Link>
			)}
		</div>
	);
};
