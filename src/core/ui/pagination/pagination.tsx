import { ChangeEvent, FC, useEffect, useState } from 'react';
import { IPaginationPropsType } from './type';

import styles from './pagination.module.css';
import { ArrowLeftMiniOutline, ArrowRightMiniOutline } from 'icons';
import { Input } from '../input';

const Pagination: FC<IPaginationPropsType> = ({ currentPage, totalPages, className, onChange }) => {
	const [pagination, setPagination] = useState<{ page: number | null; debounce: boolean }>({ page: null, debounce: true });
	useEffect(() => {
		setPagination({ page: currentPage, debounce: true });
	}, []);

	useEffect(() => {
		if (pagination.page && pagination.page !== currentPage && pagination.debounce) {
			const DelayedBouncer = setTimeout(() => {
				onChange(pagination.page!);
			}, 600);
			return () => clearTimeout(DelayedBouncer);
		}
	}, [pagination.page]);

	const onInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		const data = e.target.value;
		if (data === '') {
			setPagination({ page: null, debounce: false });
		} else {
			if (+data < 1) {
				setPagination({ page: 1, debounce: true });
			} else if (+data > totalPages) {
				setPagination({ page: totalPages, debounce: true });
			} else {
				setPagination({ page: +data, debounce: true });
			}
		}
	};

	const onPrevClickHandler = () => {
		if (pagination.page && pagination.page > 1) {
			onChange(pagination.page - 1);
			setPagination({ page: pagination.page - 1, debounce: false });
		}
	};
	const onNextClickHandler = () => {
		if (pagination.page && pagination.page < totalPages) {
			onChange(pagination.page + 1);
			setPagination({ page: pagination.page + 1, debounce: false });
		} else if (!pagination.page) {
			if (currentPage !== 1) {
				onChange(1);
			}
			setPagination({ page: 1, debounce: false });
		}
	};

	if (totalPages < 2) return null;

	return (
		<div className={`${styles.pagination_container} ${className ?? ''}`}>
			<ArrowLeftMiniOutline
				className={`${styles.prev} ${!pagination.page || pagination.page === 1 ? styles.disable : ''}`}
				onClick={onPrevClickHandler}
			/>
			<div className={styles.page_title}>Page:</div>
			<Input
				variant='filled'
				type='number'
				onKeyDown={evt => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
				step={1}
				onWheel={e => e.currentTarget.blur()}
				className={styles.input}
				value={pagination.page ?? ''}
				placeholder={`${totalPages}`}
				style={{ width: `calc(${totalPages.toString().length}ch + 24px)` }}
				onChange={onInputChangeHandler}
			/>
			<div className={styles.total}>/{totalPages}</div>
			<ArrowRightMiniOutline
				className={`${styles.next} ${pagination.page && pagination.page === totalPages ? styles.disable : ''}`}
				onClick={onNextClickHandler}
			/>
		</div>
	);
};

export default Pagination;
