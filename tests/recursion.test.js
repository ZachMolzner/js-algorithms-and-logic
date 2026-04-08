const factorial = require('../src/recursion/factorial');
const fibonacci = require('../src/recursion/fibonacci');
const flattenNestedArray = require('../src/recursion/flatten-nested-array');

describe('Recursion problems', () => {
  describe('factorial', () => {
    test('returns expected values', () => {
      expect(factorial(0)).toBe(1);
      expect(factorial(5)).toBe(120);
    });

    test('returns null for invalid input', () => {
      expect(factorial(-1)).toBeNull();
      expect(factorial(3.5)).toBeNull();
    });
  });

  describe('fibonacci', () => {
    test('returns expected values', () => {
      expect(fibonacci(0)).toBe(0);
      expect(fibonacci(1)).toBe(1);
      expect(fibonacci(7)).toBe(13);
    });

    test('returns null for invalid input', () => {
      expect(fibonacci(-5)).toBeNull();
      expect(fibonacci('7')).toBeNull();
    });
  });

  describe('flattenNestedArray', () => {
    test('flattens nested arrays recursively', () => {
      expect(flattenNestedArray([1, [2, [3, 4], 5], 6])).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test('returns empty array when input is empty', () => {
      expect(flattenNestedArray([])).toEqual([]);
    });

    test('keeps non-array values as-is when flattening', () => {
      expect(flattenNestedArray([1, ['a', [true]], null])).toEqual([1, 'a', true, null]);
    });

    test('returns null for invalid input', () => {
      expect(flattenNestedArray('not-array')).toBeNull();
    });
  });
});
