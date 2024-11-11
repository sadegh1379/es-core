import {
	DiamondOutline,
	HandshakeOutline,
	MegaphoneOutline,
	ApiOutline,
	// NftOutline,
	LearnOutline,
	CrownOutline,
	SpotOutline,
	BotOutline,
	ContractOutline,
	RankingOutline,
	GameOutline,
	// TrophyOutline,
	GiftOutline,
	BalanceOutline,
	DepositOutline,
	WithdrawOutline,
	CalculatorOutline,
	CardOutline,
	UserOutline,
	FingerScanOutline,
	KycOutline,
	UsersOutline,
	TicketOutline,
	// Tournament,
	Candle,
	Saving,
	CategoryBnw,
	Forex,
	PercentOutline,
	WalletOutline,
	AngelDashboardOutline,
	SettingOutline,
	NoteTwoOutline,
	WebTerminalOutline,
	CalenderOutline,
	ProfileAddOutline,
} from 'icons';
import { INavbarConfig } from './types';
import { useTranslation } from 'react-i18next';

const NavbarConfig = () => {
	const { t } = useTranslation('navbar');
	const Config: INavbarConfig = {
		left: [
			{
				title: 'grid',
				id: 'navbar_grid',
				subMenu: [
					{
						title: t('partnership'),
						description: t('partnership-description'),
						icon: <HandshakeOutline />,
						link: '/partnership',
						id: 'navbar_partnership',
					},
					{
						title: t('referral'),
						description: t('referral-description'),
						icon: <MegaphoneOutline />,
						link: '/referral',
						id: 'navbar_referral',
					},
					{
						title: t('affiliate'),
						description: t('affiliate-description'),
						icon: <DiamondOutline />,
						link: '/affiliate',
						id: 'navbar_affiliate',
					},
					{
						title: t('api-key'),
						description: t('api-key-description'),
						icon: <ApiOutline />,
						link: '/dashboard/api-key',
						id: 'navbar_api_key',
					},
					{
						title: t('trading-bot-dashboard'),
						description: t('trading-bot-dashboard-description'),
						a: 'https://coinlocally.com/en/trading-bot/my-bots',
						icon: <BotOutline />,
						id: 'navbar_trading_bot_dashboard',
					},
					// {
					// 	title: t('nft'),
					// 	description: t('nft-description'),
					// 	icon: <NftOutline />,
					// 	link: '/nft',
					// 	id: 'navbar_nft',
					// },
					{
						title: t('vip-portal'),
						description: t('vip-portal-description'),
						icon: <CrownOutline />,
						link: '/vip-portal',
						badge: 'NEW',
						id: 'navbar_vip_portal',
					},
					{
						title: t('e-learning'),
						description: t('e-learning-description'),
						icon: <LearnOutline />,
						a: 'https://coinlocally.com/e-learning',
						target: '_blank',
						id: 'navbar_e_learning',
					},
					{
						title: t('rewards-hub'),
						description: t('reward-hub-description'),
						icon: <GiftOutline />,
						link: '/task-center',
						badge: 'HOT',
						id: 'navbar_grid_reward_hub',
					},
				],
			},
			{
				title: t('buy-crypto'),
				id: 'navbar_buy_crypto',
				subMenu: [
					{
						title: t('buy-crypto-sub'),
						description: t('buy-crypto-description'),
						link: 'buy-crypto/mercuryo',
						icon: <CardOutline />,
						id: 'navbar_buy_crypto_via_card',
					},
				],
			},
			{
				title: t('market'),
				link: '/market',
				id: 'navbar_market',
			},
			{
				title: t('trade'),
				id: 'navbar_trade',
				subMenu: [
					{
						title: t('spot'),
						description: t('spot-description'),
						a: 'https://coinlocally.com/en/spot/BTC_USDT',
						icon: <SpotOutline />,
						id: 'navbar_spot',
					},
				],
			},
			{
				title: t('derivatives'),
				id: 'navbar_derivatives',
				subMenu: [
					{
						title: t('usdsm-futures'),
						description: t('futures-description'),
						a: 'https://coinlocally.com/en/futures/BTC_USDT',
						icon: <ContractOutline />,
						id: 'navbar_futures',
					},
					{
						title: t('top-trader'),
						description: t('top-trader-description'),
						link: '/leaderboard',
						icon: <RankingOutline />,
						id: 'navbar_top_trader',
					},
					{
						title: t('trading-bot'),
						description: t('trading-bot-description'),
						a: 'https://coinlocally.com/en/trading-bot/my-bots',
						icon: <BotOutline />,
						badge: 'NEW',
						id: 'navbar_trading_bot',
					},
					{
						title: t('demo-trading'),
						description: t('demo-trading-description'),
						a: 'https://demo.coinlocally.com',
						icon: <GameOutline />,
						target: '_blank',
						id: 'navbar_demo',
					},
					// {
					// 	title: t('tournament'),
					// 	description: t('tournament-description'),
					// 	link: '/tournament',
					// 	icon: <TrophyOutline />,
					// 	badge: 'HOT',
					// 	id: 'navbar_derivatives_tournament',
					// },
				],
			},
			{
				title: t('saving'),
				link: '/saving',
				id: 'navbar_saving',
			},
			{
				title: t('rewards-hub'),
				link: '/task-center',
				id: 'navbar_reward_hub',
				badge: {
					type: 'HOT',
				},
			},
			{
				title: t('forex'),
				id: 'navbar_forex',
				badge: {
					type: 'NEW',
				},
				subMenu: [
					{
						id: 'navbar_forex_web_terminal',
						title: t('web-terminal'),
						description: t('web-terminal-description'),
						link: '/forex-terminal',
						icon: <WebTerminalOutline />,
					},
					{
						id: 'navbar_forex_intro',
						title: t('forex-intro'),
						description: t('forex-intro-description'),
						a: 'https://coinlocally.forex',
						target: '_blank',
						icon: <NoteTwoOutline />,
					},
					{
						id: 'navbar_forex_dashboard',
						title: 'Open Account',
						description: t('forex-dashboard-description'),
						link: '/dashboard/forex',
						icon: <ProfileAddOutline />,
					},
					{
						id: 'navbar_forex_dashboard_IB',
						title: t('ib-dashboard'),
						description: t('ib-dashboard-description'),
						link: '/ib-dashboard',
						icon: <SettingOutline />,
					},
				],
			},
			// {
			// 	title: t('tournament'),
			// 	link: '/tournament',
			// 	id: 'navbar_tournament',
			// 	badge: {
			// 		type: 'CUSTOM',
			// 		preIcon: <Tournament />,
			// 	},
			// },
		],
		right: [
			{
				title: t('assets'),
				id: 'navbar_assets',
				subMenu: [
					{
						title: t('dashboard'),
						icon: <BalanceOutline />,
						link: '/dashboard/profile',
						id: 'navbar_dashboard',
					},
					{
						title: t('deposit'),
						icon: <DepositOutline />,
						link: '/deposit',
						id: 'navbar_deposit',
					},
					{
						title: t('withdraw'),
						icon: <WithdrawOutline />,
						link: '/withdraw',
						id: 'navbar_withdraw',
					},
					{
						title: t('balance'),
						icon: <CalculatorOutline />,
						link: '/balances',
						id: 'navbar_balance',
					},
					// {
					// 	title: t('nft-collected'),
					// 	icon: <NftOutline />,
					// 	link: '/nft/collected',
					// 	id: 'navbar_nft_collected',
					// },
					{
						title: t('api'),
						icon: <ApiOutline />,
						link: '/dashboard/api-key',
						id: 'navbar_asset_api_key',
					},
				],
			},
			{
				title: t('profile'),
				id: 'navbar_profile',
				subMenu: [
					{
						title: t('profile'),
						link: '/profile/edit',
						icon: <UserOutline />,
						id: 'navbar_profile_edit',
					},
					{
						title: t('security'),
						link: '/dashboard/security',
						icon: <FingerScanOutline />,
						id: 'navbar_security',
					},
					{
						title: t('kyc'),
						link: '/KYC',
						icon: <KycOutline />,
						id: 'navbar_kyc',
					},
					{
						title: t('referral'),
						link: '/referral',
						icon: <UsersOutline />,
						id: 'navbar_profile_referral',
					},
					{
						title: t('affiliate-dashboard'),
						link: '/affiliate-dashboard',
						icon: <AngelDashboardOutline />,
						id: 'navbar_affiliate_dashboard',
					},
					{
						title: t('support-ticket'),
						link: '/supportTicket',
						icon: <TicketOutline />,
						id: 'navbar_profile_support_ticket',
					},
				],
			},
		],
	};

	return Config;
};

const MobileNavbar = () => {
	const { t } = useTranslation('navbar');
	const config: INavbarConfig = {
		left: [
			{
				title: t('buy-crypto'),
				icon: <CardOutline />,
				link: '/buy-crypto/mercuryo',
				id: 'mobile_navbar_buy_crypto',
			},
			{
				title: t('market'),
				icon: <Candle />,
				link: '/market',
				id: 'mobile_navbar_market',
			},
			{
				title: t('trade'),
				icon: <SpotOutline />,
				id: 'mobile_navbar_trade',
				subMenu: [
					{
						title: t('spot'),
						description: t('spot-description'),
						a: 'https://coinlocally.com/en/spot/BTC_USDT',
						id: 'mobile_navbar_spot',
					},
				],
			},
			{
				title: t('derivatives'),
				icon: <ContractOutline />,
				id: 'mobile_navbar_derivatives',
				subMenu: [
					{
						title: t('usdsm-futures'),
						description: t('futures-description'),
						a: 'https://coinlocally.com/en/futures/BTC_USDT',
						id: 'mobile_navbar_futures',
					},
					{
						title: t('top-trader'),
						description: t('top-trader-description'),
						link: '/leaderboard',
						id: 'mobile_navbar_top_trader',
					},
					{
						title: t('trading-bot'),
						description: t('trading-bot-description'),
						a: 'https://coinlocally.com/en/trading-bot/my-bots',
						badge: 'NEW',
						id: 'mobile_navbar_trading_bot',
					},
					{
						title: t('demo-trading'),
						description: t('demo-trading-description'),
						a: 'https://demo.coinlocally.com',
						target: '_blank',
						id: 'mobile_navbar_demo',
					},
				],
			},
			{
				title: t('saving'),
				icon: <Saving />,
				link: '/saving',
				id: 'mobile_navbar_saving',
			},
			{
				title: t('rewards-hub'),
				icon: <GiftOutline />,
				link: '/task-center',
				id: 'mobile_navbar_reward_hub',
				badge: {
					type: 'HOT',
				},
			},
			{
				title: t('forex'),
				icon: <Forex />,
				badge: {
					type: 'NEW',
				},
				id: 'mobile_navbar_forex',
				subMenu: [
					{
						id: 'mobile_navbar_forex_web_terminal',
						title: t('web-terminal'),
						link: '/forex-terminal',
					},
					{
						id: 'mobile_navbar_forex_intro',
						title: t('forex-intro'),
						a: 'https://coinlocally.forex',
						target: '_blank',
					},
					{
						id: 'mobile_navbar_forex_dashboard',
						title: t('dashboard'),
						link: '/dashboard/forex',
					},
					{
						id: 'mobile_navbar_forex_dashboard',
						title: t('ib-dashboard'),
						link: '/ib-dashboard',
					},
				],
			},
			// {
			// 	title: t('tournament'),
			// 	icon: <Tournament />,
			// 	link: '/tournament',
			// 	id: 'mobile_navbar_tournament',
			// },
			{
				title: t('more'),
				icon: <CategoryBnw />,
				id: 'mobile_navbar_more',
				subMenu: [
					{
						title: t('partnership'),
						link: '/partnership',
						id: 'mobile_navbar_partnership',
					},
					{
						title: t('referral'),
						link: '/referral',
						id: 'mobile_navbar_more_referral',
					},
					{
						title: t('affiliate'),
						link: '/affiliate',
						id: 'mobile_navbar_affiliate',
					},
					{
						title: t('api-key'),
						link: '/dashboard/api-key',
						id: 'mobile_navbar_api_key',
					},
					{
						title: t('trading-bot-dashboard'),
						a: 'https://coinlocally.com/en/trading-bot/my-bots',
						id: 'mobile_navbar_trading_bot_dashboard',
					},
					// {
					// 	title: t('nft'),
					// 	link: '/nft',
					// 	id: 'mobile_navbar_nft',
					// },
					{
						title: t('vip-portal'),
						link: '/vip-portal',
						badge: 'NEW',
						id: 'mobile_navbar_vip_portal',
					},
					{
						title: t('e-learning'),
						a: 'https://coinlocally.com/e-learning',
						target: '_blank',
						id: 'mobile_navbar_e_learning',
					},
					{
						title: t('rewards-hub'),
						link: '/task-center',
						badge: 'HOT',
						id: 'mobile_navbar_more_reward_hub',
					},
				],
			},
		],
		right: [],
	};

	return config;
};

const ProfileSideBarConfig = () => {
	const { t } = useTranslation('navbar');
	const config: INavbarConfig['left'] = [
		{
			title: t('assets'),
			icon: <WalletOutline />,
			id: 'mobile_navbar_assets',
			subMenu: [
				{
					title: t('dashboard'),
					link: '/dashboard/profile',
					id: 'mobile_navbar_dashboard',
				},
				{
					title: t('forex-dashboard'),
					link: '/dashboard/forex',
					id: 'mobile_navbar_forex_dashboard',
				},
				{
					title: t('deposit'),
					link: '/deposit',
					id: 'mobile_navbar_deposit',
				},
				{
					title: t('withdraw'),
					link: '/withdraw',
					id: 'mobile_navbar_withdraw',
				},
				{
					title: t('balance'),
					link: '/balances',
					id: 'mobile_navbar_balance',
				},
				// {
				// 	title: t('nft-dashboard'),
				// 	link: '/nft/collected',
				// 	id: 'mobile_navbar_nft_collected',
				// },
				{
					title: t('api'),
					link: '/dashboard/api-key',
					id: 'mobile_navbar_api_key',
				},
			],
		},
		{
			title: t('profile'),
			icon: <UserOutline />,
			link: '/profile/edit',
			id: 'mobile_navbar_profile_edit',
		},
		{
			title: t('security'),
			link: '/dashboard/security',
			icon: <FingerScanOutline />,
			id: 'mobile_navbar_security',
		},
		{
			title: t('kyc'),
			link: '/KYC',
			icon: <KycOutline />,
			id: 'mobile_navbar_kyc',
		},
		{
			title: t('referral'),
			link: '/referral',
			icon: <UsersOutline />,
			id: 'mobile_navbar_referral',
		},
		{
			title: t('affiliate-dashboard'),
			link: '/affiliate-dashboard',
			icon: <AngelDashboardOutline />,
			id: 'mobile_navbar_affiliate_dashboard',
		},
		{
			title: t('support-ticket'),
			link: '/supportTicket',
			icon: <TicketOutline />,
			id: 'mobile_navbar_support_ticket',
		},
		{
			title: t('fee-rates'),
			icon: <PercentOutline />,
			link: '/fees',
			id: 'mobile_navbar_fee_rates',
		},
		{
			title: t('history'),
			icon: <CalenderOutline />,
			id: 'mobile_navbar_histories',
			subMenu: [
				{
					id: 'mobile_navbar_histories_deposit',
					title: t('deposit-history'),
					link: '/history/deposit',
				},
				{
					id: 'mobile_navbar_histories_withdraw',
					title: t('withdraw-history'),
					link: '/history/withdraw',
				},
				{
					id: 'mobile_navbar_histories_fiat',
					title: t('fiat-history'),
					link: '/history/fiat',
				},
				{
					id: 'mobile_navbar_histories_spot',
					title: t('spot-history'),
					link: '/history/spot',
				},
				{
					id: 'mobile_navbar_histories_futures',
					title: t('futures-history'),
					link: '/history/futures',
				},
				{
					id: 'mobile_navbar_histories_transfer',
					title: t('transfer-history'),
					link: '/history/transfer',
				},
			],
		},
	];

	return config;
};

export { NavbarConfig, MobileNavbar, ProfileSideBarConfig };
