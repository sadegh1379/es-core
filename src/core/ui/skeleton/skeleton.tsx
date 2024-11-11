import styles from './skeleton.module.css';
import { ISkeleton } from './types';

const Skeleton = ({ width, height, variant = 'text', className, component = 'span', style }: ISkeleton) => {
	const Component = component;

	const customStyle = {
		...(width && {
			width,
		}),
		...(height && {
			height,
		}),
		...(style && {
			...style,
		}),
	};
	return <Component className={`${styles.skeleton} ${styles[variant]} ${className || ''}`} style={customStyle}></Component>;
};

export default Skeleton;
