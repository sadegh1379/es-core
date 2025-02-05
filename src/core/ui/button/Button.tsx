import { FC } from 'react';
import styles from './button.module.css';
import { ButtonPropTypes } from './types';

const Button: FC<ButtonPropTypes> = input => {
	const { variant, size, children, className, href, to, isLoading, disabled, ...props } = input;

	const innerChildren = children;
	return href ? (
		<a
			href={href}
			className={`${styles.button} ${styles[size]} ${styles[variant]} ${isLoading ? styles.loading : ''} ${
				className ? className : ''
			}`}
			{...props}
		>
			{innerChildren}
		</a>
	) : (
		<button
			className={`${styles.button} ${styles[size]} ${styles[variant]} ${isLoading ? styles.loading : ''} ${
				className ? className : ''
			}`}
			{...props}
			disabled={disabled === true || disabled === false ? disabled : isLoading === true ? true : undefined}
		>
			{innerChildren}
		</button>
	);
};

export default Button;
