import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from '../core/ui/accordion';
import 'core/font/product-sans.css';

const meta: Meta<typeof Accordion> = {
	title: 'Accordion',
	component: Accordion,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const AccordionView: Story = {
	args: {
		dataList: [
			{
				title: 'How to Create a Bot from predefined strategies?',
				value: (
					<p>
						I am very happy with Botsfolio! To be honest, <br /> I was very skeptical at first (but) I have now made 6% in 5
						days, which I think is a really good profit. (Translated from German) I am very happy with Botsfolio! To be honest,
						I was very skeptical at first (but) I have now made 6% in 5 days, which I think is a really good profit. (Translated
						from German)
					</p>
				),
			},
			{
				title: 'How to Create a Bot from predefined strategies?',
				value: 'I am very happy with Botsfolio! To be honest, I was very skeptical at first (but) I have now made 6% in 5 days, which I think is a really good profit. (Translated from German) I am very happy with Botsfolio! To be honest, I was very skeptical at first (but) I have now made 6% in 5 days, which I think is a really good profit. (Translated from German)',
			},
			{
				title: 'How to Create a Bot from predefined strategies?',
				value: 'which I think is a really good profit. (Translated from German) I am very happy with Botsfolio! To be honest, I was very skeptical at first (but) I have now made 6% in 5 days, which I think is a really good profit. (Translated from German)which I think is a really good profit. (Translated from German) I am very happy with Botsfolio! To be honest, I was very skeptical at first (but) I have now made 6% in 5 days, which I think is a really good profit. (Translated from German)which I think is a really good profit. (Translated from German) I am very happy with Botsfolio! To be honest, I was very skeptical at first (but) I have now made 6% in 5 days, which I think is a really good profit. (Translated from German)which I think is a really good profit. (Translated from German) I am very happy with Botsfolio! To be honest, I was very skeptical at first (but) I have now made 6% in 5 days, which I think is a really good profit. (Translated from German)which I think is a really good profit. (Translated from German) I am very happy with Botsfolio! To be honest, I was very skeptical at first (but) I have now made 6% in 5 days, which I think is a really good profit. (Translated from German)which I think is a really good profit. (Translated from German) I am very happy with Botsfolio! To be honest, I was very skeptical at first (but) I have now made 6% in 5 days, which I think is a really good profit. (Translated from German)',
			},
		],
	},
};
