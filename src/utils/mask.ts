import { isRegExp, Mask } from 'use-input-text-mask';

export const createMask = (mask: string): Mask => {
	return mask.split('').map((char) => (char === '#' ? /\d/ : char));
};

export const parsMask = (mask: Mask): string => {
	return mask.map((char) => (isRegExp(char) ? '#' : char)).join('');
};
