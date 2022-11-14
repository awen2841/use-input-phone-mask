export const parsPrefix = (prefix: string): string => {
	const _prefix = prefix.split('').filter((char) => {
		return char === '+' || !Number.isNaN(Number.parseInt(char));
	});

	return _prefix.join('');
};
