import { ChangeEventHandler, RefObject } from 'react';

export interface IUseInputPhoneMask {
	ref: RefObject<HTMLInputElement>;
	maskPlaceholder: string;
	currentMask: string;
	onChange: ChangeEventHandler<HTMLInputElement>;
	setValue: (value: string) => void;
	getValue: () => string;
	setMask: (mask: string) => void;
}

export interface IOptions {
	mask?: string;
	placeholderChar?: string;
}
