import { CSSProperties, FC } from 'react';
import styles from './ring-loader.module.css';

const RingLoader: FC<{ className?: string; style?: CSSProperties }> = ({ className, style }) => {
	return (
		<div className={`${styles.table_loader} ${className ?? ''}`} style={style}>
			<div className={styles.loader}></div>
		</div>
	);
};

export default RingLoader;
