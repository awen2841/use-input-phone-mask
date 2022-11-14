import { isValidate, parsValue } from 'use-input-text-mask';
import { createMask } from './mask';

export const isPhoneValidateStrict = (value: string, mask: string): boolean => {
	const _mask = createMask(mask);

	const _value = value
		.split('')
		.filter((char) => !Number.isNaN(Number.parseInt(char)))
		.join('');

	const phone = parsValue(value, _mask);

	return isValidate(value, _mask) && phone.length === _value.length;
};
