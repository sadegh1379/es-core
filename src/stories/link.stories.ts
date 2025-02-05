import type { Meta, StoryObj } from '@storybook/react';
import { Link } from 'core/ui';
import 'core/font/product-sans.css';

const meta: Meta<typeof Link> = {
	title: 'Link',
	component: Link,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const LinkView: Story = {
	args: {
		children: 'Click Me',
		href: "/"
	},
};
