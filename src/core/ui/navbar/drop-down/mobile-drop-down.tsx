import { Dispatch, FC, SetStateAction, useState } from 'react';
import { IBuyCryptoCurrencies, INavbarSideConfig } from '../types';
import styles from './mobile-drop-down.module.css';
import { Link } from 'react-router-dom';
// import { CurrencyListDropDown } from './currency-list-drop-down';
import { ArrowDownBold } from 'icons';

export const MobileDropDown: FC<{
	item: INavbarSideConfig;
	language: string;
	isLinkExternal: boolean;
	buyCryptoCurrencies?: IBuyCryptoCurrencies[];
	className?: string;
	index: number;
	setOpenMenu: Dispatch<SetStateAction<boolean>>;
}> = ({ language, buyCryptoCurrencies, className, isLinkExternal, index, item, setOpenMenu }) => {
	const [sidebarSubMenu, setSidebarSubMenu] = useState<string>('');
	// const [selectedCurrency, setSelectedCurrency] = useState<string | null>(null);

	const handleDD = (key: string) => {
		setSidebarSubMenu(sidebarSubMenu === key ? '' : key);
	};

	// const coinInfoMaker = (coinName: string) => {
	// 	const selectedCoinData = buyCryptoCurrencies?.find(({ name }) => name === coinName);
	// 	if (selectedCoinData)
	// 		return (
	// 			<div className={styles.currency_item}>
	// 				<img src={selectedCoinData.icon} alt={selectedCoinData.name} />
	// 				<span>{selectedCoinData.name}</span>
	// 			</div>
	// 		);
	// };
	return (
		<ul key={'side_top_' + index} className={styles.dropdown_item} onClick={() => handleDD(`side_top${index}`)} id={item.id}>
			<li className={styles.dropdown_title}>
				<span className={styles.dropDown_icon}>{item.icon}</span>
				<span>{item.title}</span>
				{item.badge?.type === 'NEW' && <div className={styles.new_badge}>NEW</div>}
				{item.badge?.type === 'HOT' && <div className={styles.hot_badge}>HOT</div>}

				{item.badge?.type === 'CUSTOM' && item.badge.afterIcon && item.badge.afterIcon}
				<ArrowDownBold
					className={`${styles.side_arrow_down} ${sidebarSubMenu === `side_top${index}` ? styles.arrow_up : ''}`}
					onClick={() => setSidebarSubMenu('side_top_' + index)}
				/>
			</li>
			{buyCryptoCurrencies ? (
				<>
					{/* <li className={`${styles.drop_down_wrapper}  ${className ? className : ''}`}>
						<div className={styles.pay_with_container}>
							<span>Pay With</span>
							<div className={styles.pay_with_right_item}>{selectedCurrency ? coinInfoMaker(selectedCurrency) : null}</div>
							<CurrencyListDropDown
								className={styles.show_currency_list}
								buyCryptoCurrencies={buyCryptoCurrencies}
								setSelectedCurrency={setSelectedCurrency}
							/>
						</div>
						{item.subMenu?.map((item, index) =>
							isLinkExternal ? (
								<a
									key={`drop_${item.title}_${index}`}
									className={styles.drop_down_item}
									href={`https://coinlocally.com/${language}/${item.link}${
										selectedCurrency ? `?pair=USDT-${selectedCurrency}` : ''
									}`}
								>
									<div className={styles.icon_container}>{item.icon}</div>
									<div className={styles.title}>{item.title}</div>
									<div className={styles.description}>{item.description}</div>
								</a>
							) : (
								<Link
									key={`drop_${item.title}_${index}`}
									className={styles.drop_down_item}
									to={
										item.link
											? `/${language}/${item.link}${selectedCurrency ? `?pair=USDT-${selectedCurrency}` : ''}`
											: ''
									}
								>
									<div className={styles.icon_container}>{item.icon}</div>
									<div className={styles.title}>{item.title}</div>
									<div className={styles.description}>{item.description}</div>
								</Link>
							),
						)}
					</li> */}
					<div className={`${styles.drop_down_container} ${className ? className : ''}`}></div>
				</>
			) : (
				<li
					className={`${styles.all_links} ${sidebarSubMenu === `side_top${index}` ? styles.show_links : ''} ${
						className ? className : ''
					}`}
				>
					{item.subMenu?.map((item, index) =>
						!item.a && !isLinkExternal ? (
							<Link
								key={`drop_${item.title}_${index}`}
								className={styles.links}
								to={item.link ? `/${language}${item.link}` : ''}
								onClick={() => {
									setOpenMenu(false);
								}}
								id={item.id}
							>
								<span>{item.title}</span>
								{item.badge === 'NEW' && <div className={styles.new_badge}>NEW</div>}
								{item.badge === 'HOT' && <div className={styles.hot_badge}>HOT</div>}
							</Link>
						) : (
							<a
								key={`drop_${item.title}_${index}`}
								className={styles.links}
								href={item.a ? item.a : 'https://coinlocally.com/' + language + item.link}
								onClick={() => {
									setOpenMenu(false);
								}}
								id={item.id}
							>
								<span>{item.title}</span>
								{item.badge === 'NEW' && <div className={styles.new_badge}>NEW</div>}
								{item.badge === 'HOT' && <div className={styles.hot_badge}>HOT</div>}
							</a>
						),
					)}
				</li>
			)}
		</ul>
	);
};
