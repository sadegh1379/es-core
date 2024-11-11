import { FC, useEffect, useState } from 'react';
import { INotification, NavbarPropTypes } from './types';
import styles from './navbar.module.css';
import {
	ArrowDownBold,
	CategoryOutline,
	Coinlocally,
	DownloadOutline,
	GlobalOutline,
	MenuOutline,
	MoonOutline,
	NotificationOutline,
	SettingOutline,
	SunOutline,
	UserOutline,
} from 'icons';
import { NavbarConfig } from './navbar.config';
import SimpleDropDown from './drop-down/simple-drop-down';
import { Button } from '../button';
import { Link } from 'react-router-dom';
import AssetDropDown from './drop-down/asset-drop-down';
import ProfileDropDown from './drop-down/profile-drop-down';
import { NestedDropDown } from './drop-down/nested-drop-down';
import NotificationDropDown from './drop-down/notification-dropdown';
import { DownloadDropDown } from './drop-down/download-drop-down';
import { NotificationModal } from './modal';
import MobileSideBar from './sidebar/mobile';
import ProfileSideBar from './sidebar/profile';
import TranslationWrapper from 'helper/utils/translate-wrapper';
import { ClyCoreConfig } from 'core/config';
import { useTranslation } from 'react-i18next';
import { ChangeLanguageModal } from '../change-language';

const Navbar: FC<NavbarPropTypes> = ({
	type,
	isLogin,
	isLinkExternal,
	language,
	theme,
	buyCryptoCurrencies,
	announcements,
	notifications,
	profile,
	referralType,
	affiliateSupport,
	onSettingClickHandler,
	changeTheme,
	onLogOutClickHandler,
	onLanguageClickHandler,
	onNotificationSeenHandler,
}) => {
	const { t, i18n } = useTranslation('navbar');
	const changeLanguage = i18n.changeLanguage;

	const [selectedNotification, setSelectedNotification] = useState<INotification | null>(null);
	const [modalStatus, setModalStatus] = useState<boolean>(false);
	const [lngModalStatus, setLngModalStatus] = useState<boolean>(false);
	const [openMenu, setOpenMenu] = useState<boolean>(false);
	const [profileSidebarStatus, setProfileSidebarStatus] = useState<boolean>(false);

	const COINLOCALLY_BASE_URL = 'https://coinlocally.com/';

	const addCallbackInLogin = () => {
		const currentLocation = window.location.pathname;
		return !currentLocation.toLocaleLowerCase().includes('login') ? `?callbackUrl=${window.location.pathname}` : '';
	};

	const onNotificationClickHandler = (data: INotification) => {
		setSelectedNotification(data);
		setModalStatus(true);
		if (!data.viewed) {
			onNotificationSeenHandler(data.id);
			if (notifications) {
				const seenIndex = notifications.findIndex(item => item.id === data.id);
				if (seenIndex !== -1) notifications[seenIndex].viewed = true;
			}
		}
	};

	useEffect(() => {
		changeLanguage(ClyCoreConfig.LANGUAGE);
	}, [ClyCoreConfig.LANGUAGE]);

	const config = NavbarConfig();

	return (
		<TranslationWrapper>
			<nav className={`${styles.navbar} core_navbar`}>
				<div className={styles.navbar_left}>
					{isLinkExternal ? (
						<a href={`${COINLOCALLY_BASE_URL}${language}`} id='navbar_logo'>
							<Coinlocally className={styles.coinlocally} />
						</a>
					) : (
						<Link to={`/${language}`} id='navbar_logo'>
							<Coinlocally className={styles.coinlocally} />
						</Link>
					)}
					{type === 'FULL' &&
						config.left.map((item, index) =>
							item.title === 'grid' ? (
								<div key={'nav_left_' + index} className={styles.grid_item} id={item.id}>
									<CategoryOutline className={styles.grid_icon} />
									{item.subMenu && (
										<>
											<ArrowDownBold className={styles.arrow_down} />
											<SimpleDropDown
												menu={item.subMenu}
												key={'drop_down_' + index}
												className={styles.drop_down_container}
												isLinkExternal={isLinkExternal}
												language={language}
											/>
										</>
									)}
								</div>
							) : item.subMenu ? (
								<div key={'nav_left_' + index} className={styles.nav_left_item} id={item.id}>
									{item.badge?.type === 'CUSTOM' && item.badge.preIcon && item.badge.preIcon}
									<span>{item.title}</span>
									{item.badge?.type === 'NEW' && <div className={styles.new_badge}>{t('new')}</div>}
									{item.badge?.type === 'HOT' && <div className={styles.hot_badge}>{t('hot')}</div>}

									{item.badge?.type === 'CUSTOM' && item.badge.afterIcon && item.badge.afterIcon}
									{item.subMenu && (
										<>
											<ArrowDownBold className={styles.arrow_down} />

											{item.id === 'navbar_buy_crypto' ? (
												<NestedDropDown
													subMenu={item.subMenu}
													language={language}
													buyCryptoCurrencies={buyCryptoCurrencies}
													isLinkExternal={isLinkExternal}
													className={styles.drop_down_container}
												/>
											) : (
												<SimpleDropDown
													menu={item.subMenu}
													key={'drop_down_' + index}
													className={styles.drop_down_container}
													isLinkExternal={isLinkExternal}
													language={language}
												/>
											)}
										</>
									)}
								</div>
							) : !item.a && !isLinkExternal ? (
								<Link
									key={'nav_left_' + index}
									className={`${styles.nav_left_item} ${
										item.title === 'Tournament'
											? styles.navbar_main_tournament
											: item.title === 'Rewards Hub'
												? styles.navbar_main_rewards_hub
												: ''
									}`}
									id={item.id}
									to={item.link ? `/${language}${item.link}` : ''}
								>
									{item.badge?.type === 'CUSTOM' && item.badge.preIcon && item.badge.preIcon}
									<span>{item.title}</span>
									{item.badge?.type === 'NEW' && <div className={styles.new_badge}>{t('new')}</div>}
									{item.badge?.type === 'HOT' && <div className={styles.hot_badge}>{t('hot')}</div>}

									{item.badge?.type === 'CUSTOM' && item.badge.afterIcon && item.badge.afterIcon}
								</Link>
							) : (
								<a
									key={'nav_left_' + index}
									id={item.id}
									className={`${styles.nav_left_item} ${
										item.title === 'Tournament'
											? styles.navbar_main_tournament
											: item.title === 'Rewards Hub'
												? styles.navbar_main_rewards_hub
												: ''
									}`}
									href={item.a ? item.a : COINLOCALLY_BASE_URL + language + item.link}
								>
									{item.badge?.type === 'CUSTOM' && item.badge.preIcon && item.badge.preIcon}
									<span>{item.title}</span>
									{item.badge?.type === 'NEW' && <div className={styles.new_badge}>{t('new')}</div>}
									{item.badge?.type === 'HOT' && <div className={styles.hot_badge}>{t('hot')}</div>}

									{item.badge?.type === 'CUSTOM' && item.badge.afterIcon && item.badge.afterIcon}
								</a>
							),
						)}
				</div>

				<div className={styles.navbar_right}>
					{type === 'FULL' && (
						<>
							{!isLogin ? (
								<div className={styles.login_container}>
									<Button
										variant='outline'
										size='small'
										id='navbar_login'
										{...(isLinkExternal
											? {
													href: `https://coinlocally.com/en/login${addCallbackInLogin()}`,
												}
											: {
													to: `/${language}/login${addCallbackInLogin()}`,
												})}
									>
										{t('login')}
									</Button>
									<Button
										variant='primary'
										size='small'
										id='navbar_register'
										{...(isLinkExternal
											? { href: 'https://coinlocally.com/en/register' }
											: { to: `/${language}/register` })}
									>
										{t('register')}
									</Button>
								</div>
							) : (
								<div className={styles.navbar_right_container}>
									{config.right.map((item, index) =>
										item.id === 'navbar_assets' ? (
											<div key={'nav_right_' + index} className={styles.nav_right_item} id={item.id}>
												<span>{item.title}</span>
												<ArrowDownBold className={styles.arrow_down} />
												<AssetDropDown
													isLinkExternal={isLinkExternal}
													language={language}
													menu={item.subMenu}
													className={styles.drop_down_container}
												/>
											</div>
										) : (
											<div key={'nav_right_' + index} className={styles.nav_profile_item} id={item.id}>
												<UserOutline className={styles.nav_profile_icon} />
												{profile && (
													<ProfileDropDown
														isLinkExternal={isLinkExternal}
														language={language}
														menu={item.subMenu}
														className={styles.drop_down_container}
														onLogOutClickHandler={onLogOutClickHandler}
														profile={profile!}
														referralType={referralType}
													/>
												)}
											</div>
										),
									)}
								</div>
							)}
						</>
					)}
					<div className={`${styles.right_icons_container} ${type === 'MINIMAL' ? styles.always_active : ''}`}>
						{theme === 'light' ? (
							<MoonOutline
								className={styles.right_icons}
								onClick={() => {
									changeTheme('dark');
								}}
								id='navbar_theme'
							/>
						) : (
							<SunOutline
								className={styles.right_icons}
								onClick={() => {
									changeTheme('light');
								}}
								id='navbar_theme'
							/>
						)}
						{type === 'FULL' && (
							<div className={styles.nav_right_item} style={{ cursor: 'inherit' }} id='navbar_notifications'>
								<NotificationOutline className={`${styles.right_icons}`} />
								<NotificationDropDown
									className={styles.drop_down_container}
									isLogin={isLogin}
									isLinkExternal={isLinkExternal}
									language={language}
									announcements={announcements}
									notifications={notifications}
									onNotificationClickHandler={onNotificationClickHandler}
								/>
							</div>
						)}
						<div className={styles.nav_right_item} style={{ cursor: 'inherit' }}>
							<DownloadOutline className={`${styles.right_icons}`} id='navbar_download' />
							<DownloadDropDown className={styles.drop_down_container} language={language} isLinkExternal={isLinkExternal} />
						</div>
						{onSettingClickHandler && (
							<div className={styles.nav_right_item} style={{ cursor: 'inherit' }} onClick={onSettingClickHandler}>
								<SettingOutline className={`${styles.right_icons}`} id='navbar_setting' />
							</div>
						)}
						{onLanguageClickHandler && (
							<div
								className={styles.nav_right_item}
								style={{ cursor: 'inherit' }}
								id='navbar_language'
								onClick={() => setLngModalStatus(true)}
							>
								<GlobalOutline className={`${styles.right_icons}`} />
							</div>
						)}
					</div>
					{type === 'FULL' && (
						<div className={styles.mobile_container}>
							{isLogin && (
								<UserOutline
									className={styles.nav_profile_icon}
									onClick={() => setProfileSidebarStatus(prev => !prev)}
									id='navbar_mobile_user'
								/>
							)}
							<MenuOutline
								className={styles.nav_profile_icon}
								onClick={() => setOpenMenu(prev => !prev)}
								id='navbar_mobile_menu'
							/>
						</div>
					)}
				</div>

				{selectedNotification && modalStatus && (
					<NotificationModal
						detail={selectedNotification}
						isLinkExternal={isLinkExternal}
						language={language}
						status={modalStatus}
						onClose={() => {
							setModalStatus(false);
						}}
					/>
				)}
				{type === 'FULL' && (
					<>
						<MobileSideBar
							isLogin={isLogin}
							isLinkExternal={isLinkExternal}
							language={language}
							theme={theme}
							changeTheme={changeTheme}
							buyCryptoCurrencies={buyCryptoCurrencies}
							openMenu={openMenu}
							setOpenMenu={setOpenMenu}
						/>
						{isLogin && (
							<ProfileSideBar
								referralType={referralType}
								isLinkExternal={isLinkExternal}
								language={language}
								theme={theme}
								changeTheme={changeTheme}
								buyCryptoCurrencies={buyCryptoCurrencies}
								openMenu={profileSidebarStatus}
								setOpenMenu={setProfileSidebarStatus}
								profile={profile!}
								onLogOutClickHandler={onLogOutClickHandler}
								notifications={notifications}
								affiliateSupport={affiliateSupport}
							/>
						)}
					</>
				)}
			</nav>
			{lngModalStatus && onLanguageClickHandler && (
				<ChangeLanguageModal status={lngModalStatus} setStatus={setLngModalStatus} onLanguageClick={onLanguageClickHandler} />
			)}
		</TranslationWrapper>
	);
};

export default Navbar;
