import { forwardRef } from 'react';
import styles from './radio.module.css';
import { CheckBoxPropTypes } from './types';

const CheckBox = forwardRef<HTMLInputElement, CheckBoxPropTypes>((props, ref) => {
	const { label, className, style, ...input_props } = props;

	return (
		<label className={`${styles.radio} ${className ?? ''}`} style={style}>
			<input className={styles.input} {...input_props} ref={ref} type='checkbox' />
			<span className={styles.check}></span>
			{label}
		</label>
	);
});

export default CheckBox;
