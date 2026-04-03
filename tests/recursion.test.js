const factorial = require('../src/recursion/factorial');
const fibonacci = require('../src/recursion/fibonacci');

describe('Recursion problems', () => {
  describe('factorial', () => {
    test('returns expected values', () => {
      expect(factorial(0)).toBe(1);
      expect(factorial(5)).toBe(120);
    });

    test('returns null for negative input', () => {
      expect(factorial(-1)).toBeNull();
    });
  });

  describe('fibonacci', () => {
    test('returns expected values', () => {
      expect(fibonacci(0)).toBe(0);
      expect(fibonacci(1)).toBe(1);
      expect(fibonacci(7)).toBe(13);
    });

    test('returns null for negative input', () => {
      expect(fibonacci(-5)).toBeNull();
    });
  });
});
