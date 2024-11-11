import moment from 'moment';
import { FC } from 'react';
import { AntDatePicker, IDatePickerPropType, TPresets } from './types';
import './date-picker.css';
import { ArrowRightOutline, CalenderOutline } from 'icons';
import { useMatchMedia } from 'helper/hooks';
import { DatePickerMobile } from '../date-picker-mobile';
import { Button } from '../button';

const { RangePicker } = AntDatePicker;

const DatePicker: FC<IDatePickerPropType> = ({ type, presets, maxDate, minDate, className, value, onChange, onReset }) => {
	const isMobile = useMatchMedia('(max-width:660px)');

	const rangePresets: TPresets = [
		{ label: 'Today', value: [moment().startOf('D'), moment().endOf('D')] },
		{ label: 'Last week', value: [moment().add(-1, 'w').startOf('w'), moment().add(-1, 'w').endOf('w')] },
		{ label: 'Last 30 days', value: [moment().add(-30, 'd').startOf('D'), moment()] },
		{ label: 'Last 60 days', value: [moment().add(-60, 'd').startOf('D'), moment()] },
	];

	return isMobile ? (
		<DatePickerMobile
			type={type}
			className={className}
			value={value}
			maxDate={maxDate}
			minDate={minDate}
			onChange={onChange}
			onReset={onReset}
		/>
	) : type === 'date' ? (
		<AntDatePicker />
	) : (
		<div className='range_container'>
			<RangePicker
				className={className ?? ''}
				presets={presets ?? rangePresets}
				disabledDate={date => (minDate ? date.isBefore(moment(minDate)) : maxDate ? date.isAfter(moment(maxDate)) : false)}
				suffixIcon={<CalenderOutline />}
				separator={<ArrowRightOutline />}
				placeholder={['YYYY/MM/DD', 'YYYY/MM/DD']}
				allowClear={false}
				value={value && Array.isArray(value) ? value : [null, null]}
				onCalendarChange={dates => {
					if (onChange) {
						onChange(dates);
					}
				}}
			/>
			<Button variant='outline' size='small' onClick={onReset}>
				Reset
			</Button>
		</div>
	);
};

export default DatePicker;
