import { MobileNavbar } from 'core/ui/navbar/navbar.config';
import { MobileSidebarTypes } from 'core/ui/navbar/types';
import { Close, Coinlocally, DownloadOutline, GiftOutline, MoonOutline, NotificationOutline, SunOutline, ThemeBold } from 'icons';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../button';
import { MobileDropDown } from '../drop-down/mobile-drop-down';
import styles from '../navbar.module.css';
import { useTranslation } from 'react-i18next';

const MobileSideBar: FC<MobileSidebarTypes> = ({
	isLogin,
	isLinkExternal,
	language,
	theme,
	changeTheme,
	buyCryptoCurrencies,
	openMenu,
	setOpenMenu,
}) => {
	const config = MobileNavbar();

	const { t } = useTranslation('navbar');
	return (
		<>
			<div
				className={`${styles.sidebar_layout} ${openMenu ? styles.sidebar_active_layout : ''}`}
				onClick={() => setOpenMenu((prev: boolean) => !prev)}
			></div>
			<div className={`${styles.sidebar} ${openMenu ? styles.sidebar_open : ''}`}>
				<div className={`${styles.sidebar_container} ${styles.container_open}`}>
					<div className={styles.logo_container}>
						<Coinlocally className={styles.sidebar_logo} id='mobile_navbar_logo' />
						<Close
							className={styles.sidebar_close}
							onClick={() => setOpenMenu((prev: boolean) => !prev)}
							id='mobile_navbar_close'
						/>
					</div>
					{isLogin ? (
						<div className={styles.user_info}></div>
					) : (
						<div className={styles.sidebar_login}>
							<Button
								variant='outline'
								size='medium'
								href={`https://coinlocally.com/en/login?callbackUrl=${window.location.pathname}`}
								id='mobile_navbar_login'
							>
								{t('login')}
							</Button>
							<Button variant='primary' size='medium' href='https://coinlocally.com/en/register' id='mobile_navbar_register'>
								<GiftOutline className={styles.gift} /> {t('register')}
							</Button>
						</div>
					)}
					<ul>
						{config.left.map((item, index) =>
							item.subMenu ? (
								<MobileDropDown
									key={`MobileDropDown_${index}`}
									index={index}
									item={item}
									language={language}
									setOpenMenu={setOpenMenu}
									buyCryptoCurrencies={item.id === 'mobile_navbar_buy_crypto' ? buyCryptoCurrencies : undefined}
									isLinkExternal={isLinkExternal}
									className={styles.slider_drop_down_container}
								/>
							) : !item.a && !isLinkExternal ? (
								<Link
									key={'side_top_' + index}
									className={styles.sidebar_item}
									to={item.link ? `/${language}${item.link}` : ''}
									id={item.id}
								>
									{item.icon}
									<span>{item.title}</span>
									{item.badge?.type === 'NEW' && <div className={styles.new_badge}>{t('new')}</div>}
									{item.badge?.type === 'HOT' && <div className={styles.hot_badge}>{t('hot')}</div>}
								</Link>
							) : (
								<a
									key={'side_top_' + index}
									className={styles.sidebar_item}
									href={item.a ? item.a : 'https://coinlocally.com/' + language + item.link}
									id={item.id}
								>
									{item.icon}
									<span>{item.title}</span>
									{item.badge?.type === 'NEW' && <div className={styles.new_badge}>{t('new')}</div>}
									{item.badge?.type === 'HOT' && <div className={styles.hot_badge}>{t('hot')}</div>}
								</a>
							),
						)}
						{!isLinkExternal ? (
							<>
								<Link
									to={`/${language}/notification`}
									className={`${styles.sidebar_item} ${styles.top_border}`}
									id='mobile_navbar_notification'
								>
									<NotificationOutline />
									<span>{t('notification')}</span>
								</Link>
								<Link to={`/${language}/download`} className={styles.sidebar_item} id='mobile_navbar_app'>
									<DownloadOutline />
									<span>{t('app')}</span>
								</Link>
							</>
						) : (
							<>
								<a
									href={`https://coinlocally.com/${language}/notification`}
									className={`${styles.sidebar_item} ${styles.top_border}`}
									id='mobile_navbar_notification'
								>
									<NotificationOutline />
									<span>{t('notification')}</span>
								</a>
								<a
									href={`https://coinlocally.com/${language}/download`}
									className={styles.sidebar_item}
									id='mobile_navbar_app'
								>
									<DownloadOutline />
									<span>{t('app')}</span>
								</a>
							</>
						)}
						<div className={styles.darkMode_container}>
							<div className={styles.left_container}>
								<ThemeBold className={styles.darkmode_icon} />
								<span>{t('theme')}</span>
							</div>
							{theme === 'light' ? (
								<MoonOutline
									className={styles.right_icons}
									onClick={() => {
										changeTheme('dark');
									}}
									id='mobile_navbar_theme'
								/>
							) : (
								<SunOutline
									className={styles.right_icons}
									onClick={() => {
										changeTheme('light');
									}}
									id='mobile_navbar_theme'
								/>
							)}
						</div>
					</ul>
				</div>
			</div>
		</>
	);
};

export default MobileSideBar;
