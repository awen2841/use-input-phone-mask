import { parsPrefix } from './parsPrefix';

describe('utils => parsPrefix', () => {
	test.each`
		prefix     | expected
		${''}      | ${''}
		${'+'}     | ${'+'}
		${'+38 ('} | ${'+38'}
		${'+1 ('}  | ${'+1'}
	`('parsPrefix', ({ prefix, expected }) => {
		// WHEN
		const data = parsPrefix(prefix);

		// THEN
		expect(data).toEqual(expected);
	});
});
