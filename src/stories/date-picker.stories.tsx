import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker as DatePickerUI } from '../core/ui/date-picker';
import 'core/font/product-sans.css';
import { FC } from 'react';
import { IDatePickerPropType } from '../core/ui/date-picker/types';
import React from 'react';

const DatePicker: FC<IDatePickerPropType> = props => {
	return <DatePickerUI {...props} />;
};

const meta: Meta<typeof DatePicker> = {
	title: 'DatePicker',
	component: DatePickerUI,
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
export const DatePickerView: Story = {
	args: {
		type: 'range',
		value: [null, null],
		onChange(date) {
			console.log(date);
		},
		// maxDate: moment().add(2, 'd').toDate().getTime(),
	},
};
