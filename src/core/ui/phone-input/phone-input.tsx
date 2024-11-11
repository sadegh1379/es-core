import { forwardRef } from 'react';
import styles from './phone-input.module.css';
import Input from '../input/input';
import countries from './countries.json';
import { SelectWithSearch } from '../select-with-search';
import { TPhoneInputProps } from './types';

const ARMENIA_INDEX = 11 as const;

const PhoneInput = forwardRef<HTMLInputElement, TPhoneInputProps>((props, ref) => {
	const {
		selectItems,
		showMainOrSecondary,
		selectedInputClassName,
		defaultSelectedIndex,
		onSelectHandler,
		dropdownListWrapperClassName,
		mainClassName,
		...input_props
	} = props;

	return (
		<Input
			{...input_props}
			type='number'
			placeholder={input_props.placeholder}
			leftIcon={
				<SelectWithSearch
					mainClassName={`${mainClassName}  ${styles.main_class_name}`}
					selectItems={selectItems ?? countries.countries}
					showMainOrSecondary={showMainOrSecondary ?? 'secondary'}
					selectedInputClassName={`${styles.selectedInputClassName} ${selectedInputClassName}`}
					defaultSelectedIndex={defaultSelectedIndex ?? ARMENIA_INDEX}
					onSelectHandler={onSelectHandler}
					dropdownListWrapperClassName={dropdownListWrapperClassName}
				/>
			}
			ref={ref}
		/>
	);
});

export default PhoneInput;
