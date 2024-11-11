import React, { FC } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import 'core/font/product-sans.css';
import 'core/css/colors.css';
// @ts-ignore
import styles from './colors.module.css';

const Colors: FC = () => {
	return (
		<div className={styles.container}>
			<div className={styles.row_container}>
				<div className={styles.color_card_container}>
					<div className={`${styles.color_container} ${styles.primary_background_dark_base}`}></div>
					<div className={styles.title}>--color-primary-background-dark-base</div>
					<div className={styles.code}>#000000</div>
				</div>
				<div className={styles.color_card_container}>
					<div className={`${styles.color_container} ${styles.secondary_background_dark_base}`}></div>
					<div className={styles.title}>--color-secondary-background-dark-base</div>
					<div className={styles.code}>#18181A</div>
				</div>
				<div className={styles.color_card_container}>
					<div className={`${styles.color_container} ${styles.tertiary_background_dark_base}`}></div>
					<div className={styles.title}>--color-tertiary-background-dark-base</div>
					<div className={styles.code}>#272729</div>
				</div>
			</div>
			<div className={styles.row_container}>
				<div className={styles.color_card_container}>
					<div className={`${styles.color_container} ${styles.primary_background_dark_elevated}`}></div>
					<div className={styles.title}>--color-primary-background-dark-elevated</div>
					<div className={styles.code}>#1C1C1E</div>
				</div>
				<div className={styles.color_card_container}>
					<div className={`${styles.color_container} ${styles.secondary_background_dark_elevated}`}></div>
					<div className={styles.title}>--color-secondary-background-dark-elevated</div>
					<div className={styles.code}>#2C2C2E</div>
				</div>
				<div className={styles.color_card_container}>
					<div className={`${styles.color_container} ${styles.tertiary_background_dark_elevated}`}></div>
					<div className={styles.title}>--color-tertiary-background-dark-elevated</div>
					<div className={styles.code}>#3A3A3C</div>
				</div>
			</div>
			<div className={styles.row_container}>
				<div className={styles.color_card_container}>
					<div
						className={`${styles.color_container} ${styles.primary_background_light_base}`}
						style={{ border: '1px solid #EBEBEB' }}
					></div>
					<div className={styles.title}>--color-primary-background-light-base</div>
					<div className={styles.code}>#FFFFFF</div>
				</div>
				<div className={styles.color_card_container}>
					<div className={`${styles.color_container} ${styles.secondary_background_light_base}`}></div>
					<div className={styles.title}>--color-secondary-background-light-base</div>
					<div className={styles.code}>#F7F7F7</div>
				</div>
			</div>
			<div className={styles.row_container}>
				<div className={styles.color_card_container}>
					<div className={`${styles.color_container} ${styles.primary_text_dark}`} style={{ border: '1px solid #EBEBEB' }}></div>
					<div className={styles.title}>--color-primary-text-dark</div>
					<div className={styles.code}>#FFFFFF</div>
				</div>
				<div className={styles.color_card_container}>
					<div className={`${styles.color_container} ${styles.secondary_text_dark}`}></div>
					<div className={styles.title}>--color-secondary-text-dark</div>
					<div className={styles.code}>#939393</div>
				</div>
				<div className={styles.color_card_container}>
					<div className={`${styles.color_container} ${styles.tertiary_text_dark}`}></div>
					<div className={styles.title}>--color-tertiary-text-dark</div>
					<div className={styles.code}>#464649</div>
				</div>
				<div className={styles.color_card_container}>
					<div className={`${styles.color_container} ${styles.quaternary_text_dark}`}></div>
					<div className={styles.title}>--color-quaternary-text-dark</div>
					<div className={styles.code}>#2A2A2C</div>
				</div>
			</div>
			<div className={styles.row_container}>
				<div className={styles.color_card_container}>
					<div className={`${styles.color_container} ${styles.primary_text_light}`}></div>
					<div className={styles.title}>--color-primary-text-light</div>
					<div className={styles.code}>#000000</div>
				</div>
				<div className={styles.color_card_container}>
					<div className={`${styles.color_container} ${styles.secondary_text_light}`}></div>
					<div className={styles.title}>--color-secondary-text-light</div>
					<div className={styles.code}>#6D6D70</div>
				</div>
				<div className={styles.color_card_container}>
					<div className={`${styles.color_container} ${styles.tertiary_text_light}`}></div>
					<div className={styles.title}>--color-tertiary-text-light</div>
					<div className={styles.code}>#BEBEC0</div>
				</div>
				<div className={styles.color_card_container}>
					<div className={`${styles.color_container} ${styles.quaternary_text_light}`}></div>
					<div className={styles.title}>--color-quaternary-text-light</div>
					<div className={styles.code}>#D4D4D5</div>
				</div>
			</div>
			<div className={styles.row_container}>
				<div className={styles.color_card_container}>
					<div className={`${styles.color_container} ${styles.primary_separator_light}`}></div>
					<div className={styles.title}>--color-primary-separator-light</div>
					<div className={styles.code}>#E1E3E5</div>
				</div>
				<div className={styles.color_card_container}>
					<div className={`${styles.color_container} ${styles.primary_separator_dark}`}></div>
					<div className={styles.title}>--color-primary-separator-dark</div>
					<div className={styles.code}>#3A3A3C</div>
				</div>
			</div>
			<div className={styles.row_container}>
				<div className={styles.color_card_container}>
					<div className={`${styles.color_container} ${styles.success_text_light}`}></div>
					<div className={styles.title}>--color-success-text-light</div>
					<div className={styles.code}>#009B79</div>
				</div>
				<div className={styles.color_card_container}>
					<div className={`${styles.color_container} ${styles.success_container_light}`}></div>
					<div className={styles.title}>--color-success-container-light</div>
					<div className={styles.code}>#D7F5E3</div>
				</div>
			</div>
			<div className={styles.row_container}>
				<div className={styles.color_card_container}>
					<div className={`${styles.color_container} ${styles.success_text_dark}`}></div>
					<div className={styles.title}>--color-success-text-dark</div>
					<div className={styles.code}>#06D6A9</div>
				</div>
				<div className={styles.color_card_container}>
					<div className={`${styles.color_container} ${styles.success_container_dark}`}></div>
					<div className={styles.title}>--color-success-container-dark</div>
					<div className={styles.code}>#1F3C35</div>
				</div>
			</div>
			<div className={styles.row_container}>
				<div className={styles.color_card_container}>
					<div className={`${styles.color_container} ${styles.error_text_light}`}></div>
					<div className={styles.title}>--color-error-text-light</div>
					<div className={styles.code}>#E51717</div>
				</div>
				<div className={styles.color_card_container}>
					<div className={`${styles.color_container} ${styles.error_container_light}`}></div>
					<div className={styles.title}>--color-error-container-light</div>
					<div className={styles.code}>#FFE3E3</div>
				</div>
			</div>
			<div className={styles.row_container}>
				<div className={styles.color_card_container}>
					<div className={`${styles.color_container} ${styles.error_text_dark}`}></div>
					<div className={styles.title}>--color-error-text-dark</div>
					<div className={styles.code}>#FF6961</div>
				</div>
				<div className={styles.color_card_container}>
					<div className={`${styles.color_container} ${styles.error_container_dark}`}></div>
					<div className={styles.title}>--color-error-container-dark</div>
					<div className={styles.code}>#4C2020</div>
				</div>
			</div>
		</div>
	);
};

const meta: Meta<typeof Colors> = {
	title: 'Colors',
	component: Colors,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const ColorsVariables: Story = {
	args: {},
};
