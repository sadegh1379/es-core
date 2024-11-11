import { Close, CrownOutline, LogoutOutline, MessageOutline, NotificationOutline, TelegramOutline, UserBold } from 'icons';
import { FC, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { MobileDropDown } from '../drop-down/mobile-drop-down';
import profileStyles from '../drop-down/profile-drop-down.module.css';
import { ProfileSideBarConfig } from '../navbar.config';
import { ProfileSidebarTypes } from '../types';
import styles from './profile.module.css';
import { useTranslation } from 'react-i18next';

const ProfileSideBar: FC<ProfileSidebarTypes> = ({
	isLinkExternal,
	language,
	buyCryptoCurrencies,
	openMenu,
	setOpenMenu,
	profile,
	onLogOutClickHandler,
	notifications,
	referralType,
	affiliateSupport,
}) => {
	const config = ProfileSideBarConfig();

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
						<Close
							className={styles.sidebar_close}
							onClick={() => setOpenMenu((prev: boolean) => !prev)}
							id='mobile_navbar_profile_close'
						/>
					</div>
					<div className={`${profileStyles.profile_info_container} ${styles.m_0}`}>
						{profile.avatar ? (
							<img src={profile.avatar} alt='' className={profileStyles.profile_icon_container} />
						) : (
							<div className={profileStyles.profile_icon_container}>
								<UserBold />
							</div>
						)}
						<div className={profileStyles.user_container}>{profile.user}</div>
						<div className={`${profileStyles.kyc_container} ${profile.kyc.isVerified ? profileStyles.active : ''}`}>
							<svg width='16' height='17' viewBox='0 0 16 17' fill='none' xmlns='http://www.w3.org/2000/svg'>
								<path
									className={profileStyles.kyc_svg_shape}
									d='M7.16594 2.13289C7.62594 1.73956 8.37927 1.73956 8.84594 2.13289L9.89927 3.03956C10.0993 3.21289 10.4726 3.35289 10.7393 3.35289H11.8726C12.5793 3.35289 13.1593 3.93289 13.1593 4.63956V5.77289C13.1593 6.03289 13.2993 6.41289 13.4726 6.61289L14.3793 7.66622C14.7726 8.12622 14.7726 8.87956 14.3793 9.34622L13.4726 10.3996C13.2993 10.5996 13.1593 10.9729 13.1593 11.2396V12.3729C13.1593 13.0796 12.5793 13.6596 11.8726 13.6596H10.7393C10.4793 13.6596 10.0993 13.7996 9.89927 13.9729L8.84594 14.8796C8.38594 15.2729 7.6326 15.2729 7.16594 14.8796L6.1126 13.9729C5.9126 13.7996 5.53927 13.6596 5.2726 13.6596H4.11927C3.4126 13.6596 2.8326 13.0796 2.8326 12.3729V11.2329C2.8326 10.9729 2.6926 10.5996 2.52594 10.3996L1.62594 9.33956C1.23927 8.87956 1.23927 8.13289 1.62594 7.67289L2.52594 6.61289C2.6926 6.41289 2.8326 6.03956 2.8326 5.77956V4.63289C2.8326 3.92622 3.4126 3.34622 4.11927 3.34622H5.2726C5.5326 3.34622 5.9126 3.20622 6.1126 3.03289L7.16594 2.13289Z'
									fill='currentColor'
								/>
								<path
									className={profileStyles.kyc_svg_tick}
									d='M7.1937 10.6129C7.06036 10.6129 6.9337 10.5595 6.84036 10.4662L5.22703 8.85286C5.0337 8.65953 5.0337 8.33953 5.22703 8.1462C5.42036 7.95286 5.74036 7.95286 5.9337 8.1462L7.1937 9.4062L10.0604 6.53953C10.2537 6.3462 10.5737 6.3462 10.767 6.53953C10.9604 6.73286 10.9604 7.05286 10.767 7.2462L7.54703 10.4662C7.4537 10.5595 7.32703 10.6129 7.1937 10.6129Z'
									fill='currentColor'
								/>
							</svg>
							<div className={profileStyles.kyc_txt}>
								{!profile.kyc.isVerified ? 'Unverified' : `Verified-${profile.kyc.kycLevel}`}
							</div>
						</div>
						<div
							className={`${profileStyles.vip_level_container} ${
								profile.vipLevel !== 'Regular User' ? profileStyles.active : ''
							}`}
						>
							<CrownOutline />
							<span className={profileStyles.vip_level_txt}>{profile.vipLevel}</span>
						</div>
					</div>
					<ul>
						{config.map((item, index) =>
							item.subMenu ? (
								<MobileDropDown
									key={`MobileDropDown_${index}`}
									index={index}
									item={item}
									language={language}
									setOpenMenu={setOpenMenu}
									buyCryptoCurrencies={item.title === 'Buy Crypto' ? buyCryptoCurrencies : undefined}
									isLinkExternal={isLinkExternal}
									className={styles.slider_drop_down_container}
								/>
							) : (
								((item.id === 'mobile_navbar_affiliate_dashboard' &&
									(referralType === 'ANGEL' || referralType === 'ANGEL2' || referralType === 'ANGEL3')) ||
									item.id !== 'mobile_navbar_affiliate_dashboard') && (
									<Fragment key={'side_top_profile_' + index + item.title}>
										{!item.a && !isLinkExternal ? (
											<Link
												className={styles.sidebar_item}
												onClick={() => setOpenMenu(false)}
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
												className={styles.sidebar_item}
												href={item.a ? item.a : 'https://coinlocally.com/' + language + item.link}
												onClick={() => setOpenMenu(false)}
												id={item.id}
											>
												{item.icon}
												<span>{item.title}</span>
												{item.badge?.type === 'NEW' && <div className={styles.new_badge}>{t('new')}</div>}
												{item.badge?.type === 'HOT' && <div className={styles.hot_badge}>{t('hot')}</div>}
											</a>
										)}
									</Fragment>
								)
							),
						)}

						{!isLinkExternal ? (
							<Link to={`/${language}/notification`} className={styles.notification} id='mobile_navbar_profile_notification'>
								<NotificationOutline />
								{t('notification')}
								<span className={styles.number_badge}>{notifications?.filter(item => !item.viewed).length}</span>
							</Link>
						) : (
							<a
								href={`https://coinlocally.com/${language}/notification`}
								className={styles.notification}
								id='mobile_navbar_profile_notification'
							>
								<NotificationOutline />
								{t('notification')}
								<span className={styles.number_badge}>{notifications?.filter(item => !item.viewed).length}</span>
							</a>
						)}

						<div className={styles.logout} onClick={onLogOutClickHandler} id='mobile_navbar_profile_logout'>
							<LogoutOutline />
							{t('log-out')}
						</div>
						{(referralType === 'ANGEL' || referralType === 'ANGEL2' || referralType === 'ANGEL3') && (
							<div className={styles.affiliate_support}>
								<p className={styles.affiliate_support_title}>{t('your-exclusive-customer-support')}</p>
								<div className={styles.affiliate_support_bordered}></div>
								<div className={styles.affiliate_support_social_container}>
									<span className={styles.affiliate_support_social}>
										<span className={styles.affiliate_support_icon_box}>
											<TelegramOutline />
										</span>
										<p className={styles.affiliate_support_social_text}>{affiliateSupport?.telegramID}</p>
									</span>
								</div>
								<div className={styles.affiliate_support_social_container}>
									<span className={styles.affiliate_support_social}>
										<span className={styles.affiliate_support_icon_box}>
											<MessageOutline />
										</span>
										<p className={styles.affiliate_support_social_text}>{affiliateSupport?.email}</p>
									</span>
								</div>
							</div>
						)}
					</ul>
				</div>
			</div>
		</>
	);
};

export default ProfileSideBar;
