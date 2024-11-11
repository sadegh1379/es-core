import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import 'core/font/product-sans.css';
import { H1, H2, H3, H4, H5, H6 } from '../core/ui/headings';
import { FC } from 'react';
import { textPropTypes } from '../core/ui/headings/types';

enum HeadingType {
	H1 = 'H1',
	H2 = 'H2',
	H3 = 'H3',
	H4 = 'H4',
	H5 = 'H5',
	H6 = 'H6',
}

const Headings: FC<textPropTypes & { type: HeadingType }> = ({ type, children, ...props }) => {
	switch (type) {
		case HeadingType.H1:
			return <H1 {...props}>{children}</H1>;
		case HeadingType.H2:
			return <H2 {...props}>{children}</H2>;
		case HeadingType.H3:
			return <H3 {...props}>{children}</H3>;
		case HeadingType.H4:
			return <H4 {...props}>{children}</H4>;
		case HeadingType.H5:
			return <H5 {...props}>{children}</H5>;
		case HeadingType.H6:
			return <H6 {...props}>{children}</H6>;
		default:
			return null;
	}
};

const meta: Meta<typeof Headings> = {
	title: 'Heading',
	component: Headings,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		type: {
			options: ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'],
			control: { type: 'select' },
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Level1: Story = {
	args: {
		type: HeadingType.H1,
		children: (
			<>
				Heading 1 <strong>Bold</strong>
			</>
		),
	},
};
export const Level2: Story = {
	args: {
		type: HeadingType.H2,
		children: (
			<>
				Heading 2 <strong>Bold</strong>
			</>
		),
	},
};
export const Level3: Story = {
	args: {
		type: HeadingType.H3,
		children: 'Heading 3',
	},
};
export const Level4: Story = {
	args: {
		type: HeadingType.H4,
		children: 'Heading 4',
	},
};
export const Level5: Story = {
	args: {
		type: HeadingType.H5,
		children: 'Heading 5',
	},
};
export const Level6: Story = {
	args: {
		type: HeadingType.H6,
		children: 'Heading 6',
	},
};
