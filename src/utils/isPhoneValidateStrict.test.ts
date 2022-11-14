import * as sinon from 'sinon';
import * as inputTextMask from 'use-input-text-mask';
import { isPhoneValidateStrict } from './isPhoneValidateStrict';
import * as maskFn from './mask';

jest.mock('use-input-text-mask');

describe('utils => isPhoneValidateStrict', () => {
	const sandbox = sinon.createSandbox();

	afterEach(() => {
		sandbox.restore();
	});

	it.each`
		value                       | parsValue         | isValidate | expected
		${'+38 (099) 432- 12-23'}   | ${'380994321223'} | ${true}    | ${true}
		${'+38 (099) 432- 12-2333'} | ${'380994321223'} | ${true}    | ${false}
	`('isPhoneValidateStrict', ({ value, parsValue: _parsValue, isValidate: _isValidate, expected }) => {
		// GIVEN
		const mask = '+## (###) ###-##-##';
		const _mask = [
			'+',
			/\d/,
			/\d/,
			' ',
			'(',
			/\d/,
			/\d/,
			/\d/,
			')',
			' ',
			/\d/,
			/\d/,
			/\d/,
			'-',
			/\d/,
			/\d/,
			'-',
			/\d/,
			/\d/,
		];

		// WHEN
		const createMaskStab = sandbox.stub(maskFn, 'createMask').returns(_mask);
		const parsValueStab = sandbox.stub().returns(_parsValue);
		const isValidateStab = sandbox.stub().returns(_isValidate);

		jest.spyOn(inputTextMask, 'parsValue').mockImplementation(parsValueStab);
		jest.spyOn(inputTextMask, 'isValidate').mockImplementation(isValidateStab);

		const data = isPhoneValidateStrict(value, mask);

		// THEN
		expect(data).toBe(expected);

		expect(createMaskStab.calledOnceWithExactly(mask)).toBeTruthy();
		expect(parsValueStab.calledOnceWithExactly(value, _mask)).toBeTruthy();
		expect(isValidateStab.calledOnceWithExactly(value, _mask)).toBeTruthy();
	});
});
