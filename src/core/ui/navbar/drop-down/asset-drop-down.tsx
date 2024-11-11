import { FC } from 'react';
import { INavbarSideConfig } from '../types';
import styles from './asset-drop-down.module.css';
import { Link } from 'react-router-dom';

const AssetDropDown: FC<{ menu: INavbarSideConfig['subMenu']; className?: string; language: string; isLinkExternal: boolean }> = ({
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
						className={styles.drop_down_item}
						to={item.link ? `/${language}${item.link}` : ''}
						id={item.id}
					>
						<div className={styles.icon_container}>{item.icon}</div>
						<div className={styles.title}>
							{item.title}
							{item.badge === 'NEW' && <div className={styles.new_badge}>NEW</div>}
							{item.badge === 'HOT' && <div className={styles.hot_badge}>HOT</div>}
						</div>
					</Link>
				) : (
					<a
						key={`drop_${item.title}_${index}`}
						className={styles.drop_down_item}
						href={item.a ? item.a : 'https://coinlocally.com/' + language + item.link}
						id={item.id}
					>
						<div className={styles.icon_container}>{item.icon}</div>
						<div className={styles.title}>
							{item.title}
							{item.badge === 'NEW' && <div className={styles.new_badge}>NEW</div>}
							{item.badge === 'HOT' && <div className={styles.hot_badge}>HOT</div>}
						</div>
					</a>
				),
			)}
		</div>
	);
};

export default AssetDropDown;
