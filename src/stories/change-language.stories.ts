import type { Meta, StoryObj } from '@storybook/react';
import 'core/font/product-sans.css';
import { ChangeLanguageModal } from 'core/ui/change-language';

const meta: Meta<typeof ChangeLanguageModal> = {
	title: 'Change Language Modal',
	component: ChangeLanguageModal,
	parameters: {
		layout: 'fullscreen',
	},
	tags: ['autodocs'],
	argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const ChangeLanguageModalView: Story = {
	args: {
		status: true,
	},
};
