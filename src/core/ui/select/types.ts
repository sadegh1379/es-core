import { ReactNode } from 'react';

type Value = string | ReactNode | { imgUrl?: string; primaryTxt?: string; secondaryTxt?: string } | { [key: string]: string };

interface SelectPropTypes {
	label?: ReactNode;
	value: string;
	list: string[] | { key: any; value: Value }[];
	id: string;
	className?: string;
	containerClassName?: string;
	size?: 'small' | 'medium';
	search?: boolean;
	placeholder?: string;
	onClearSelected?: () => void;
	renderOption?: (value: Value) => ReactNode;
	renderSelected?: (value: Value) => ReactNode;
	onChange: (value: any) => void;
	onOpen?: () => void;
}

export { Value };

export type { SelectPropTypes };
