import css from './headings.module.css';
import { textPropTypes } from './types';
import { FC } from 'react';

const H6: FC<textPropTypes> = props => {
	const sharedProps = {
		...(props.style && { style: props.style }),
		...(props.id && { id: props.id }),
	};

	return (
		<h6 className={`${css.h6} ${props.className ?? ''}`} {...sharedProps}>
			{props.children}
		</h6>
	);
};

export default H6;
