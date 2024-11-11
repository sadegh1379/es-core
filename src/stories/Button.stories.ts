import type { Meta, StoryObj } from '@storybook/react';
import { Button } from 'core/ui';
import 'core/font/product-sans.css';

const meta: Meta<typeof Button> = {
	title: 'Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		className: {
			table: {
				disable: true,
			},
		},
		id: {
			table: {
				disable: true,
			},
		},
		href: {
			table: {
				disable: true,
			},
		},
		to: {
			table: {
				disable: true,
			},
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const ButtonView: Story = {
	args: {
		variant: 'primary',
		children: 'Click Me',
		size: 'medium',
		isLoading: false,
		disabled: false,
	},
};
