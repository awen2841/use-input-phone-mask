import React, { ChangeEvent, useState } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { isPhoneValidate, useInputPhoneMask } from 'use-input-phone-mask';
import { InputText } from '../../components/InputText';
import { INITIAL } from './constants';

export default {
	title: 'Input',
	parameters: {
		component: InputText,
	},
	decorators: [withKnobs],
};

export const InputPhoneMask = (): JSX.Element => {
	const [inputValue, setInputValue] = useState<string>('');

	const { ref: inputRef, maskPlaceholder, currentMask, onChange, getValue } = useInputPhoneMask({ mask: INITIAL.mask });

	const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
		onChange(event);

		setInputValue(event.target.value);
	};

	const value = getValue();

	return (
		<div>
			<InputText type="tel" mask={maskPlaceholder} componentRef={inputRef} onChange={handleChange} />
			<p style={{ margin: '8px 0' }}>{`Input value: ${inputValue}`}</p>
			<p style={{ margin: '8px 0' }}>{`CurrentMask: ${currentMask}`}</p>
			<p style={{ margin: '8px 0' }}>{`CurrentValue: ${value}`}</p>
			<p style={{ margin: '8px 0' }}>{`isValidate: ${isPhoneValidate(value, currentMask)}`}</p>
		</div>
	);
};
