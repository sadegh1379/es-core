interface ISearchItem {
	id?: number;
	mainTxt: string;
	secondaryTxt?: string;
	logoUrl?: string;
}

interface ISelectWithSearchProps {
	selectItems: ISearchItem[] | null;
	showMainOrSecondary: 'main' | 'secondary';
	selectedInputClassName?: string;
	defaultSelectedIndex?: number;
	onSelectHandler: (selectedItem: ISearchItem) => void;
	dropdownListWrapperClassName?: string;
	mainClassName?: string;
}

export { ISearchItem, ISelectWithSearchProps };
