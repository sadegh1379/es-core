import { ArrowDownOutline, ArrowSwapOutline, ArrowUpOutline, EmptyBoldDark, EmptyBoldLight } from 'icons';
import { useMemo, useState } from 'react';
import styles from './table.module.css';
import { ISort, TablePropsTypes } from './types';
import { RingLoader } from '../loader';
import { useTranslation } from 'react-i18next';

const Table = ({ data, headers, onSort, defaultSort, className, headerClassName, tableClassName, noDataTitle }: TablePropsTypes) => {
	const { t } = useTranslation('table');
	const [sort, setSort] = useState<ISort>(
		defaultSort
			? { ...defaultSort }
			: {
					key: '',
					sortType: null,
			  },
	);

	const memoizedHeaders = useMemo(() => headers, [headers]);

	const sortHandler = (key: string) => {
		if (key === sort.key) {
			const sortType = sort.sortType === 'DESC' ? 'ASC' : 'DESC';
			setSort({
				key,
				sortType,
			});
			onSort?.(key, sortType);
		} else {
			setSort({
				key: key,
				sortType: 'DESC',
			});
			onSort?.(key, 'DESC');
		}
	};

	const renderRows = () => {
		return data?.map((row, rowIndex) => (
			<tr className={`${styles.tbody_tr}`} key={`tr-item-${rowIndex}`}>
				{row.map((cell, colIndex) => (
					<td className={`${styles.tbody_td}`} key={`td-item-${colIndex}`}>
						{cell}
					</td>
				))}
			</tr>
		));
	};

	const sortViewHandler = (key: string) => {
		if (key === sort.key && sort.sortType !== null) {
			return sort.sortType === 'DESC' ? (
				<ArrowDownOutline className={styles.sort_icon} />
			) : (
				<ArrowUpOutline className={styles.sort_icon} />
			);
		}
		return <ArrowSwapOutline className={styles.sort_icon} />;
	};

	return (
		<div className={`${styles.container} ${className || ''}`}>
			<table className={`${styles.table} ${tableClassName || ''}`}>
				<thead className={`${headerClassName || ''}`}>
					<tr className={`${headerClassName || ''}`}>
						{memoizedHeaders.map((column, index) =>
							column.sortable && column.key ? (
								<th
									key={`th-item-${index}`}
									onClick={() => sortHandler(column.key as string)}
									className={`${styles.thead_th} ${styles.pointer}`}
								>
									<div className={`${styles.sortContainer}`}>
										{column.child}
										{column.sortable && (
											<span className={`${styles.column_filter}`}>{sortViewHandler(column.key)}</span>
										)}
									</div>
								</th>
							) : (
								<th key={`th-item-${index}`} className={`${styles.thead_th}`}>
									<div className={`${styles.sortContainer}`}>{column.child}</div>
								</th>
							),
						)}
					</tr>
				</thead>
				<tbody>{data && data.length > 0 && renderRows()}</tbody>
			</table>
			{data === null && (
				<div className={styles.loading_container}>
					<RingLoader />
				</div>
			)}
			{data && data.length === 0 && (
				<div className={styles.empty_container}>
					<div>
						<EmptyBoldLight width={120} height={125} className={styles.empty_light_icon} />
						<EmptyBoldDark width={120} height={125} className={styles.empty_dark_icon} />
						<p className={styles.not_found_text}>{noDataTitle || t('no-data-found')}</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default Table;
