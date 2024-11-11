import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import 'core/font/product-sans.css';
import { Tooltip } from '../core/ui/tooltip';

const meta: Meta<typeof Tooltip> = {
	title: 'Tooltip',
	component: Tooltip,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
	argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const TooltipStringView: Story = {
	args: {
		children: 'show Tooltip',
		tooltip: 'this is sample tooltip for visibility.sxsxsxsxsxsxsx',
		width: 'max-content',
	},
};

export const TooltipView: Story = {
	args: {
		children: <span>Show Tooltip</span>,
		tooltip: 'this is sample tooltip for visibility.sxsxsxsxsxsxsx',
		width: 'max-content',
	},
};
