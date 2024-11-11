import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from '../core/ui/radio';
import 'core/font/product-sans.css';
import { FC } from 'react';
import { RadioPropTypes } from '../core/ui/radio/types';
import React from 'react';

const RadioButton: FC<RadioPropTypes> = props => {
	return (
		<>
			<Radio {...props} label={'option1'}/>
			<Radio {...props} label={'option2'} style={{marginTop:'12px'}}/>
		</>
	);
};

const meta: Meta<typeof RadioButton> = {
	title: 'Radio',
	component: RadioButton,
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
export const RadioView: Story = {
	args: {
		name: 'ali',
	},
};
