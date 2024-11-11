import * as React from 'react';
import type { SVGProps } from 'react';
const SvgThemeBold = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 24 24' {...props}>
		<path fill='currentColor' d='M15 22c-.41 0-.75-.34-.75-.75V2.75c0-.41.34-.75.75-.75s.75.34.75.75v18.5c0 .41-.34.75-.75.75Z' />
		<path fill='currentColor' d='M18 20h-3V4h3c2.21 0 4 1.79 4 4v8c0 2.21-1.79 4-4 4Z' />
		<path
			fill='#D4D4D5'
			d='M6 4C3.79 4 2 5.79 2 8v8c0 2.21 1.79 4 4 4h5c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1H6Zm1.75 11.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-7c0-.41.34-.75.75-.75s.75.34.75.75v7Z'
		/>
	</svg>
);
export default SvgThemeBold;
