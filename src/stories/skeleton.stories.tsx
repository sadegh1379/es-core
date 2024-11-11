import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import 'core/font/product-sans.css';
import { ISkeleton } from '../core/ui/skeleton/types';
import { FC } from 'react';
import { Skeleton } from '../core/ui/skeleton';

const SkeletonComponent: FC<ISkeleton> = props => {
	return <Skeleton {...props} />;
};

const meta: Meta<typeof SkeletonComponent> = {
	title: 'Skeleton',
	component: SkeletonComponent,
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
	args: {
		width: '100px',
		component: 'span',
	},
	argTypes: {
		variant: {
			options: ['text', 'rectangular', 'rounded', 'circular'],
			control: { type: 'radio' },
		},

		component: {
			control: { type: 'text' },
		},
		width: {
			control: { type: 'text' },
		},
		height: {
			control: { type: 'text' },
		},
		className: {
			control: { type: 'text' },
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Text: Story = {
	args: {
		variant: 'text',
	},
};
export const Rectangular: Story = {
	args: {
		height: '100px',
		variant: 'rectangular',
	},
};
export const Rounded: Story = {
	args: {
		variant: 'rounded',
	},
};
export const Circular: Story = {
	args: {
		height: '100px',
		variant: 'circular',
	},
};
