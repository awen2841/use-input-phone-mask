import React from 'react';
import classNames from 'classnames/bind';
import {
	INPUT_SIZE,
	INPUT_APPEARANCE,
	TInputSize,
	TInputAppearance,
	INPUT_FOCUS_TYPE,
	TInputFocusType,
} from '../InputBase';
import { IInputTextCssClasses } from './types';

import css from './InputText.module.scss';

const cx = classNames.bind(css);

export const getCSSClasses = (
	size: INPUT_SIZE | TInputSize,
	error: string | React.ReactElement,
	className: string,
	appearance: INPUT_APPEARANCE | TInputAppearance,
	focusType: INPUT_FOCUS_TYPE | TInputFocusType,
	containerClassName: string,
	errorClassName: string,
	subLabelClassName: string,
	renderLeadingClassName: string,
	renderTrailingClassName: string,
	renderLeading?: React.ReactElement,
	renderTrailing?: React.ReactElement
): IInputTextCssClasses => {
	const _className = cx(css.wrapper, {
		[`wrapper_size_${size}`]: !!size,
		[`wrapper_size_${size}_with_render_leading`]: !!size && !!renderLeading,
		[`wrapper_size_${size}_with_render_trailing`]: !!size && !!renderTrailing,
		[`focus_${focusType}`]: !!focusType,
		[`wrapper_appearance_${!error ? appearance : 'red'}`]: !!appearance,
		[`${className}`]: !!className,
	});

	const _containerClassName = cx(css.container, {
		[`${containerClassName}`]: !!containerClassName,
	});

	const _errorClassName = cx(css.error, {
		[`${errorClassName}`]: !!errorClassName,
	});

	const _renderLeadingClassName = cx(css.leading, {
		[`leading_size_${size}`]: !!size,
		[`${renderLeadingClassName}`]: !!renderLeadingClassName,
	});

	const _renderTrailingClassName = cx(css.trailing, {
		[`trailing_size_${size}`]: !!size,
		[`${renderTrailingClassName}`]: !!renderTrailingClassName,
	});

	const _subLabelClassName = cx(css.sub_label, {
		[`${subLabelClassName}`]: !!subLabelClassName,
	});

	return {
		className: _className,
		containerClassName: _containerClassName,
		errorClassName: _errorClassName,
		subLabelClassName: _subLabelClassName,
		renderLeadingClassName: _renderLeadingClassName,
		renderTrailingClassName: _renderTrailingClassName,
	};
};
