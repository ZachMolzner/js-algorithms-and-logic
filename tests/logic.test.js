const fizzBuzz = require('../src/logic/fizzbuzz');
const gradeCalculator = require('../src/logic/grade-calculator');
const isPrime = require('../src/logic/is-prime');

describe('Logic problems', () => {
  describe('fizzBuzz', () => {
    test('returns expected sequence', () => {
      expect(fizzBuzz(5)).toEqual([1, 2, 'Fizz', 4, 'Buzz']);
    });

    test('returns null for invalid input', () => {
      expect(fizzBuzz(0)).toBeNull();
    });
  });

  describe('gradeCalculator', () => {
    test('maps score to letter grade', () => {
      expect(gradeCalculator(88)).toBe('B');
      expect(gradeCalculator(59)).toBe('F');
    });

    test('returns null for out-of-range score', () => {
      expect(gradeCalculator(110)).toBeNull();
    });
  });

  describe('isPrime', () => {
    test('identifies prime and non-prime numbers', () => {
      expect(isPrime(29)).toBe(true);
      expect(isPrime(21)).toBe(false);
    });

    test('returns false for values less than 2', () => {
      expect(isPrime(1)).toBe(false);
    });
  });
});
