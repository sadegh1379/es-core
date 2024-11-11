import { forwardRef } from 'react';
import styles from './radio.module.css';
import { RadioPropTypes } from './types';

const Radio = forwardRef<HTMLInputElement, RadioPropTypes>((props, ref) => {
	const { label, className,style, ...input_props } = props;

	return (
		<label className={`${styles.radio} ${className ?? ''}`} style={style}>
			<input className={styles.input} {...input_props} ref={ref} type='radio' />
			<span className={styles.check}></span>
			{label}
		</label>
	);
});

export default Radio;
