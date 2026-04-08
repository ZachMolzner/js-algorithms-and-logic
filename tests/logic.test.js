const fizzBuzz = require('../src/logic/fizzbuzz');
const gradeCalculator = require('../src/logic/grade-calculator');
const isPrime = require('../src/logic/is-prime');
const validParentheses = require('../src/logic/valid-parentheses');

describe('Logic problems', () => {
  describe('fizzBuzz', () => {
    test('returns expected sequence', () => {
      expect(fizzBuzz(5)).toEqual([1, 2, 'Fizz', 4, 'Buzz']);
    });

    test('returns null for invalid input', () => {
      expect(fizzBuzz(0)).toBeNull();
      expect(fizzBuzz(2.5)).toBeNull();
    });
  });

  describe('gradeCalculator', () => {
    test('maps score to letter grade', () => {
      expect(gradeCalculator(88)).toBe('B');
      expect(gradeCalculator(59)).toBe('F');
      expect(gradeCalculator(90)).toBe('A');
    });

    test('returns null for out-of-range or invalid score', () => {
      expect(gradeCalculator(110)).toBeNull();
      expect(gradeCalculator(-1)).toBeNull();
      expect(gradeCalculator('80')).toBeNull();
    });
  });

  describe('isPrime', () => {
    test('identifies prime and non-prime numbers', () => {
      expect(isPrime(29)).toBe(true);
      expect(isPrime(21)).toBe(false);
    });

    test('returns false for values less than 2 and invalid numbers', () => {
      expect(isPrime(1)).toBe(false);
      expect(isPrime(-13)).toBe(false);
      expect(isPrime(5.4)).toBe(false);
    });
  });

  describe('validParentheses', () => {
    test('returns true for balanced parentheses', () => {
      expect(validParentheses('()[]{}')).toBe(true);
      expect(validParentheses('{[()]}')).toBe(true);
      expect(validParentheses('')).toBe(true);
    });

    test('returns false for unbalanced parentheses', () => {
      expect(validParentheses('(]')).toBe(false);
      expect(validParentheses('([)]')).toBe(false);
      expect(validParentheses('(((')).toBe(false);
    });

    test('ignores non-bracket characters', () => {
      expect(validParentheses('(a + b) * [c]')).toBe(true);
    });

    test('returns false for invalid input type', () => {
      expect(validParentheses(123)).toBe(false);
    });
  });
});
