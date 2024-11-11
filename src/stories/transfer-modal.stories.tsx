import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import 'core/font/product-sans.css';
import { FC } from 'react';

import { TransferModal } from '../core/ui/transfer-modal';
import { Button } from '../core/ui/button';
import { ITransferModalPropTypes, TTransferType } from '../core/ui/transfer-modal/types';

const TransferModalContainer: FC<
	Pick<ITransferModalPropTypes, 'isConfirmLoading' | 'isViewLoading' | 'spotTransferableCoins' | 'fundingTransferableCoins'>
> = ({ isConfirmLoading, isViewLoading, spotTransferableCoins, fundingTransferableCoins }) => {
	const [status, setStatus] = useState<boolean>(false);
	const [statusTmp, setStatusTmp] = useState<boolean>(false);

	const onCloseClickHandler = () => {
		setStatusTmp(false);
		setTimeout(() => {
			setStatus(false);
		}, 300);
	};
	const balanceSpot = [{ asset: 'USDT', available: '100.123456789', inOrder: '12.00', multiplier: '0.0001' }];

	const onTransferHandler = (data: { fromAccountType: TTransferType; toAccountType: TTransferType; asset: string; amount: string }) => {
		return new Promise((resolve, reject) => {
			resolve('');
		});
	};

	return (
		<>
			<Button
				variant='primary'
				size='medium'
				onClick={() => {
					setStatus(true);
					setStatusTmp(true);
				}}
			>
				open
			</Button>
			{status && (
				<TransferModal
					balances={{ spot: balanceSpot, futures: balanceSpot, funding: balanceSpot, bot: balanceSpot }}
					status={statusTmp}
					isConfirmLoading={isConfirmLoading}
					isViewLoading={isViewLoading}
					spotTransferableCoins={spotTransferableCoins}
					fundingTransferableCoins={fundingTransferableCoins}
					onClose={onCloseClickHandler}
					onTransfer={onTransferHandler}
				/>
			)}
		</>
	);
};

const meta: Meta<typeof TransferModalContainer> = {
	title: 'transfer-modal',
	component: TransferModalContainer,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const ModalView: Story = {
	args: {
		isConfirmLoading: false,
		isViewLoading: false,
		spotTransferableCoins: [
			{
				logo: 'https://clycpublic.ams3.cdn.digitaloceanspaces.com/assets/USDT.png',
				symbol: 'USDT',
				name: 'Tether',
			},
			{
				logo: 'https://clycpublic.ams3.cdn.digitaloceanspaces.com/assets/BTC.png',
				symbol: 'BTC',
				name: 'Bitcoin',
			},
			{
				logo: 'https://clycpublic.ams3.cdn.digitaloceanspaces.com/assets/ETH.png',
				symbol: 'ETH',
				name: 'Ethereum',
			},
		],
		fundingTransferableCoins: [
			{
				logo: 'https://clycpublic.ams3.cdn.digitaloceanspaces.com/assets/USDT.png',
				symbol: 'USDT',
				name: 'Tether',
			},
			{
				logo: 'https://clycpublic.ams3.cdn.digitaloceanspaces.com/assets/BTC.png',
				symbol: 'BTC',
				name: 'Bitcoin',
			},
			{
				logo: 'https://clycpublic.ams3.cdn.digitaloceanspaces.com/assets/ETH.png',
				symbol: 'ETH',
				name: 'Ethereum',
			},
		],
	},
};
