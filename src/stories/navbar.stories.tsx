import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from '../core/ui';
import 'core/font/product-sans.css';
import { FC } from 'react';
import { NavbarPropTypes } from '../core/ui/navbar/types';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

const NavbarWithRouter: FC<NavbarPropTypes> = props => {
	return (
		<BrowserRouter>
			<Navbar {...props} />
		</BrowserRouter>
	);
};

const meta: Meta<typeof NavbarWithRouter> = {
	component: NavbarWithRouter,
	title: 'navbar',
	tags: ['autodocs'],
	argTypes: {
		theme: {
			options: ['light', 'dark'],
			control: { type: 'radio' },
		},
		type: {
			options: ['FULL', 'MINIMAL'],
			control: { type: 'radio' },
		},
		language: {
			options: ['en', 'ru'],
			control: { type: 'radio' },
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const NavbarView: Story = {
	args: {
		isLogin: true,
		isLinkExternal: false,
		language: 'en',
		type: 'FULL',
		referralType: 'ANGEL',
		affiliateSupport: {
			email: 'H9sZt@example.com',
			telegramID: 'https://t.me/coinlocally',
		},
		// onSettingClickHandler: () => {},
		onLanguageClickHandler: () => {},
		buyCryptoCurrencies: [
			{
				name: 'AUD',
				icon: 'https://api.mercuryo.io/v1.6/img/icons/currencies/aud.png',
			},
			{
				name: 'BGN',
				icon: 'https://api.mercuryo.io/v1.6/img/icons/currencies/bgn.png',
			},
			{
				name: 'BRL',
				icon: 'https://api.mercuryo.io/v1.6/img/icons/currencies/brl.png',
			},
			{
				name: 'CAD',
				icon: 'https://api.mercuryo.io/v1.6/img/icons/currencies/cad.png',
			},
			{
				name: 'CHF',
				icon: 'https://api.mercuryo.io/v1.6/img/icons/currencies/chf.png',
			},
			{
				name: 'CZK',
				icon: 'https://api.mercuryo.io/v1.6/img/icons/currencies/czk.png',
			},
			{
				name: 'DKK',
				icon: 'https://api.mercuryo.io/v1.6/img/icons/currencies/dkk.png',
			},
			{
				name: 'EUR',
				icon: 'https://api.mercuryo.io/v1.6/img/icons/currencies/eur.png',
			},
			{
				name: 'GBP',
				icon: 'https://api.mercuryo.io/v1.6/img/icons/currencies/gbp.png',
			},
			{
				name: 'GHS',
				icon: 'https://api.mercuryo.io/v1.6/img/icons/currencies/ghs.png',
			},
			{
				name: 'HKD',
				icon: 'https://api.mercuryo.io/v1.6/img/icons/currencies/hkd.png',
			},
			{
				name: 'JPY',
				icon: 'https://api.mercuryo.io/v1.6/img/icons/currencies/jpy.png',
			},
			{
				name: 'KRW',
				icon: 'https://api.mercuryo.io/v1.6/img/icons/currencies/krw.png',
			},
			{
				name: 'MXN',
				icon: 'https://api.mercuryo.io/v1.6/img/icons/currencies/mxn.png',
			},
			{
				name: 'NGN',
				icon: 'https://api.mercuryo.io/v1.6/img/icons/currencies/ngn.png',
			},
			{
				name: 'PLN',
				icon: 'https://api.mercuryo.io/v1.6/img/icons/currencies/pln.png',
			},
			{
				name: 'SEK',
				icon: 'https://api.mercuryo.io/v1.6/img/icons/currencies/sek.png',
			},
			{
				name: 'TRY',
				icon: 'https://api.mercuryo.io/v1.6/img/icons/currencies/try.png',
			},
			{
				name: 'TWD',
				icon: 'https://api.mercuryo.io/v1.6/img/icons/currencies/twd.png',
			},
			{
				name: 'USD',
				icon: 'https://api.mercuryo.io/v1.6/img/icons/currencies/usd.png',
			},
			{
				name: 'VND',
				icon: 'https://api.mercuryo.io/v1.6/img/icons/currencies/vnd.png',
			},
		],
		announcements: [
			{
				id: 413,
				title: '🆕 New Listing: PYUSD on Spot Trading 🆕',
				body: 'Fellow Coinlocallys,We are excited to announce the upcoming listing of PayPal USD (PYUSD) on our Spot trading platform!Listing TimelinePYUSD Deposits: TBCPYUSD Listing: TBCPYUSD Withdrawals: TBCDeposits and withdrawals will be available via the Ethereum network.About PayPal USDPayPal USD is a stable',
				createdAt: 1692269568569,
				updatedAt: 1692269568569,
				categoryName: 'New Cryptocurrency Listing',
			},
			{
				id: 412,
				title: '🆕 New Listing: New YFIIUSDT, BADGERUSDT Contracts on Futures Trading 🆕',
				body: 'Fellow Coinlocally,Coinlocally is pleased to announce that the continued expansion of our product offerings YFIIUSDT, BADGERUSDT Contracts are now live!You will be able to select between 1 to 25 leverage.Trade your favorite crypto now 🔥Thanks for your support!Coinlocally Team2023-08-16Trade on-the-',
				createdAt: 1692194904157,
				updatedAt: 1692195225120,
				categoryName: 'New Cryptocurrency Listing',
			},
			{
				id: 411,
				title: '🆕 New Listing: ORDI on Spot Trading 🆕',
				body: 'Fellow Coinlocallys,We are excited to announce the upcoming listing of Ordinals (ORDI) on our Spot trading platform!Listing TimelineORDI Deposits: Opens on Aug 16, 2023, 10AM UTCORDI Listing: Aug 17, 2023, 8AM UTCORDI Withdrawals: Opens on Aug 18, 2023, 10AM UTCDeposits and withdrawals will be avail',
				createdAt: 1692181420892,
				updatedAt: 1692181420892,
				categoryName: 'New Cryptocurrency Listing',
			},
			{
				id: 413,
				title: '🆕 New Listing: PYUSD on Spot Trading 🆕',
				body: 'Fellow Coinlocallys,We are excited to announce the upcoming listing of PayPal USD (PYUSD) on our Spot trading platform!Listing TimelinePYUSD Deposits: TBCPYUSD Listing: TBCPYUSD Withdrawals: TBCDeposits and withdrawals will be available via the Ethereum network.About PayPal USDPayPal USD is a stable',
				createdAt: 1692269568569,
				updatedAt: 1692269568569,
				categoryName: 'New Cryptocurrency Listing',
			},
			{
				id: 412,
				title: '🆕 New Listing: New YFIIUSDT, BADGERUSDT Contracts on Futures Trading 🆕',
				body: 'Fellow Coinlocally,Coinlocally is pleased to announce that the continued expansion of our product offerings YFIIUSDT, BADGERUSDT Contracts are now live!You will be able to select between 1 to 25 leverage.Trade your favorite crypto now 🔥Thanks for your support!Coinlocally Team2023-08-16Trade on-the-',
				createdAt: 1692194904157,
				updatedAt: 1692195225120,
				categoryName: 'New Cryptocurrency Listing',
			},
			{
				id: 411,
				title: '🆕 New Listing: ORDI on Spot Trading 🆕',
				body: 'Fellow Coinlocallys,We are excited to announce the upcoming listing of Ordinals (ORDI) on our Spot trading platform!Listing TimelineORDI Deposits: Opens on Aug 16, 2023, 10AM UTCORDI Listing: Aug 17, 2023, 8AM UTCORDI Withdrawals: Opens on Aug 18, 2023, 10AM UTCDeposits and withdrawals will be avail',
				createdAt: 1692181420892,
				updatedAt: 1692181420892,
				categoryName: 'New Cryptocurrency Listing',
			},
			{
				id: 413,
				title: '🆕 New Listing: PYUSD on Spot Trading 🆕',
				body: 'Fellow Coinlocallys,We are excited to announce the upcoming listing of PayPal USD (PYUSD) on our Spot trading platform!Listing TimelinePYUSD Deposits: TBCPYUSD Listing: TBCPYUSD Withdrawals: TBCDeposits and withdrawals will be available via the Ethereum network.About PayPal USDPayPal USD is a stable',
				createdAt: 1692269568569,
				updatedAt: 1692269568569,
				categoryName: 'New Cryptocurrency Listing',
			},
			{
				id: 412,
				title: '🆕 New Listing: New YFIIUSDT, BADGERUSDT Contracts on Futures Trading 🆕',
				body: 'Fellow Coinlocally,Coinlocally is pleased to announce that the continued expansion of our product offerings YFIIUSDT, BADGERUSDT Contracts are now live!You will be able to select between 1 to 25 leverage.Trade your favorite crypto now 🔥Thanks for your support!Coinlocally Team2023-08-16Trade on-the-',
				createdAt: 1692194904157,
				updatedAt: 1692195225120,
				categoryName: 'New Cryptocurrency Listing',
			},
			{
				id: 411,
				title: '🆕 New Listing: ORDI on Spot Trading 🆕',
				body: 'Fellow Coinlocallys,We are excited to announce the upcoming listing of Ordinals (ORDI) on our Spot trading platform!Listing TimelineORDI Deposits: Opens on Aug 16, 2023, 10AM UTCORDI Listing: Aug 17, 2023, 8AM UTCORDI Withdrawals: Opens on Aug 18, 2023, 10AM UTCDeposits and withdrawals will be avail',
				createdAt: 1692181420892,
				updatedAt: 1692181420892,
				categoryName: 'New Cryptocurrency Listing',
			},
			{
				id: 413,
				title: '🆕 New Listing: PYUSD on Spot Trading 🆕',
				body: 'Fellow Coinlocallys,We are excited to announce the upcoming listing of PayPal USD (PYUSD) on our Spot trading platform!Listing TimelinePYUSD Deposits: TBCPYUSD Listing: TBCPYUSD Withdrawals: TBCDeposits and withdrawals will be available via the Ethereum network.About PayPal USDPayPal USD is a stable',
				createdAt: 1692269568569,
				updatedAt: 1692269568569,
				categoryName: 'New Cryptocurrency Listing',
			},
			{
				id: 412,
				title: '🆕 New Listing: New YFIIUSDT, BADGERUSDT Contracts on Futures Trading 🆕',
				body: 'Fellow Coinlocally,Coinlocally is pleased to announce that the continued expansion of our product offerings YFIIUSDT, BADGERUSDT Contracts are now live!You will be able to select between 1 to 25 leverage.Trade your favorite crypto now 🔥Thanks for your support!Coinlocally Team2023-08-16Trade on-the-',
				createdAt: 1692194904157,
				updatedAt: 1692195225120,
				categoryName: 'New Cryptocurrency Listing',
			},
			{
				id: 411,
				title: '🆕 New Listing: ORDI on Spot Trading 🆕',
				body: 'Fellow Coinlocallys,We are excited to announce the upcoming listing of Ordinals (ORDI) on our Spot trading platform!Listing TimelineORDI Deposits: Opens on Aug 16, 2023, 10AM UTCORDI Listing: Aug 17, 2023, 8AM UTCORDI Withdrawals: Opens on Aug 18, 2023, 10AM UTCDeposits and withdrawals will be avail',
				createdAt: 1692181420892,
				updatedAt: 1692181420892,
				categoryName: 'New Cryptocurrency Listing',
			},
		],
		notifications: [
			{
				body: "You've successfully withdrawn 306 USDT at 8/9/2023, 2:40:11 AM (UTC). If it's not your own operation, please contact our customer service immediately.",
				createdAt: 1691069709385,
				id: 1,
				title: 'Withdrawal Successful',
				viewed: false,
			},
		],
		theme: 'light',
		changeTheme: (theme: 'light' | 'dark') => {
			console.log(theme);
		},
		onNotificationSeenHandler: notificationId => {},
		onLogOutClickHandler: () => {},
		profile: {
			kyc: {
				isVerified: false,
				kycLevel: 'Basic',
			},
			user: 'mrd***za@gmail.com',
			vipLevel: 'Regular User',
		},
	},
};
