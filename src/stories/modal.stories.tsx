import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import 'core/font/product-sans.css';
import { FC } from 'react';

import { Modal } from '../core/ui/modal';
import { Button } from '../core/ui/button';

const ModalContainer: FC<{
	maxWidth: number;
	mobileView: boolean;
}> = ({ maxWidth, mobileView }) => {
	const [status, setStatus] = useState<boolean>(false);
	const [statusTmp, setStatusTmp] = useState<boolean>(false);

	const onCloseClickHandler = () => {
		setStatusTmp(false);
		setTimeout(() => {
			setStatus(false);
		}, 300);
	};

	return (
		<>
			<Button
				variant='primary'
				size='medium'
				onClick={() => {
					setStatus(true);
					setStatusTmp(true);
				}}
			>
				open
			</Button>
			{status && (
				<Modal maxWidth={maxWidth} status={statusTmp} onClose={onCloseClickHandler} title='asdasd' mobileView={mobileView}>
					ffff
				</Modal>
			)}
		</>
	);
};

const meta: Meta<typeof ModalContainer> = {
	title: 'Modal',
	component: ModalContainer,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const ModalView: Story = {
	args: {
		maxWidth: 200,
		mobileView: true,
	},
};
