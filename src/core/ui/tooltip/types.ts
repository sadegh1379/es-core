interface ITooltipPropTypes {
	tooltip: React.ReactNode;
	children: React.ReactNode | string;
	alignment?: 'left' | 'right' | 'top' | 'bottom';
	width?: string;
	className?: string;
	tooltipClassName?: string;
}

export type { ITooltipPropTypes };
