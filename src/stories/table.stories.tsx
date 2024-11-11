import type { Meta, StoryObj } from '@storybook/react';
import 'core/font/product-sans.css';
import React, { FC } from 'react';
import { TSortType, TablePropsTypes } from '../core/ui/table/types';
import { Table } from '../core/ui/table';

const HEADERS = [
	{
		child: 'Trade exec. time',
		key: 'time',
		sortable: true,
	},
	{ child: 'Level', key: 'level', sortable: true },
	{ child: 'Client ID' },
	{ child: 'Account ID' },
	{ child: 'Trade ID' },
	{ child: 'Side' },
	{ child: 'Symbol' },
	{ child: 'Vol.,lots' },
	{ child: 'Reward Amount' },
	{ child: 'Transaction ID' },
];

const DATA = [
	['2022/05/26 15:25:04', '4', '1', '109402', '5986', <p>Buy</p>, 'BTCUSD', '0.01', '0.07 USD', '396'],
	['2022/05/26 15:25:04', '4', '1', '109402', '5986', <p>Buy</p>, 'BTCUSD', '0.01', '0.07 USD', '396'],
	['2022/05/26 15:25:04', '4', '1', '109402', '5986', <p>Buy</p>, 'BTCUSD', '0.01', '0.07 USD', '396'],
	['2022/05/26 15:25:04', '4', '1', '109402', '5986', <p>Buy</p>, 'BTCUSD', '0.01', '0.07 USD', '396'],
	['2022/05/26 15:25:04', '4', '1', '109402', '5986', <p>Buy</p>, 'BTCUSD', '0.01', '0.07 USD', '396'],
];

const TableComponent: FC<TablePropsTypes> = props => {
	return (
		<>
			<Table {...props} />
		</>
	);
};

const meta: Meta<typeof TableComponent> = {
	title: 'Table',
	component: TableComponent,
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

export const TableView: Story = {
	args: {
		data: DATA,
		headers: HEADERS,
		onSort: (key: string, sortType: TSortType) => {},
		defaultSort: {
			key: 'id',
			sortType: 'ASC',
		},
	},
};

export const TableEmptyView: Story = {
	args: {
		data: [],
		headers: HEADERS,
		noDataTitle: 'No one has logged in with your link yet',
		onSort: (key: string, sortType: TSortType) => {},
		defaultSort: {
			key: 'id',
			sortType: 'ASC',
		},
	},
};

export const TableLoadingView: Story = {
	args: {
		data: null,
		headers: HEADERS,
		onSort: (key: string, sortType: TSortType) => {},
		defaultSort: {
			key: 'id',
			sortType: 'ASC',
		},
	},
};
