import { RangePickerBaseProps } from 'antd/lib/date-picker/generatePicker';

import { DatePicker } from 'antd';
import type { Moment } from 'moment';
import momentGenerateConfig from 'rc-picker/lib/generate/moment';

const AntDatePicker = DatePicker.generatePicker<Moment>(momentGenerateConfig);

type TPresets = RangePickerBaseProps<Moment>['presets'];

interface IDatePickerPropType {
	minDate?: number;
	maxDate?: number;
	presets?: TPresets;
	type: 'date' | 'range';
	className?: string;
	value: Moment | null | [Moment | null, Moment | null];
	onChange?: (date: Moment | null | (Moment | null)[]) => void;
	onReset?: () => void;
}

export { AntDatePicker };
export type { IDatePickerPropType, TPresets };
