import analyzeArray from "./analyzeArray";

describe('analyzeArray()', () => {
	it('should output {min: 1, max: 3, average: 2, length: 6} from [1, 1, 2, 2, 3, 3]', () => {
		expect(analyzeArray([1, 1, 2, 2, 3, 3])).toEqual({
			min: 1,
			max: 3,
			average: 2,
			length: 6,
		});
	});
});
