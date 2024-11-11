import { FC } from 'react';
import styles from './dot-loader.module.css';
import { DotLoaderPropTypes } from './types';

const DotLoader: FC<DotLoaderPropTypes> = ({ className, style }) => {
	return (
		<div className={`${styles.dot_loader} ${className ? className : ''}`} style={style}>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
};

export default DotLoader;
