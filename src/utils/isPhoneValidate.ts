import { isValidate } from 'use-input-text-mask';
import { createMask } from './mask';

export const isPhoneValidate = (value: string, mask: string): boolean => {
	const _mask = createMask(mask);

	return isValidate(value, _mask);
};
