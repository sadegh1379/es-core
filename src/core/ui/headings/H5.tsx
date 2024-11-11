import css from './headings.module.css';
import { textPropTypes } from './types';
import { FC } from 'react';

const H5: FC<textPropTypes> = props => {
	const sharedProps = {
		...(props.style && { style: props.style }),
		...(props.id && { id: props.id }),
	};

	return (
		<h5 className={`${css.h5} ${props.className ?? ''}`} {...sharedProps}>
			{props.children}
		</h5>
	);
};

export default H5;
