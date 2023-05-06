import reverseString from './reverseString.js';

describe('reverseString()', () => {
	it('should reverse the string', () => {
		expect(reverseString('reversed')).toMatch('desrever');
	});
});
