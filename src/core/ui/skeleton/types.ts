import React, { CSSProperties } from 'react';

interface ISkeleton {
	width?: string;
	height?: string;
	variant?: 'text' | 'rectangular' | 'rounded' | 'circular';
	className?: string;
	style?: CSSProperties;
	component?: React.ElementType;
}

export type { ISkeleton };
