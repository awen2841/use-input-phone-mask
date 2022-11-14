import React, { InputHTMLAttributes } from 'react';

export enum INPUT_SIZE {
	SM = 'sm',
	MD = 'md',
	LG = 'lg',
}
export type TInputSize = 'sm' | 'md' | 'lg';

export enum INPUT_APPEARANCE {
	GRAY_SOFT = 'gray_soft',
}
export type TInputAppearance = 'gray_soft';

export enum INPUT_FOCUS_TYPE {
	NONE = 'none',
	DEFAULT = 'default',
	WITH_BORDER = 'with_border',
	ANIMATION = 'animation',
}
export type TInputFocusType = 'none' | 'default' | 'with_border' | 'animation';

export interface IInputBaseProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
	className?: string;
	componentRef?: React.RefObject<HTMLInputElement> | React.Ref<HTMLInputElement>;
}

export interface IInputTextProps extends IInputBaseProps {
	size?: INPUT_SIZE | TInputSize;
	appearance?: INPUT_APPEARANCE | TInputAppearance;
	focusType?: INPUT_FOCUS_TYPE | TInputFocusType;
	label?: string | React.ReactElement;
	subLabel?: string | React.ReactElement;
	error?: string | React.ReactElement;
	renderLeading?: React.ReactElement;
	renderTrailing?: React.ReactElement;
	containerClassName?: string;
	errorClassName?: string;
	subLabelClassName?: string;
	renderLeadingClassName?: string;
	renderTrailingClassName?: string;
}

export interface IInputTextCssClasses {
	className: string;
	containerClassName: string;
	errorClassName: string;
	subLabelClassName: string;
	renderLeadingClassName: string;
	renderTrailingClassName: string;
}
