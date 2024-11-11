import css from './headings.module.css';
import { textPropTypes } from './types';
import { FC } from 'react';

const H3: FC<textPropTypes> = props => {
	const sharedProps = {
		...(props.style && { style: props.style }),
		...(props.id && { id: props.id }),
	};

	return (
		<h3 className={`${css.h3} ${props.className ?? ''}`} {...sharedProps}>
			{props.children}
		</h3>
	);
};

export default H3;
