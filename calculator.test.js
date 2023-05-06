import calculator from './calculator.js';

describe('add()', () => {
	it('should add 2 and 1 to equal 3', () => {
		expect(calculator.add(2, 1)).toBe(3);
	});
	it('should add 5 and 6 to equal 11', () => {
		expect(calculator.add(5, 6)).toBe(11);
	});
});

describe('subtract()', () => {
	it('should subtract 2 from 3 to equal 1', () => {
		expect(calculator.subtract(3, 2)).toBe(1);
	});
	it('should subtract 5 from 11 to equal 6', () => {
		expect(calculator.subtract(11, 5)).toBe(6);
	});
});

describe('multiply()', () => {
	it('should multiply 2 and 3 to equal 6', () => {
		expect(calculator.multiply(2, 3)).toBe(6);
	});
	it('should multiply 5 and 6 to equal 30', () => {
		expect(calculator.multiply(5, 6)).toBe(30);
	});
});

describe('divide()', () => {
	it('should divide 6 by 2 to equal 3', () => {
		expect(calculator.divide(6, 2)).toBe(3);
	});
	it('should divide 30 by 6 to equal 5', () => {
		expect(calculator.divide(30, 6)).toBe(5);
	});
});
