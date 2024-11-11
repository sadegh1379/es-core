import type { Meta, StoryObj } from '@storybook/react';
import { Input } from 'core/ui';
import 'core/font/product-sans.css';

const meta: Meta<typeof Input> = {
	title: 'Input',
	component: Input,
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
	argTypes: {
		type: {
			options: ['text', 'number', 'password'],
			control: { type: 'select' },
		},
		variant: {
			options: ['filled', 'outline'],
			control: { type: 'select' },
		},
		error: {
			control: { type: 'text' },
		},
		id: {
			control: { type: 'text' },
		},
		action: {
			control: { type: 'text' },
		},
		leftIcon: {
			control: { type: 'text' },
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const InputView: Story = {
	args: {
		variant: 'filled',
		type: 'text',
		placeholder: 'Email Verification Code',
		label: 'Label',
		action: 'Get Code',
		isActionLoading: true,
	},
};
