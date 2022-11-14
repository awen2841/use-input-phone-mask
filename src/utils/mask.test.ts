import { Mask } from 'use-input-text-mask';
import { createMask, parsMask } from './mask';

describe('utils => mask', () => {
	test('createMask', () => {
		// GIVEN
		const mask = '+38 (###) ###-##-##';
		const expected: Mask = [
			'+',
			'3',
			'8',
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
		const data = createMask(mask);

		// THEN
		expect(data).toEqual(expected);
	});

	test('parsMask', () => {
		// GIVEN
		const expected = '+38 (###) ###-##-##';
		const mask: Mask = [
			'+',
			'3',
			'8',
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
		const data = parsMask(mask);

		// THEN
		expect(data).toEqual(expected);
	});
});
