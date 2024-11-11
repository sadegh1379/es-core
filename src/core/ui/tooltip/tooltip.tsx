import { useEffect, useRef, useState } from 'react';
import { ITooltipPropTypes } from './types';

import styles from './tooltip.module.css';

/**
 *
 * @param tooltip is a reactNode that render as a tooltip
 * @param children tooltip will apply on this
 * @param alignment the position of tooltip (default is top)
 * @param className className of the container
 * @param tooltipClassName className of inner tooltip
 * @param width the width of tooltip
 * @returns a tooltip component
 */
const Tooltip: React.FC<ITooltipPropTypes> = ({ tooltip, children, alignment = 'top', className, tooltipClassName, width }) => {
	const [showTooltip, setShowTooltip] = useState(false);
	const tooltipRef = useRef<HTMLDivElement>(null);

	const handleMouseEnter = () => {
		setShowTooltip(true);
	};

	const handleMouseLeave = () => {
		setShowTooltip(false);
	};

	const handleClick = () => {
		setShowTooltip(!showTooltip);
	};

	useEffect(() => {
		const handleClickOutside = (event: any) => {
			if (tooltipRef.current && !tooltipRef.current.contains(event.target as Node)) {
				setShowTooltip(false);
			}
		};

		document.addEventListener('click', handleClickOutside);

		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, []);

	return (
		<div
			className={`${styles.tooltip_container} ${className ?? ''}`}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onClick={handleClick}
			ref={tooltipRef}
		>
			{children}
			{typeof children === 'string' && <div className={styles.dashed}></div>}
			<div
				className={`${styles.tooltip} ${showTooltip ? styles.active : ''} ${styles[`tooltip-${alignment}`]} ${
					tooltipClassName ?? ''
				}`}
				style={width ? { width } : {}}
			>
				{tooltip}
			</div>
		</div>
	);
};

export default Tooltip;
