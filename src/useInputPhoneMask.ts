import { useInputTextMask, getPrefix } from 'use-input-text-mask';
import { IOptions, IUseInputPhoneMask } from './types';
import { createMask, parsMask, parsPrefix } from './utils';

export const useInputPhoneMask = ({ mask, placeholderChar }: IOptions): IUseInputPhoneMask => {
	const _mask = mask ? createMask(mask) : [];

	const data = useInputTextMask({ mask: _mask, placeholderChar });

	const getValue = (): string => {
		const prefix = getPrefix(_mask);

		const _prefix = parsPrefix(prefix);

		const value = data.getValue();

		return `${_prefix}${value}`;
	};

	const setMask = (mask: string): void => {
		data.setMask(createMask(mask));
	};

	return { ...data, currentMask: parsMask(data.currentMask), getValue, setMask };
};
