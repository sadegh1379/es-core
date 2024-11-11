import { FC } from 'react';
import { INavbarSideConfig, IProfile } from '../types';
import styles from './profile-drop-down.module.css';
import { Link } from 'react-router-dom';
import { CrownOutline, LogoutOutline, UserBold } from 'icons';
import { useTranslation } from 'react-i18next';

const ProfileDropDown: FC<{
	menu: INavbarSideConfig['subMenu'];
	className?: string;
	language: string;
	isLinkExternal: boolean;
	onLogOutClickHandler: () => void;
	profile: IProfile;
	referralType: string;
}> = ({ menu, className, language, isLinkExternal, profile, referralType, onLogOutClickHandler }) => {
	const { t } = useTranslation('navbar');
	return (
		<div className={`${styles.drop_down_container} ${className ? className : ''}`}>
			<div className={styles.profile_info_container}>
				{profile.avatar ? (
					<img src={profile.avatar} alt='' className={styles.profile_icon_container} />
				) : (
					<div className={styles.profile_icon_container}>
						<UserBold />
					</div>
				)}

				<div className={styles.user_container}>{profile.user}</div>
				<div className={`${styles.kyc_container} ${profile.kyc.isVerified ? styles.active : ''}`}>
					<svg width='16' height='17' viewBox='0 0 16 17' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<path
							className={styles.kyc_svg_shape}
							d='M7.16594 2.13289C7.62594 1.73956 8.37927 1.73956 8.84594 2.13289L9.89927 3.03956C10.0993 3.21289 10.4726 3.35289 10.7393 3.35289H11.8726C12.5793 3.35289 13.1593 3.93289 13.1593 4.63956V5.77289C13.1593 6.03289 13.2993 6.41289 13.4726 6.61289L14.3793 7.66622C14.7726 8.12622 14.7726 8.87956 14.3793 9.34622L13.4726 10.3996C13.2993 10.5996 13.1593 10.9729 13.1593 11.2396V12.3729C13.1593 13.0796 12.5793 13.6596 11.8726 13.6596H10.7393C10.4793 13.6596 10.0993 13.7996 9.89927 13.9729L8.84594 14.8796C8.38594 15.2729 7.6326 15.2729 7.16594 14.8796L6.1126 13.9729C5.9126 13.7996 5.53927 13.6596 5.2726 13.6596H4.11927C3.4126 13.6596 2.8326 13.0796 2.8326 12.3729V11.2329C2.8326 10.9729 2.6926 10.5996 2.52594 10.3996L1.62594 9.33956C1.23927 8.87956 1.23927 8.13289 1.62594 7.67289L2.52594 6.61289C2.6926 6.41289 2.8326 6.03956 2.8326 5.77956V4.63289C2.8326 3.92622 3.4126 3.34622 4.11927 3.34622H5.2726C5.5326 3.34622 5.9126 3.20622 6.1126 3.03289L7.16594 2.13289Z'
							fill='currentColor'
						/>
						<path
							className={styles.kyc_svg_tick}
							d='M7.1937 10.6129C7.06036 10.6129 6.9337 10.5595 6.84036 10.4662L5.22703 8.85286C5.0337 8.65953 5.0337 8.33953 5.22703 8.1462C5.42036 7.95286 5.74036 7.95286 5.9337 8.1462L7.1937 9.4062L10.0604 6.53953C10.2537 6.3462 10.5737 6.3462 10.767 6.53953C10.9604 6.73286 10.9604 7.05286 10.767 7.2462L7.54703 10.4662C7.4537 10.5595 7.32703 10.6129 7.1937 10.6129Z'
							fill='currentColor'
						/>
					</svg>
					<div className={styles.kyc_txt}>{!profile.kyc.isVerified ? 'Unverified' : `Verified-${profile.kyc.kycLevel}`}</div>
				</div>
				<div className={`${styles.vip_level_container} ${profile.vipLevel !== 'Regular User' ? styles.active : ''}`}>
					<CrownOutline />
					<span className={styles.vip_level_txt}>{profile.vipLevel}</span>
				</div>
			</div>

			<div className={styles.menu_items}>
				{menu?.map((item, index) => {
					if (
						(item.id === 'navbar_affiliate_dashboard' &&
							(referralType === 'ANGEL' || referralType === 'ANGEL2' || referralType === 'ANGEL3')) ||
						item.id !== 'navbar_affiliate_dashboard'
					) {
						if (!item.a && !isLinkExternal) {
							return (
								<Link
									key={`drop_${item.title}_${index}`}
									className={styles.drop_down_item}
									to={item.link ? `/${language}${item.link}` : ''}
									id={item.id}
								>
									<div className={styles.icon_container}>{item.icon}</div>
									<div className={styles.title}>
										{item.title}
										{item.badge === 'NEW' && <div className={styles.new_badge}>{t('new')}</div>}
										{item.badge === 'HOT' && <div className={styles.hot_badge}>{t('hot')}</div>}
									</div>
								</Link>
							);
						} else {
							return (
								<a
									key={`drop_${item.title}_${index}`}
									className={styles.drop_down_item}
									href={item.a ? item.a : 'https://coinlocally.com/' + language + item.link}
									id={item.id}
								>
									<div className={styles.icon_container}>{item.icon}</div>
									<div className={styles.title}>
										{item.title}
										{item.badge === 'NEW' && <div className={styles.new_badge}>{t('new')}</div>}
										{item.badge === 'HOT' && <div className={styles.hot_badge}>{t('hot')}</div>}
									</div>
								</a>
							);
						}
					} else {
						return null;
					}
				})}
			</div>

			<div className={styles.drop_down_item} onClick={onLogOutClickHandler} id='navbar_profile_logout'>
				<div className={styles.icon_container}>
					<LogoutOutline />
				</div>
				<div className={styles.title}>{t('log-out')}</div>
			</div>
		</div>
	);
};

export default ProfileDropDown;
