import type { Meta, StoryObj } from '@storybook/react';

import 'core/font/product-sans.css';
import { Select } from '../core/ui/select';
import React, { FC, useState } from 'react';
import { SelectPropTypes } from '../core/ui/select/types';

const CustomSelect: FC<SelectPropTypes> = props => {
	const { value, onChange, ...extra } = props;
	const [_value, setValue] = useState<string>('');

	return <Select {...extra} onChange={(value: string) => setValue(value)} value={_value} onClearSelected={() => setValue('')} />;
};

const meta: Meta<typeof CustomSelect> = {
	title: 'Select',
	component: CustomSelect,
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
	argTypes: {
		size: {
			options: ['small', 'medium'],
			control: { type: 'select' },
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const SelectView: Story = {
	args: {
		list: [
			// {
			// 	key: 'BTC',
			// 	value: {
			// 		imgUrl: 'https://clycpublic.ams3.cdn.digitaloceanspaces.com/assets/BTC.png',
			// 		primaryTxt: 'BTC',
			// 		secondaryTxt: 'Bitcoin',
			// 	},
			// },
			// {
			// 	key: 'ETH',
			// 	value: {
			// 		imgUrl: 'https://clycpublic.ams3.cdn.digitaloceanspaces.com/assets/ETH.png',
			// 		primaryTxt: 'ETH',
			// 		secondaryTxt: 'Ethereum',
			// 	},
			// },
			{
				key: 'BTC',
				value: 'BITCOIN',
			},
			{
				key: 'ETH',
				value: 'ETHER',
			},
			// 'BTC',
			// 'ETH',
		],
		search: true,
		label: 'Status:',
		id: 'select_box',
		size: 'small',
	},
};
