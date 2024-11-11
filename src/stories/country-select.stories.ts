import type { Meta, StoryObj } from '@storybook/react';
import { CountrySelect } from 'core';
import 'core/font/product-sans.css';

const meta: Meta<typeof CountrySelect> = {
	title: 'CountrySelect',
	component: CountrySelect,
	argTypes: {},
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const CountrySelectView: Story = {
	args: {
		label: 'Which country or region do you plan on marketing in?',
		id: 'sssssss-ddd',
		size: 'small',
		placeholder: 'Select',
		value: '',
	},
};
