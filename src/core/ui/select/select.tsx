import { FC, isValidElement, useEffect, useState } from 'react';
import styles from './select.module.css';
import { SelectPropTypes, Value } from './types';
import { ArrowDownBold, CloseOutline, SearchOutline } from 'icons';
import { Input } from '../input';

const Select: FC<SelectPropTypes> = ({
	className,
	label,
	list,
	value,
	id,
	search,
	size = 'medium',
	containerClassName,
	placeholder,
	onChange,
	onOpen,
	renderOption,
	onClearSelected,
	renderSelected,
}) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [activeItem, setActiveItem] = useState<Value>(value);

	const [searchTxt, setSearchTxt] = useState<string>('');

	useEffect(() => {
		window.addEventListener('click', onOutsideClickHandler);

		return () => {
			window.removeEventListener('click', onOutsideClickHandler);
		};
	});

	const onOutsideClickHandler = (e: any) => {
		if (!document.getElementById(id)!.contains(e.target as any) && isOpen) {
			setIsOpen(false);
		}
	};

	const onOpenClickHandler = () => {
		setIsOpen(!isOpen);
		if (!isOpen && onOpen) {
			onOpen();
		}
	};

	const onItemClickHandler = (option: string | { key: unknown; value: Value }) => {
		if (activeItem !== option) {
			if (typeof option === 'string') {
				setActiveItem(option);
				onChange(option);
			} else {
				setActiveItem(option.value);
				onChange(option.key);
			}
			setIsOpen(false);
		}
	};

	const renderSelectedValue = () => {
		if (renderSelected) {
			return renderSelected(value);
		} else {
			if (value === '') {
				if (placeholder) {
					return placeholder;
				} else {
					return '';
				}
			} else {
				if (Object.keys(list[0]).includes('key') && typeof value === 'string') {
					let _value = (list as { key: string; value: Value }[]).find(item => item.key === value);
					if (isValidElement(_value?.value) || typeof _value?.value === 'string') {
						return _value?.value;
					} else {
						let valueObject = _value?.value as { imgUrl?: string; primaryTxt?: string; secondaryTxt?: string };
						return (
							<>
								{valueObject.imgUrl && <img src={valueObject.imgUrl} alt='' />}
								{valueObject.primaryTxt && <span className={styles.primary_txt}>{valueObject.primaryTxt}</span>}
								{valueObject.secondaryTxt && <span className={styles.secondary_txt}>{valueObject.secondaryTxt}</span>}
							</>
						);
					}
				} else if (typeof value === 'string') {
					return value;
				}
			}
		}
	};
	const renderValue = (value: Value) => {
		if (renderOption) {
			return renderOption(value);
		} else {
			if (Object.keys(list[0]).includes('key') && typeof value === 'string') {
				return value;
			} else if (Object.keys(list[0]).includes('key') && isValidElement(value)) {
				return value;
			} else {
				let _value = value as { imgUrl?: string; primaryTxt?: string; secondaryTxt?: string };
				return (
					<>
						{_value.imgUrl && <img src={_value.imgUrl} alt='' />}
						{_value.primaryTxt && <span className={styles.primary_txt}>{_value.primaryTxt}</span>}
						{_value.secondaryTxt && <span className={styles.secondary_txt}>{_value.secondaryTxt}</span>}
					</>
				);
			}
		}
	};
	const onSearchFilter = (item: { key: string; value: Value } | string) => {
		if (item === null) {
			return false; // or handle null case as needed
		}

		if (typeof item === 'object') {
			const itemValues = Object.values(item.value || {}).map(value => (value as string).toLowerCase());
			const searchLowerCase = searchTxt.toLowerCase();

			if (typeof item.value === 'string') {
				return item.value.toString().toLocaleLowerCase().includes(searchLowerCase);
			} else {
				return itemValues.some(value => value.includes(searchLowerCase));
			}
		} else if (typeof item === 'string' && typeof list[0] === 'string') {
			return item.toLowerCase().includes(searchTxt.toLowerCase());
		} else {
			return true;
		}
	};

	const onClearClickHandler = () => {
		if (onClearSelected) {
			setActiveItem('');
			onClearSelected();
		}
	};

	return (
		<div className={`${styles.container} ${className ?? ''} select_core`} id={id}>
			{label && <div className={`${styles.label} select_core_label`}>{label}</div>}
			<div className={styles.select_flex_container}>
				<div
					className={`${styles.select_container} ${isOpen ? styles.active : ''} ${styles[size]} core_select_container ${
						containerClassName ?? ''
					}`}
					onClick={onOpenClickHandler}
				>
					<span>{renderSelectedValue()}</span>
					<span>
						{onClearSelected && activeItem !== '' && (
							<CloseOutline className={styles.select_clear} onClick={onClearClickHandler} style={{ marginRight: '2px' }} />
						)}
						<ArrowDownBold className={styles.select_arrow} />
					</span>
				</div>

				<div className={`${styles.option_list} ${styles[size]} ${isOpen ? styles.active : ''} core_select_option_list`}>
					{search && ((typeof list[0] === 'object' && !isValidElement(list[0].value)) || typeof list[0] === 'string') && (
						<Input
							variant='outline'
							type='text'
							leftIcon={<SearchOutline />}
							className={styles.search_input}
							value={searchTxt}
							onChange={e => setSearchTxt(e.target.value)}
						/>
					)}
					{/* @ts-ignore */}
					{(search ? list.filter(onSearchFilter) : list).map((item, index) => (
						<div
							className={`${styles.option_item} ${
								(typeof item === 'string' ? item === value : item.key === value)
									? `${styles.active} core_select_option_active`
									: 'core_select_option'
							}`}
							key={`core_select_option_${index}_${item}`}
							onClick={() => onItemClickHandler(item)}
						>
							{typeof item === 'string' ? item : renderValue(item.value)}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Select;
