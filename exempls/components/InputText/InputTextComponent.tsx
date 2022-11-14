import React from 'react';
import classNames from 'classnames/bind';
import { IInputTextProps, INPUT_FOCUS_TYPE, INPUT_APPEARANCE, INPUT_SIZE } from './types';
import { getCSSClasses } from './utils';

import css from './InputText.module.scss';

const cx = classNames.bind(css);

const InputTextComponent: React.FC<IInputTextProps> = ({
	size = INPUT_SIZE.SM,
	appearance = INPUT_APPEARANCE.GRAY_SOFT,
	focusType = INPUT_FOCUS_TYPE.DEFAULT,
	id,
	label,
	subLabel,
	error = '',
	className = '',
	componentRef,
	containerClassName = '',
	errorClassName = '',
	subLabelClassName = '',
	renderLeading,
	renderTrailing,
	renderLeadingClassName = '',
	renderTrailingClassName = '',
	...props
}): JSX.Element => {
	const {
		className: _className,
		containerClassName: _containerClassName,
		subLabelClassName: _subLabelClassName,
		errorClassName: _errorClassName,
		renderLeadingClassName: _renderLeadingClassName,
		renderTrailingClassName: _renderTrailingClassName,
	} = getCSSClasses(
		size,
		error,
		className,
		appearance,
		focusType,
		containerClassName,
		errorClassName,
		subLabelClassName,
		renderLeadingClassName,
		renderTrailingClassName,
		renderLeading,
		renderTrailing
	);

	return (
		<div className={_className}>
			{!!label && (
				<label htmlFor={id}>
					{label}
					{!!subLabel && <span className={_subLabelClassName}>{subLabel}</span>}
				</label>
			)}
			<div className={_containerClassName}>
				{renderLeading && <div className={_renderLeadingClassName}>{React.cloneElement(renderLeading)}</div>}
				<input id={id} className={cx(css.input, className)} ref={componentRef} {...props} />
				{renderTrailing && React.cloneElement(renderTrailing, { className: _renderTrailingClassName })}
			</div>
			{!!error && <p className={_errorClassName}>{error}</p>}
		</div>
	);
};

export default InputTextComponent;
