type TTransferType = 'SPOT' | 'FUTURES' | 'FUNDING' | 'FUTURES_TRADE_BOT';
interface ITransferModalPropTypes {
	status: boolean;
	onClose: () => void;
	isConfirmLoading: boolean;
	isViewLoading: boolean;
	balances: {
		spot: {
			asset: string;
			available: string;
			inOrder: string;
			multiplier: string;
		}[];
		futures: {
			asset: string;
			available: string;
			multiplier: string;
		}[];
		funding: {
			asset: string;
			available: string;
			multiplier: string;
		}[];
		bot: {
			asset: string;
			available: string;
			multiplier: string;
		}[];
	};
	spotTransferableCoins: {
		logo: string;
		symbol: string;
		name: string;
	}[];
	fundingTransferableCoins: {
		logo: string;
		symbol: string;
		name: string;
	}[];
	onTransfer: (data: { fromAccountType: TTransferType; toAccountType: TTransferType; asset: string; amount: string }) => void;
}

export type { ITransferModalPropTypes, TTransferType };
