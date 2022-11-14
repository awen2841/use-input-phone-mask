import { parsValue, getPrefix } from 'use-input-text-mask';
import { createMask } from './mask';
import { parsPrefix } from './parsPrefix';

export const parsPhone = (value: string, mask: string): string => {
	const _mask = createMask(mask);

	const prefix = getPrefix(_mask);

	const _prefix = parsPrefix(prefix);

	const _value = parsValue(value, _mask);

	return `${_prefix}${_value}`;
};
