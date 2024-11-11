import { useState } from 'react';
import styles from './currency-list-drop-down.module.css';
import { SearchOutline } from 'icons';
import { IBuyCryptoCurrencies } from '../types';

type Props = {
	className?: string;
	buyCryptoCurrencies: IBuyCryptoCurrencies[];
	setSelectedCurrency: (currency: string) => void;
};

export const CurrencyListDropDown = ({ className, buyCryptoCurrencies, setSelectedCurrency }: Props) => {
	const [searchPhrase, setSearchPhrase] = useState<string>('');

	const filteredCurrencies = searchPhrase
		? buyCryptoCurrencies.filter(({ name }) => name.toLowerCase().includes(searchPhrase.toLowerCase()))
		: buyCryptoCurrencies;

	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchPhrase(e.target.value);
	};

	const handleCurrency = (e: React.MouseEvent<HTMLElement>) => {
		const target = e.target as HTMLElement;

		if (target.dataset && target.dataset.name) {
			setSelectedCurrency(target.dataset.name);
		}
	};

	return (
		<div className={`${styles.container}  ${className ? className : ''}`}>
			<div className={styles.inner_container}>
				<input type='text' onChange={handleInput} value={searchPhrase} placeholder='Search' className={styles.input} />
				<SearchOutline className={styles.search_icon} />

				<div className={styles.currencies_wrapper}>
					<div className={styles.currencies_container} onClickCapture={handleCurrency}>
						{filteredCurrencies.map(({ name, icon }, index) => (
							<div className={styles.currency_item} data-name={name} key={`filteredCurrencies_${index}`}>
								<img src={icon} alt={name} />
								<span>{name}</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
