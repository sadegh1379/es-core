import css from './headings.module.css';
import { textPropTypes } from './types';
import { FC } from 'react';

const H4: FC<textPropTypes> = props => {
	const sharedProps = {
		...(props.style && { style: props.style }),
		...(props.id && { id: props.id }),
	};

	return (
		<h4 className={`${css.h4} ${props.className ?? ''}`} {...sharedProps}>
			{props.children}
		</h4>
	);
};

export default H4;
