import { parsPhone } from './parsPhone';
import * as sinon from 'sinon';
import * as inputTextMask from 'use-input-text-mask';
import * as maskFn from './mask';
import * as parsPrefix from './parsPrefix';

jest.mock('use-input-text-mask');

describe('utils => parsPhone', () => {
	const sandbox = sinon.createSandbox();

	afterEach(() => {
		sandbox.restore();
	});

	it('parsPhone', () => {
		// GIVEN
		const value = '+38 (099) 432-12-23';
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
		const prefix = '+38 (0';
		const _parsPrefix = '+380';
		const _parsValue = '994321223';
		const expected = '+380994321223';

		// WHEN
		const createMaskStab = sandbox.stub(maskFn, 'createMask').returns(_mask);
		const getPrefixStab = sandbox.stub().returns(prefix);
		const parsPrefixStab = sandbox.stub(parsPrefix, 'parsPrefix').returns(_parsPrefix);
		const parsValue = sandbox.stub().returns(_parsValue);

		jest.spyOn(inputTextMask, 'getPrefix').mockImplementation(getPrefixStab);
		jest.spyOn(inputTextMask, 'parsValue').mockImplementation(parsValue);

		const data = parsPhone(value, mask);

		// THEN
		expect(data).toBe(expected);

		expect(createMaskStab.calledOnceWithExactly(mask)).toBeTruthy();
		expect(getPrefixStab.calledOnceWithExactly(_mask)).toBeTruthy();
		expect(parsPrefixStab.calledOnceWithExactly(prefix)).toBeTruthy();
		expect(parsValue.calledOnceWithExactly(value, _mask)).toBeTruthy();
	});
});
