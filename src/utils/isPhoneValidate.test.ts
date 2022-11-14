import * as sinon from 'sinon';
import * as inputTextMask from 'use-input-text-mask';
import { isPhoneValidate } from './isPhoneValidate';
import * as maskFn from './mask';

jest.mock('use-input-text-mask');

describe('utils => isPhoneValidate', () => {
	const sandbox = sinon.createSandbox();

	afterEach(() => {
		sandbox.restore();
	});

	it('isPhoneValidate', () => {
		// GIVEN
		const value = '+38 (099) 432- 12-23';
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
		const expected = false;

		// WHEN
		const createMaskStab = sandbox.stub(maskFn, 'createMask').returns(_mask);
		const isValidateStab = sandbox.stub().returns(expected);

		jest.spyOn(inputTextMask, 'isValidate').mockImplementation(isValidateStab);

		const data = isPhoneValidate(value, mask);

		// THEN
		expect(data).toBe(expected);

		expect(isValidateStab.calledOnceWithExactly(value, _mask)).toBeTruthy();
		expect(createMaskStab.calledOnceWithExactly(mask)).toBeTruthy();
	});
});
