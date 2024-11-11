import css from './headings.module.css';
import { textPropTypes } from './types';
import { FC } from 'react';

const H1: FC<textPropTypes> = props => {
	const sharedProps = {
		...(props.style && { style: props.style }),
		...(props.id && { id: props.id }),
	};

	return (
		<h1 className={`${css.h1} ${props.className ?? ''}`} {...sharedProps}>
			{props.children}
		</h1>
	);
};

export default H1;
