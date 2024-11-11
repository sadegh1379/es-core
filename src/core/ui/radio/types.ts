import { InputHTMLAttributes } from 'react';

interface RadioPropTypes extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
	className?: string;
}

export type { RadioPropTypes };
