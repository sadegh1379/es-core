import { Moment } from 'moment';

interface IDatePickerMobilePropType {
	minDate?: number;
	maxDate?: number;
	type: 'date' | 'range';
	className?: string;
	value: Moment | null | [Moment | null, Moment | null];
	onChange?: (date: Moment | null | (Moment | null)[]) => void;
	onReset?: () => void;
}

export type { IDatePickerMobilePropType };
