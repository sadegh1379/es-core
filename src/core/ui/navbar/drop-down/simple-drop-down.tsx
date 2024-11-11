import { FC } from 'react';
import { INavbarSideConfig } from '../types';
import styles from './simple-drop-down.module.css';
import { ArrowRightOutline } from 'icons';
import { Link } from 'react-router-dom';

const SimpleDropDown: FC<{ menu: INavbarSideConfig['subMenu']; className?: string; language: string; isLinkExternal: boolean }> = ({
	menu,
	className,
	language,
	isLinkExternal,
}) => {
	return (
		<div className={`${styles.drop_down_container} ${className ? className : ''}`}>
			{menu?.map((item, index) =>
				!item.a && !isLinkExternal ? (
					<Link
						key={`drop_${item.title}_${index}`}
						id={item.id}
						className={`${styles.drop_down_item} ${
							item.title === 'Tournament'
								? styles.navbar_main_tournament
								: item.title === 'Rewards Hub'
								? styles.navbar_main_rewards_hub
								: ''
						}`}
						to={item.link ? `/${language}${item.link}` : ''}
					>
						<div className={styles.icon_container}>{item.icon}</div>
						<div className={styles.title}>
							{item.title}
							{item.badge === 'NEW' && <div className={styles.new_badge}>NEW</div>}
							{item.badge === 'HOT' && <div className={styles.hot_badge}>HOT</div>}
						</div>
						<div className={styles.description}>{item.description}</div>

						<ArrowRightOutline className={styles.arrow_right} />
					</Link>
				) : (
					<a
						key={`drop_${item.title}_${index}`}
						id={item.id}
						className={`${styles.drop_down_item} ${
							item.title === 'Tournament'
								? styles.navbar_main_tournament
								: item.title === 'Rewards Hub'
								? styles.navbar_main_rewards_hub
								: ''
						}`}
						href={item.a ? item.a : 'https://coinlocally.com/' + language + item.link}
					>
						<div className={styles.icon_container}>{item.icon}</div>
						<div className={styles.title}>
							{item.title}
							{item.badge === 'NEW' && <div className={styles.new_badge}>NEW</div>}
							{item.badge === 'HOT' && <div className={styles.hot_badge}>HOT</div>}
						</div>
						<div className={styles.description}>{item.description}</div>

						<ArrowRightOutline className={styles.arrow_right} />
					</a>
				),
			)}
		</div>
	);
};

export default SimpleDropDown;
