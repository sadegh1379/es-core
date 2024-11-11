import { InputHTMLAttributes, ReactNode } from 'react';

interface InputPropTypes extends InputHTMLAttributes<HTMLInputElement> {
	type: 'text' | 'number' | 'password';
	variant: 'filled' | 'outline';
	label?: ReactNode;
	error?: string | null;
	action?: ReactNode;
	leftIcon?: ReactNode;
	isActionLoading?: boolean;
	onActionClickHandler?: () => void;
}

export type { InputPropTypes };
