import { Button } from 'core/ui/button';
import { Modal } from 'core/ui/modal';
import styles from './notification-modal.module.css';
import { FC, useState } from 'react';
import { INotification } from '../types';
import { CloseOutline } from 'icons';
import moment from 'moment';
import { useTranslation } from 'react-i18next';

const NotificationModal: FC<{ status: boolean; onClose: () => void; detail: INotification; language: string; isLinkExternal: boolean }> = ({
	status,
	onClose,
	detail,
	isLinkExternal,
	language,
}) => {
	const [innerStatus, setInnerStatus] = useState<boolean>(status);
	const onCloseHandler = () => {
		setInnerStatus(false);
		setTimeout(() => {
			onClose();
		}, 250);
	};
	const { t } = useTranslation('navbar');
	return (
		<Modal maxWidth={360} status={innerStatus} onClose={onCloseHandler}>
			<div className={styles.notification_modal_container}>
				<div className={styles.header}>
					<div className={styles.header_title}>{t('notification-detail')}</div>
					<CloseOutline onClick={onCloseHandler} />
				</div>
				<section className={styles.body}>
					<div className={`${styles.notification_title}`}>{detail.title}</div>
					<div className={`${styles.date}`}>{moment(detail.createdAt).format('YYYY-MM-DD HH:mm:ss')}</div>
					<div className={`${styles.description}`}>{detail.body}</div>
				</section>
				<div className={styles.actions}>
					<Button variant='outline' size='medium' onClick={onCloseHandler}>
						{t('close')}
					</Button>
					<Button
						variant='primary'
						size='medium'
						{...(isLinkExternal
							? { href: `https://coinlocally.com/${language}/notification` }
							: { to: `/${language}/notification` })}
					>
						{t('view-more')}
					</Button>
				</div>
			</div>
		</Modal>
	);
};

export default NotificationModal;
