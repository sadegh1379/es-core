import { InputHTMLAttributes } from 'react';

interface CheckBoxPropTypes extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
	className?: string;
}

export type { CheckBoxPropTypes };
