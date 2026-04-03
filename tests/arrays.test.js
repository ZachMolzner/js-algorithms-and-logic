const twoSum = require('../src/arrays/two-sum');
const maxNumber = require('../src/arrays/max-number');
const removeDuplicates = require('../src/arrays/remove-duplicates');
const sumArray = require('../src/arrays/sum-array');

describe('Array problems', () => {
  describe('twoSum', () => {
    test('returns indices of values that sum to target', () => {
      expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    });

    test('returns null when no solution exists', () => {
      expect(twoSum([1, 2, 3], 100)).toBeNull();
    });

    test('returns null for invalid input', () => {
      expect(twoSum('not-an-array', 5)).toBeNull();
    });
  });

  describe('maxNumber', () => {
    test('returns largest number in array', () => {
      expect(maxNumber([4, 9, 2, 12, 7])).toBe(12);
    });

    test('returns null for empty array', () => {
      expect(maxNumber([])).toBeNull();
    });
  });

  describe('removeDuplicates', () => {
    test('returns a new array with duplicates removed', () => {
      expect(removeDuplicates([1, 1, 2, 3, 3, 4])).toEqual([1, 2, 3, 4]);
    });

    test('returns null for invalid input', () => {
      expect(removeDuplicates(null)).toBeNull();
    });
  });

  describe('sumArray', () => {
    test('returns sum of all values', () => {
      expect(sumArray([10, 5, -3])).toBe(12);
    });

    test('returns 0 for empty array', () => {
      expect(sumArray([])).toBe(0);
    });

    test('returns null when array contains non-number', () => {
      expect(sumArray([1, '2', 3])).toBeNull();
    });
  });
});
