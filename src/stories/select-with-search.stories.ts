import type { Meta, StoryObj } from '@storybook/react';
import { SelectWithSearch } from 'core';
import 'core/font/product-sans.css';

const meta: Meta<typeof SelectWithSearch> = {
	title: 'SelectWithSearchView',
	component: SelectWithSearch,
	argTypes: {},
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SelectWithSearchView: Story = {
	args: {
		defaultSelectedIndex: 5,
		showMainOrSecondary: 'secondary',

		selectItems: [
			{
				id: 247,
				mainTxt: 'Afghanistan',
				secondaryTxt: '+93',
				logoUrl: 'https://clycpublic.ams3.cdn.digitaloceanspaces.com/countries/AF.png',
			},
			{
				id: 248,
				mainTxt: 'Aland Islands',
				secondaryTxt: '+358',
				logoUrl: 'https://clycpublic.ams3.cdn.digitaloceanspaces.com/countries/AX.png',
			},
			{
				id: 249,
				mainTxt: 'Albania',

				secondaryTxt: '+355',
				logoUrl: 'https://clycpublic.ams3.cdn.digitaloceanspaces.com/countries/AL.png',
			},
			{
				id: 250,
				mainTxt: 'Algeria',

				secondaryTxt: '+213',
				logoUrl: 'https://clycpublic.ams3.cdn.digitaloceanspaces.com/countries/DZ.png',
			},
			{
				id: 251,
				mainTxt: 'American Samoa',

				secondaryTxt: '+1684',
				logoUrl: 'https://clycpublic.ams3.cdn.digitaloceanspaces.com/countries/AS.png',
			},
			{
				id: 252,
				mainTxt: 'Andorra',

				secondaryTxt: '+376',
				logoUrl: 'https://clycpublic.ams3.cdn.digitaloceanspaces.com/countries/AD.png',
			},
		],
	},
};
