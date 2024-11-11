import { FC, ReactNode } from 'react';
import styles from './modal.module.css';
import { CloseOutline } from 'icons';

const Modal: FC<{
	children: ReactNode;
	status: boolean;
	maxWidth: number;
	title?: string | null;
	onClose: () => void;
	mobileView?: boolean;
	className?: string;
}> = ({ children, status, onClose, maxWidth, title = null, mobileView = false, className }) => {
	return (
		<div className={`${styles.modal_container} ${className ?? ''} core-modal-main-container`}>
			<div
				className={`${styles.background} ${status ? styles.active : styles.deactive} core-modal-blur-container`}
				onClick={onClose}
			></div>
			<div
				className={`${styles.modal_panel} ${status ? styles.active : styles.deactive} ${
					mobileView ? styles.mobile_view : ''
				} core-modal-panel-container`}
				style={{ maxWidth: `${maxWidth}px` }}
			>
				{title && (
					<header className={styles.header}>
						<h3>{title}</h3>
						<CloseOutline onClick={onClose} />
					</header>
				)}
				{children}
			</div>
		</div>
	);
};

export default Modal;
