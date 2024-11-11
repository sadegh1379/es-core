import moment from 'moment';
import { FC, useState } from 'react';
import { IDatePickerMobilePropType } from './types';
import styles from './date-picker-mobile.module.css';
import { ArrowRightOutline, CalenderOutline, CloseOutline } from 'icons';

import { DatePicker } from 'antd-mobile';
import { PickerDate } from 'antd-mobile/es/components/date-picker/util';
import { Button } from '../button';

const DatePickerMobile: FC<IDatePickerMobilePropType> = ({ type, maxDate, minDate, className, value, onChange, onReset }) => {
	const [pickerStatus, setPickerStatus] = useState<{ type: 'FROM' | 'TO'; status: boolean }>({ type: 'FROM', status: false });

	const onConfirmHandler = (_value: PickerDate, type: 'from' | 'to') => {
		if (onChange && Array.isArray(value)) {
			if (type === 'from') {
				onChange([moment(_value), value[1]]);
			} else {
				onChange([value[0], moment(_value)]);
			}
		}
	};

	return (
		Array.isArray(value) && (
			<>
				<div className={`${styles.selector_container} ${className ?? ''}`}>
					<div className={`${styles.date_picker_selector} core_date_picker_mobile_selector`}>
						<div
							className={`${styles.date_item} ${value[0] === null ? styles.deactive : ''} core_date_mobile_item`}
							onClick={() => {
								setPickerStatus({ type: 'FROM', status: true });
							}}
						>
							{value[0] === null ? 'YYYY/MM/DD' : value[0].format('YYYY/MM/DD')}
						</div>
						<ArrowRightOutline className={styles.arrow_vector} />
						<div
							className={`${styles.date_item} ${value[1] === null ? styles.deactive : ''} core_date_mobile_item`}
							onClick={() => {
								setPickerStatus({ type: 'TO', status: true });
							}}
						>
							{value[1] === null ? 'YYYY/MM/DD' : value[1].format('YYYY/MM/DD')}
						</div>
						<CalenderOutline className={`${styles.calender_vector} core_date_mobile_calender_vector`} />
					</div>
					<Button variant='outline' size='small' onClick={onReset} className='core_date_mobile_reset'>
						Reset
					</Button>
					<div className={`${styles.close_vector} core_date_mobile_reset_vector`} onClick={onReset}>
						<CloseOutline />
					</div>
				</div>
				<DatePicker
					className={styles.picker}
					visible={pickerStatus.type === 'FROM' && pickerStatus.status}
					onClose={() => {
						setPickerStatus({ ...pickerStatus, status: false });
					}}
					title='From Date'
					cancelText='Cancel'
					confirmText='Confirm'
					min={minDate ? new Date(minDate) : undefined}
					max={maxDate ? new Date(maxDate) : undefined}
					value={value[0] ? value[0].toDate() : undefined}
					onConfirm={date => onConfirmHandler(date, 'from')}
				/>
				<DatePicker
					visible={pickerStatus.type === 'TO' && pickerStatus.status}
					onClose={() => {
						setPickerStatus({ ...pickerStatus, status: false });
					}}
					title='To Date'
					cancelText='Cancel'
					confirmText='Confirm'
					min={minDate ? new Date(minDate) : undefined}
					max={maxDate ? new Date(maxDate) : undefined}
					value={value[1] ? value[1].toDate() : undefined}
					onConfirm={date => onConfirmHandler(date, 'to')}
				/>
			</>
		)
	);
};

export default DatePickerMobile;
