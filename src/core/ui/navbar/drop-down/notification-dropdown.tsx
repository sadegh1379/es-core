import { useState, FC } from 'react';
import { IAnnouncements, INotification } from '../types';

import moment from 'moment';

import styles from './notification-dropdown.module.css';
import { ArrowRightOutline, MessageOutline, NoNotificationOutline } from 'icons';
import { Button } from 'core/ui/button';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NotificationDropDown: FC<{
	isLogin: boolean;
	language: string;
	className?: string;
	isLinkExternal: boolean;
	announcements: IAnnouncements[] | null;
	notifications: INotification[] | null;
	onNotificationClickHandler: (data: INotification) => void;
}> = ({ isLogin, className, isLinkExternal, language, announcements, notifications, onNotificationClickHandler }) => {
	const { t } = useTranslation('navbar');

	const [activeTab, setActiveTab] = useState<'Announcements' | 'Notifications'>('Announcements');

	const addCallbackInLogin = () => {
		const currentLocation = window.location.pathname;
		return !currentLocation.toLocaleLowerCase().includes('login') ? `?callbackUrl=${window.location.pathname}` : '';
	};

	return (
		<div className={`${styles.drop_down_container} ${className ?? ''}`}>
			<div className={styles.tab_container}>
				<div
					className={`${styles.tab_item} ${activeTab === 'Announcements' ? styles.active_tab : ''}`}
					id={`navbar_announcements_tab`}
					onClick={() => {
						activeTab !== 'Announcements' && setActiveTab('Announcements');
					}}
				>
					{t('announcements')}
				</div>
				<div
					className={`${styles.tab_item} ${activeTab === 'Notifications' ? styles.active_tab : ''}`}
					onClick={() => {
						activeTab !== 'Notifications' && setActiveTab('Notifications');
					}}
					id={`navbar_Notifications_tab`}
				>
					{t('notifications')}
				</div>
			</div>
			<section className={styles.main_section}>
				{activeTab === 'Announcements' ? (
					<div className={styles.announcements_container}>
						{announcements &&
							announcements.map((item, index) =>
								isLinkExternal ? (
									<a
										key={'announce_item_' + index}
										className={styles.announcement_item}
										href={`https://coinlocally.com/${language}/announcement-article/${item.id}`}
										id={`navbar_announcement_${item.id}`}
									>
										<MessageOutline className={styles.message_icon} />
										<div className={styles.title}>{item.title}</div>
										<div className={styles.date}>{moment(item.createdAt).format('YYYY-MM-DD HH:mm:ss')}</div>
										<ArrowRightOutline className={styles.arrow_right} />
									</a>
								) : (
									<Link
										key={'announce_item_' + index}
										className={styles.announcement_item}
										to={`/${language}/announcement-article/${item.id}`}
										id={`navbar_announcement_${item.id}`}
									>
										<MessageOutline className={styles.message_icon} />
										<div className={styles.title}>{item.title}</div>
										<div className={styles.date}>{moment(item.createdAt).format('YYYY-MM-DD HH:mm:ss')}</div>
										<ArrowRightOutline className={styles.arrow_right} />
									</Link>
								),
							)}
					</div>
				) : !isLogin ? (
					<div className={styles.login_container}>
						<div className={styles.login_title}>{t('login-to-view')}</div>
						<Button
							variant='outline'
							size='medium'
							id='navbar_login_notification'
							{...(isLinkExternal
								? { href: `https://coinlocally.com/${language}/login${addCallbackInLogin()}` }
								: { to: `/${language}/login${addCallbackInLogin()}` })}
						>
							{t('login')}
						</Button>
					</div>
				) : notifications === null ? (
					<></>
				) : notifications.length === 0 ? (
					<div className={styles.no_notification}>
						<NoNotificationOutline />
						<div className={styles.no_notification_txt}>{t('no-new-notifications')}</div>
					</div>
				) : (
					<div className={styles.notification_container}>
						{notifications.map((item, index) => (
							<div
								className={`${styles.notification_item} ${!item.viewed ? styles.new_message : ''}`}
								key={'notification_item_' + index}
								onClick={() => onNotificationClickHandler(item)}
								id={`navbar_notification_${item.id}`}
							>
								<MessageOutline className={`${styles.message_icon}`} />
								<div className={styles.title}>{item.title}</div>
								<div className={styles.description}>{item.body}</div>
								<div className={styles.date}>{moment(item.createdAt).format('YYYY-MM-DD HH:mm:ss')}</div>
								<ArrowRightOutline className={styles.arrow_right} />
							</div>
						))}
					</div>
				)}
			</section>
			{activeTab === 'Announcements' && (
				<div className={styles.view_more_container}>
					{isLinkExternal ? (
						<a href={`https://coinlocally.com/${language}/announcement/category`} id={`navbar_announcement_view_more`}>
							{t('view-more')}
							<ArrowRightOutline />
						</a>
					) : (
						<Link to={`/${language}/announcement/category`} id={`navbar_announcement_view_more`}>
							{t('view-more')}
							<ArrowRightOutline />
						</Link>
					)}
				</div>
			)}
			{activeTab === 'Notifications' && isLogin && notifications && notifications.length > 0 && (
				<div className={styles.view_more_container}>
					{isLinkExternal ? (
						<a href={`https://coinlocally.com/${language}/notification`} id={`navbar_notification_view_more`}>
							{t('view-more')}
							<ArrowRightOutline />
						</a>
					) : (
						<Link to={`/${language}/notification`} id={`navbar_notification_view_more`}>
							{t('view-more')}
							<ArrowRightOutline />
						</Link>
					)}
				</div>
			)}
		</div>
	);
};

export default NotificationDropDown;
