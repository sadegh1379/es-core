interface IPaginationPropsType {
	className?: string;
	currentPage: number;
	totalPages: number;
	onChange: (page: number) => void;
}

export type { IPaginationPropsType };
