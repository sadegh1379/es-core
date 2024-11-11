import { FC } from 'react';
import { ISwitchPropTypes } from './types';
import styles from './switch-button.module.css';

const SwitchButton: FC<ISwitchPropTypes> = ({ className, status, setStatus }) => {
	return (
		<div
			className={`${styles.switch_container} ${status ? styles.active : ''} core_switch_container ${className ?? ''}`}
			onClick={() => {
				setStatus(!status);
			}}
		>
			<div className={`${styles.status_circle} ${status ? styles.active : ''} core_switch_nested_circle`}></div>
		</div>
	);
};

export default SwitchButton;
