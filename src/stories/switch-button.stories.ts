import type { Meta, StoryObj } from '@storybook/react';
import SwitchButton from 'core/ui/switch-button/switch-button';

const meta: Meta<typeof SwitchButton> = {
	title: 'SwitchButton',
	component: SwitchButton,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
	argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const SwitchButtonView: Story = {
	args: {
		status: true,
		setStatus: () => {},
	},
};
