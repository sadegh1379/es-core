import type { Meta, StoryObj } from '@storybook/react';
import 'core/font/product-sans.css';
import Footer from 'core/ui/footer/footer';

const meta: Meta<typeof Footer> = {
	title: 'Footer',
	component: Footer,
	parameters: {
		layout: 'fullscreen',
	},
	tags: ['autodocs'],
	argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const FooterView: Story = {
	args: {
		onLanguageClickHandler: lng => {
			console.log(lng);
		},
	},
};
