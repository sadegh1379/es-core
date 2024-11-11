import { forwardRef, useState } from 'react';
import styles from './input.module.css';
import { InputPropTypes } from './types';
import { DotLoader } from '../loader';
import { EyeOutline, EyeSlashOutline } from 'icons';

const Input = forwardRef<HTMLInputElement, InputPropTypes>((props, ref) => {
	const { label, variant, error, type, action, isActionLoading, className, onActionClickHandler, leftIcon, ...input_props } = props;

	const [inputType, setInputType] = useState<'password' | 'text'>('password');

	const onChangeInputTypeClickHandler = () => {
		setInputType(inputType === 'password' ? 'text' : 'password');
	};
	return (
		<div className={`${styles.container} ${styles['input_' + variant]} ${error ? styles.error_input : ''} ${className ?? ''}`}>
			{label && (
				<label className={styles.label_container} {...(props.id && { htmlFor: props.id })}>
					{label}
				</label>
			)}

			<div className={`${leftIcon && action ? styles.three_column : ''} ${styles.input_container}`}>
				{leftIcon && <div className={styles.left_icon_container}>{leftIcon}</div>}

				<input
					className={styles.input}
					{...input_props}
					ref={ref}
					type={type === 'password' ? inputType : type}
					onWheel={e => e.currentTarget.blur()}
				/>

				{action && (
					<div className={styles.action_container} onClick={onActionClickHandler}>
						{isActionLoading ? <DotLoader className={styles.loader} /> : action}
					</div>
				)}
				{type === 'password' && (
					<div className={styles.action_container} onClick={onChangeInputTypeClickHandler}>
						{inputType === 'password' ? <EyeSlashOutline width={16} height={16} /> : <EyeOutline width={16} height={16} />}
					</div>
				)}
				<div className={styles.border_container}></div>
			</div>
			{error && <div className={styles.error_container}>{error}</div>}
		</div>
	);
});

export default Input;
