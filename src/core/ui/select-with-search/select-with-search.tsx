import { ArrowDownBold, CloseOutline, SearchOutline } from 'icons';
import { Input } from '../input';
import styles from './select-with-search.module.css';
import { MouseEvent, useEffect, useState } from 'react';
import { ISearchItem, ISelectWithSearchProps } from './types';

const SelectWithSearch = ({
	selectItems,
	showMainOrSecondary,
	selectedInputClassName,
	defaultSelectedIndex,
	onSelectHandler,
	dropdownListWrapperClassName,
	mainClassName,
}: ISelectWithSearchProps) => {
	const [selectedItem, setSetSelectedItem] = useState<ISearchItem | null | undefined>(null);
	const [hideList, setHideList] = useState(true);
	const [searchText, setSearchText] = useState<string>('');
	const [displayedItems, setDisplayedItems] = useState<ISearchItem[] | null>(null);

	const RND = Math.random();

	const delInputValue = () => {
		setSearchText('');
		setDisplayedItems(selectItems);
	};

	useEffect(() => {
		window.addEventListener('click', onOutsideClickHandler);

		return () => {
			window.removeEventListener('click', onOutsideClickHandler);
		};
	});

	const onOutsideClickHandler = (e: any) => {
		if (!document.getElementById('search_select_' + RND)!.contains(e.target as any) && !hideList) {
			searchText && delInputValue();
			setHideList(true);
		}
	};

	useEffect(() => {
		setDisplayedItems(selectItems);
		if (defaultSelectedIndex && selectItems && defaultSelectedIndex < selectItems.length)
			setSetSelectedItem(selectItems[defaultSelectedIndex]);
	}, [defaultSelectedIndex, selectItems]);

	const containsText = (item: ISearchItem, searchText: string | null) => {
		if (item.secondaryTxt)
			return searchText
				? item.mainTxt.toLowerCase().indexOf(searchText.toLowerCase()) > -1 ||
						item.secondaryTxt!.toLowerCase().indexOf(searchText.toLowerCase()) > -1
				: true;
		return searchText ? item.mainTxt.toLowerCase().indexOf(searchText.toLowerCase()) > -1 : true;
	};

	const onSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		const searchTxt = e.target.value;
		setSearchText(searchTxt);
		searchTxt || setDisplayedItems(selectItems);
		selectItems && searchTxt && setDisplayedItems(selectItems.filter(item => containsText(item, searchTxt)));
	};

	const onItemSelect = (e: MouseEvent<HTMLElement>) => {
		let clickedItemValue: string | null | undefined;

		if ((e.target as HTMLElement).closest('[data-value]')) {
			clickedItemValue = (e.target as HTMLElement).closest('[data-value]')?.getAttribute('data-value');
		}
		const selectedItem = selectItems?.find(item => item.mainTxt === clickedItemValue);

		selectedItem && onSelectHandler && onSelectHandler(selectedItem);
		searchText && delInputValue();
		setHideList(true);
		selectedItem && setSetSelectedItem(selectedItem);
	};

	return (
		<div className={`${mainClassName ?? ''} ${styles.main_container}`} id={'search_select_' + RND}>
			<div
				className={`${styles.selected_input} ${hideList ? styles.flip : ''} ${(selectedInputClassName ??= '')}`}
				onClick={() => setHideList(pre => !pre)}
			>
				<span>{showMainOrSecondary === 'main' ? selectedItem?.mainTxt : selectedItem?.secondaryTxt}</span>
				<ArrowDownBold />
			</div>

			<div className={`${styles.dropdown_list_wrapper} ${dropdownListWrapperClassName ?? ''} ${hideList ? styles.hide_list : ''}`}>
				<div className={styles.search_input_container}>
					<Input
						type='text'
						variant='outline'
						placeholder='Search...'
						action={searchText ? <CloseOutline className={styles.cross_svg} /> : undefined}
						onActionClickHandler={delInputValue}
						value={searchText}
						onChange={onSearchInput}
						leftIcon={<SearchOutline className={styles.search_icon} />}
						className={styles.search_input}
					/>
				</div>
				<div className={styles.list_container}>
					<ul onClick={onItemSelect}>
						{displayedItems?.map((item, i) => (
							<li data-value={item.mainTxt} key={item.id ?? item.mainTxt + i}>
								<div>
									{item.logoUrl ? <img src={item.logoUrl} alt={item.mainTxt} /> : null}
									<span>{item.mainTxt}</span>
								</div>

								{item.secondaryTxt ? <span>{item.secondaryTxt}</span> : null}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default SelectWithSearch;
