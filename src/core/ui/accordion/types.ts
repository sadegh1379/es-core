import { ReactNode } from 'react';
interface IAccordionPropTypes {
	className?: string;
	itemClassName?: string;
	titleClassName?: string;
	valueClassName?: string;
	prefixId?: string;
	dataList: {
		title: string;
		value: ReactNode;
	}[];
}

export type { IAccordionPropTypes };
