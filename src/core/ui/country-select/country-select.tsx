import { Select } from '../select';
import countries from '../phone-input/countries.json';
import { FC } from 'react';
import { CountrySelectPropTypes } from './types';
const CountrySelect: FC<CountrySelectPropTypes> = props => {
	return (
		<Select
			list={countries.countries.map(item => {
				return {
					key: item.mainTxt,
					value: {
						imgUrl: item.logoUrl,
						primaryTxt: item.mainTxt,
					},
				};
			})}
			search={true}
			{...props}
		/>
	);
};

export default CountrySelect;
