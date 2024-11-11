import type { Meta, StoryObj } from '@storybook/react';
import 'core/font/product-sans.css';
import { FC, useState } from 'react';
import React from 'react';

import { IPaginationPropsType } from '../core/ui/pagination/type';
import { Pagination } from '../core/ui';

const Paginator: FC<IPaginationPropsType> = props => {
	const [page, setPage] = useState<number>(1);
	return (
		<Pagination
			totalPages={props.totalPages}
			currentPage={page}
			onChange={_page => {
				setPage(_page);
				props.onChange(_page);
			}}
		/>
	);
};

const meta: Meta<typeof Pagination> = {
	title: 'Pagination',
	component: Paginator,
	parameters: {
		layout: 'centered',
		backgrounds: {
			default: 'light',
			values: [
				{
					name: 'light',
					value: '#FFFFFF',
				},
				{
					name: 'dark',
					value: '#18181A',
				},
			],
		},
	},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const PaginationView: Story = {
	args: {
		currentPage: 1,
		totalPages: 3243,
		onChange(date) {
			console.log(date);
		},
	},
};
