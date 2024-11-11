import { Link } from 'react-router-dom';
import { INavbarSideConfig, IBuyCryptoCurrencies } from '../types';
import styles from './nested-drop-down.module.css';
import simpleDropDownStyles from './simple-drop-down.module.css';
import { ArrowRightBold } from 'icons';
import { FC, useState } from 'react';
import { CurrencyListDropDown } from './currency-list-drop-down';
import { useTranslation } from 'react-i18next';

export const NestedDropDown: FC<{
	subMenu: INavbarSideConfig['subMenu'];
	language: string;
	buyCryptoCurrencies: IBuyCryptoCurrencies[];
	isLinkExternal: boolean;
	className?: string;
}> = ({ subMenu, language, buyCryptoCurrencies, className, isLinkExternal }) => {
	const { t } = useTranslation('navbar');
	const [selectedCurrency, setSelectedCurrency] = useState<string | null>(null);

	const coinInfoMaker = (coinName: string) => {
		const selectedCoinData = buyCryptoCurrencies.find(({ name }) => name === coinName);
		if (selectedCoinData)
			return (
				<div className={styles.currency_item}>
					<img src={selectedCoinData.icon} alt={selectedCoinData.name} />
					<span>{selectedCoinData.name}</span>
				</div>
			);
	};

	return (
		<>
			<div className={`${styles.drop_down_wrapper}  ${className ? className : ''}`}>
				<div className={styles.paywith_container}>
					<span>{t('pay-with')}</span>
					<div className={styles.paywith_right_item}>
						{selectedCurrency ? coinInfoMaker(selectedCurrency) : null}

						<ArrowRightBold fill='#6D6D70' width='12px' height='12px' />
					</div>
					<CurrencyListDropDown
						className={styles.show_currency_list}
						buyCryptoCurrencies={buyCryptoCurrencies}
						setSelectedCurrency={setSelectedCurrency}
					/>
				</div>
				{subMenu?.map((item, index) =>
					isLinkExternal ? (
						<a
							key={`drop_${item.title}_${index}`}
							className={simpleDropDownStyles.drop_down_item}
							href={`https://coinlocally.com/${language}/${item.link}${
								selectedCurrency ? `?pair=USDT-${selectedCurrency}` : ''
							}`}
							id={item.id}
						>
							<div className={simpleDropDownStyles.icon_container}>{item.icon}</div>
							<div className={simpleDropDownStyles.title}>{item.title}</div>
							<div className={simpleDropDownStyles.description}>{item.description}</div>
						</a>
					) : (
						<Link
							key={`drop_${item.title}_${index}`}
							className={simpleDropDownStyles.drop_down_item}
							to={item.link ? `/${language}/${item.link}${selectedCurrency ? `?pair=USDT-${selectedCurrency}` : ''}` : ''}
							id={item.id}
						>
							<div className={simpleDropDownStyles.icon_container}>{item.icon}</div>
							<div className={simpleDropDownStyles.title}>{item.title}</div>
							<div className={simpleDropDownStyles.description}>{item.description}</div>
						</Link>
					),
				)}
			</div>
			<div className={`${styles.drop_down_container} ${className ? className : ''}`}></div>
		</>
	);
};
