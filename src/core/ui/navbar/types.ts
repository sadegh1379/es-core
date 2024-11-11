import { ReactNode } from 'react';

interface IBuyCryptoCurrencies {
	name: string;
	icon: string;
}
type TNavbarType = 'FULL' | 'MINIMAL';
type TTheme = 'light' | 'dark';
interface NavbarPropTypes {
	type: TNavbarType;
	referralType: string;
	buyCryptoCurrencies: IBuyCryptoCurrencies[];
	announcements: IAnnouncements[] | null;
	notifications: INotification[] | null;
	isLogin: boolean;
	profile: IProfile | null;
	isLinkExternal: boolean;
	language: string;
	theme: TTheme;
	affiliateSupport?: {
		email: string;
		telegramID: string;
	};
	onSettingClickHandler?: () => void;
	onLanguageClickHandler?: (lng: TLanguage) => void;
	changeTheme: (theme: TTheme) => void;
	onLogOutClickHandler: () => void;
	onNotificationSeenHandler: (notificationId: number) => void;
}

interface MobileSidebarTypes {
	buyCryptoCurrencies: IBuyCryptoCurrencies[];
	isLogin: boolean;
	isLinkExternal: boolean;
	language: string;
	theme: TTheme;
	changeTheme: (theme: TTheme) => void;
	openMenu: boolean;
	setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ProfileSidebarTypes {
	referralType: string;
	buyCryptoCurrencies: IBuyCryptoCurrencies[];
	isLinkExternal: boolean;
	language: string;
	theme: 'light' | 'dark';
	changeTheme: (theme: 'light' | 'dark') => void;
	affiliateSupport?: {
		email: string;
		telegramID: string;
	};
	openMenu: boolean;
	setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
	onLogOutClickHandler: () => void;
	profile: IProfile;
	notifications: INotification[] | null;
}

interface IProfile {
	user: string;
	avatar?: string;
	kyc: {
		isVerified: boolean;
		kycLevel: 'Basic' | 'Advanced' | 'Corporation';
	};
	vipLevel: string;
}

interface INavbarSideConfig {
	title: string;
	link?: string;
	a?: string;
	target?: string;
	icon?: ReactNode;
	id: string;
	badge?: {
		type: 'HOT' | 'NEW' | 'CUSTOM';
		preIcon?: ReactNode;
		afterIcon?: ReactNode;
	};
	subMenu?: {
		id: string;
		title: string;
		description?: string;
		link?: string;
		a?: string;
		target?: string;
		icon?: ReactNode;
		badge?: 'HOT' | 'NEW';
	}[];
}

interface INavbarConfig {
	left: INavbarSideConfig[];
	right: INavbarSideConfig[];
}

interface IAnnouncements {
	id: number;
	title: string;
	body: string;
	createdAt: number;
	updatedAt: number;
	categoryName?: string;
}
interface INotification {
	body: string;
	createdAt: number;
	id: number;
	title: string;
	viewed: boolean;
}

export type {
	NavbarPropTypes,
	IProfile,
	INavbarConfig,
	INavbarSideConfig,
	IAnnouncements,
	INotification,
	IBuyCryptoCurrencies,
	MobileSidebarTypes,
	ProfileSidebarTypes,
	TNavbarType,
};
