import { FC, ReactNode, useState } from 'react';
import { ITransferModalPropTypes, TTransferType } from './types';
import { Modal } from '../modal';
import styles from './transfer-modal.module.css';
import { Input } from '../input';
import { Select } from '../select';
import { ArrowSwapOutline, BotOutline, CoinCardOutline, EarnOutline, SpotOutline } from 'icons';
import { Button } from '../button';
import { RingLoader } from '../loader';

const toFixedDown = (value: string, digits: number) => {
	const re = new RegExp('(\\d+\\.\\d{' + digits + '})(\\d)');
	const m = value.match(re);
	return m ? parseFloat(m[1]).toString() : value;
};

const TransferModal: FC<ITransferModalPropTypes> = ({
	balances,
	status,
	isConfirmLoading,
	spotTransferableCoins,
	fundingTransferableCoins,
	isViewLoading,
	onClose,
	onTransfer,
}) => {
	const [transferData, setTransferData] = useState<{
		fromAccountType: TTransferType;
		toAccountType: TTransferType;
		asset: string;
		amount: string;
	}>({
		fromAccountType: 'SPOT',
		toAccountType: 'FUTURES',
		amount: '',
		asset: 'USDT',
	});

	function multipliersToPrecision(num: string) {
		if (num.includes('.')) {
			return num.split('.')[1].length;
		} else {
			return 0;
		}
	}

	const transferTypeList: { key: TTransferType; value: ReactNode }[] = [
		{
			key: 'SPOT',
			value: (
				<div className={styles.transfer_type_container}>
					<SpotOutline /> Spot
				</div>
			),
		},
		{
			key: 'FUTURES',
			value: (
				<div className={styles.transfer_type_container}>
					<CoinCardOutline /> USD-M Futures
				</div>
			),
		},
		{
			key: 'FUNDING',
			value: (
				<div className={styles.transfer_type_container}>
					<EarnOutline /> Funding
				</div>
			),
		},
		{
			key: 'FUTURES_TRADE_BOT',
			value: (
				<div className={styles.transfer_type_container}>
					<BotOutline /> Bot
				</div>
			),
		},
	];

	const onConvertSideFromSide = (data: {
		prevFrom?: TTransferType;
		from: TTransferType;
		prevTo?: TTransferType;
		to: TTransferType;
	}): { from: TTransferType; to: TTransferType } => {
		const { from, to, prevFrom, prevTo } = data;

		if (prevFrom && from === to) {
			return {
				from: to,
				to: prevFrom,
			};
		} else if (prevTo && from === to) {
			return {
				from: prevTo,
				to: from,
			};
		} else if (prevFrom && from === 'FUTURES_TRADE_BOT') {
			return { from, to: 'FUNDING' };
		} else if (prevTo && to === 'FUTURES_TRADE_BOT') {
			return { to, from: 'FUNDING' };
		} else if (prevFrom && to === 'FUTURES_TRADE_BOT') {
			return { from, to: from === 'SPOT' ? 'FUTURES' : 'SPOT' };
		} else {
			return {
				from,
				to,
			};
		}
	};

	const onFromTransferChangeHandler = (title: string) => {
		const { from, to } = onConvertSideFromSide({
			from: title as TTransferType,
			prevFrom: transferData.fromAccountType,
			to: transferData.toAccountType,
		});

		setTransferData({
			...transferData,
			fromAccountType: from,
			toAccountType: to,
			amount: '',
			asset:
				from === 'SPOT' && to === 'FUNDING'
					? spotTransferableCoins[0].symbol
					: from === 'FUNDING' && to === 'SPOT'
					? fundingTransferableCoins[0].symbol
					: 'USDT',
		});
	};

	const onToTransferChangeHandler = (title: string) => {
		const { from, to } = onConvertSideFromSide({
			to: title as TTransferType,
			prevTo: transferData.toAccountType,
			from: transferData.fromAccountType,
		});
		setTransferData({
			...transferData,
			toAccountType: to,
			fromAccountType: from,
			amount: '',
			asset:
				from === 'SPOT' && to === 'FUNDING'
					? spotTransferableCoins[0].symbol
					: from === 'FUNDING' && to === 'SPOT'
					? fundingTransferableCoins[0].symbol
					: 'USDT',
		});
	};

	const onAssetChangeHandler = (asset: string) => {
		setTransferData({
			...transferData,
			amount: '',
			asset,
		});
	};

	const onTransferChangeHandler = (e: any) => {
		const value = e.target.value;
		const multiplier =
			transferData.fromAccountType === 'FUTURES'
				? balances.futures.find(item => item.asset === transferData.asset)!.multiplier
				: transferData.fromAccountType === 'SPOT'
				? balances.spot.find(item => item.asset === transferData.asset)!.multiplier
				: transferData.fromAccountType === 'FUNDING'
				? balances.funding.find(item => item.asset === transferData.asset)!.multiplier
				: balances.bot.find(item => item.asset === transferData.asset)!.multiplier;

		if (value === '00') {
			setTransferData({
				...transferData,
				amount: '0',
			});
		} else {
			let amount = '';
			if (+value < 0) {
				amount = '';
			} else if (+value > +getMaxAvailable()) {
				amount = getMaxAvailable();
			} else {
				if (value.includes('.')) {
					let decimalPoints = value.split('.');
					if (decimalPoints[1].length > multipliersToPrecision(multiplier)) {
						amount = decimalPoints[0] + '.' + decimalPoints[1].slice(0, multipliersToPrecision(multiplier));
					} else {
						amount = value;
					}
				} else {
					amount = value;
				}
			}
			setTransferData({
				...transferData,
				amount: amount,
			});
		}
	};

	const getMaxAvailable = () => {
		let coinInfo =
			transferData.fromAccountType === 'FUTURES'
				? balances.futures.find(item => item.asset === transferData.asset)!
				: transferData.fromAccountType === 'SPOT'
				? balances.spot.find(item => item.asset === transferData.asset)!
				: transferData.fromAccountType === 'FUNDING'
				? balances.funding.find(item => item.asset === transferData.asset)!
				: balances.bot.find(item => item.asset === transferData.asset)!;

		return toFixedDown(coinInfo.available, multipliersToPrecision(coinInfo.multiplier));
	};

	const onMaxClickHandler = () => {
		setTransferData({
			...transferData,
			amount: getMaxAvailable(),
		});
	};

	const onChangeSideClickHandler = () => {
		setTransferData({
			...transferData,
			fromAccountType: transferData.toAccountType,
			toAccountType: transferData.fromAccountType,
			amount: '',
			asset:
				transferData.toAccountType === 'SPOT' && transferData.fromAccountType === 'FUNDING'
					? spotTransferableCoins[0].symbol
					: transferData.toAccountType === 'FUNDING' && transferData.fromAccountType === 'SPOT'
					? fundingTransferableCoins[0].symbol
					: 'USDT',
		});
	};

	const getInOrderValue = () => {
		if (transferData.fromAccountType === 'SPOT') {
			let coinInfo = balances.spot.find(item => item.asset === transferData.asset)!;
			return toFixedDown(coinInfo.inOrder, multipliersToPrecision(coinInfo.multiplier));
		} else {
			return '';
		}
	};

	const onTransferClickHandler = () => {
		onTransfer(transferData);
	};

	const isFromFundingToSpot = transferData.fromAccountType === 'FUNDING' && transferData.toAccountType === 'SPOT';
	const isFromSpotToFunding = transferData.fromAccountType === 'SPOT' && transferData.toAccountType === 'FUNDING';

	return (
		<Modal
			status={status}
			onClose={!isConfirmLoading ? onClose : () => {}}
			maxWidth={440}
			title='Transfer'
			className={styles.modal_container}
		>
			{isViewLoading ? (
				<RingLoader />
			) : (
				<div className={styles.transfer_container}>
					<Select
						id='from_selector_transfer'
						className={styles.from_select}
						list={transferTypeList}
						value={transferData.fromAccountType}
						onChange={onFromTransferChangeHandler}
						label='from'
					/>
					<div className={styles.change_side_container}>
						<ArrowSwapOutline onClick={onChangeSideClickHandler} />
					</div>

					<Select
						label='to'
						list={transferTypeList.filter(item =>
							transferData.fromAccountType !== 'FUTURES_TRADE_BOT'
								? item.key !== transferData.fromAccountType
								: item.key === 'FUNDING',
						)}
						id='to_selector_transfer'
						className={styles.to_select}
						value={transferData.toAccountType}
						onChange={onToTransferChangeHandler}
					/>

					<Select
						id='coin_selector_transfer'
						list={
							isFromFundingToSpot || isFromSpotToFunding
								? (isFromSpotToFunding ? spotTransferableCoins : fundingTransferableCoins).map(item => {
										return {
											key: item.symbol,
											value: { imgUrl: item.logo, primaryTxt: item.symbol, secondaryTxt: item.name },
										};
								  })
								: [
										{
											key: 'USDT',
											value: {
												imgUrl: 'https://clycpublic.ams3.cdn.digitaloceanspaces.com/assets/USDT.png',
												primaryTxt: 'USDT',
												secondaryTxt: 'Tether',
											},
										},
								  ]
						}
						search={isFromFundingToSpot || isFromSpotToFunding}
						className={styles.coin_select}
						value={transferData.asset}
						onChange={onAssetChangeHandler}
						label='Coin'
					/>

					<Input
						variant='filled'
						type='number'
						id='transfer_input_id'
						className={styles.amount_input}
						label={
							<div className={styles.transfer_input_label}>
								<span>Amount</span>
								<div className={styles.transfer_balance}>
									{transferData.fromAccountType !== 'SPOT' ? (
										<>
											<span>{getMaxAvailable()}</span> available
										</>
									) : (
										<>
											<span>{getInOrderValue()}</span> in order / <span>{getMaxAvailable()}</span> available
										</>
									)}
								</div>
							</div>
						}
						step={'1'}
						value={transferData.amount}
						onChange={onTransferChangeHandler}
						action={'Max'}
						onActionClickHandler={onMaxClickHandler}
						onKeyDown={evt => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
						inputMode='decimal'
					/>
					<p className={styles.transfer_note}>
						Transfers between{' '}
						{transferData.fromAccountType === 'FUNDING'
							? 'Funding'
							: transferData.fromAccountType === 'FUTURES'
							? 'Futures'
							: transferData.fromAccountType === 'FUTURES_TRADE_BOT'
							? 'Bot'
							: 'Spot'}{' '}
						and{' '}
						{transferData.toAccountType === 'FUNDING'
							? 'Funding'
							: transferData.toAccountType === 'FUTURES'
							? 'Futures'
							: transferData.toAccountType === 'FUTURES_TRADE_BOT'
							? 'Bot'
							: 'Spot'}{' '}
						are considered internal and completely free of charge.These transactions are executed instantly, so you can move
						your funds seamlessly.
					</p>

					<div className={styles.transfer_action}>
						<Button
							variant='primary'
							size='medium'
							onClick={onTransferClickHandler}
							isLoading={isConfirmLoading}
							disabled={transferData.amount === ''}
						>
							Transfer
						</Button>
					</div>
				</div>
			)}
		</Modal>
	);
};

export default TransferModal;
