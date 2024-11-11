import styles from './accordion.module.css';
import { FC, useState } from 'react';
import { IAccordionPropTypes } from './types';
import { AddOutline } from 'icons';

const Accordion: FC<IAccordionPropTypes> = ({ dataList, prefixId, titleClassName, className, valueClassName, itemClassName }) => {
	const [activeQuestionIndex, setActiveQuestionIndex] = useState<number | null>(null);
	const [height, setHeight] = useState<number | 'auto'>(0);

	const onAccordionClickHandler = (index: number) => {
		if (activeQuestionIndex !== index) {
			setActiveQuestionIndex(index);
			setHeight(document.getElementById(`${prefixId ?? ''}value_text_${index}`)?.offsetHeight!);
		} else {
			setActiveQuestionIndex(null);
		}
	};

	return (
		<div className={`${styles.container} ${className ?? ''}`}>
			{dataList.map((item, index) => (
				<div
					key={`core_accordion_item_${index}`}
					className={`${styles.accordion_item} ${activeQuestionIndex === index ? styles.active : ''} ${itemClassName ?? ''}`}
				>
					<div className={`${styles.title} ${titleClassName ?? ''}`} onClick={() => onAccordionClickHandler(index)}>
						{item.title}
						<AddOutline />
					</div>
					<div
						className={`${styles.value} ${valueClassName ?? ''}`}
						style={{ height: activeQuestionIndex === index ? height : 0 }}
					>
						<p id={`${prefixId ?? ''}value_text_${index}`}>{item.value}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default Accordion;
