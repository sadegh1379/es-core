import css from './headings.module.css';
import { textPropTypes } from './types';
import { FC } from 'react';

const H2: FC<textPropTypes> = props => {
	const sharedProps = {
		...(props.style && { style: props.style }),
		...(props.id && { id: props.id }),
	};

	return (
		<h2 className={`${css.h2} ${props.className ?? ''}`} {...sharedProps}>
			{props.children}
		</h2>
	);
};

export default H2;
