import type { Meta, StoryObj } from '@storybook/react';
import 'core/font/product-sans.css';
import PhoneInput from 'core/ui/phone-input/phone-input';

const meta: Meta<typeof PhoneInput> = {
	title: 'PhoneInputView',
	component: PhoneInput,
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
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PhoneInputView: Story = {
	args: {
		variant: 'filled',
	},
};
