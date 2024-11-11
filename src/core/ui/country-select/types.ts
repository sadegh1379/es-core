import { ReactNode } from 'react';

interface CountrySelectPropTypes {
	label?: ReactNode;
	value: string;
	id: string;
	className?: string;
	containerClassName?: string;
	size?: 'small' | 'medium';
	placeholder?: string;
	onChange: (value: any) => void;
}

export type { CountrySelectPropTypes };
