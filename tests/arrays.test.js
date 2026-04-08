const twoSum = require('../src/arrays/two-sum');
const maxNumber = require('../src/arrays/max-number');
const removeDuplicates = require('../src/arrays/remove-duplicates');
const sumArray = require('../src/arrays/sum-array');
const arrayBinarySearch = require('../src/arrays/binary-search');
const mergeIntervals = require('../src/arrays/merge-intervals');
const findMissingNumber = require('../src/arrays/find-missing-number');
const rotateArray = require('../src/arrays/rotate-array');

describe('Array problems', () => {
  describe('twoSum', () => {
    test('returns indices of values that sum to target', () => {
      expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    });

    test('supports duplicate values', () => {
      expect(twoSum([3, 3], 6)).toEqual([0, 1]);
    });

    test('returns null when no solution exists', () => {
      expect(twoSum([1, 2, 3], 100)).toBeNull();
    });

    test('returns null for empty and invalid input', () => {
      expect(twoSum([], 5)).toBeNull();
      expect(twoSum('not-an-array', 5)).toBeNull();
      expect(twoSum([1, 2, 3], '9')).toBeNull();
    });
  });

  describe('maxNumber', () => {
    test('returns largest number in array', () => {
      expect(maxNumber([4, 9, 2, 12, 7])).toBe(12);
    });

    test('returns null for empty array', () => {
      expect(maxNumber([])).toBeNull();
    });

    test('returns null for invalid element types', () => {
      expect(maxNumber([1, '2', 3])).toBeNull();
    });
  });

  describe('removeDuplicates', () => {
    test('returns a new array with duplicates removed', () => {
      expect(removeDuplicates([1, 1, 2, 3, 3, 4])).toEqual([1, 2, 3, 4]);
    });

    test('returns empty array for empty input', () => {
      expect(removeDuplicates([])).toEqual([]);
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

  describe('arrayBinarySearch', () => {
    test('returns index when target is found', () => {
      expect(arrayBinarySearch([1, 3, 5, 7, 9], 7)).toBe(3);
    });

    test('returns -1 when target is missing or array is empty', () => {
      expect(arrayBinarySearch([2, 4, 6, 8], 5)).toBe(-1);
      expect(arrayBinarySearch([], 1)).toBe(-1);
    });

    test('returns null when array is not sorted', () => {
      expect(arrayBinarySearch([3, 1, 2], 2)).toBeNull();
    });

    test('returns null for invalid input', () => {
      expect(arrayBinarySearch('not-array', 3)).toBeNull();
      expect(arrayBinarySearch([1, 2, '3'], 3)).toBeNull();
    });
  });

  describe('mergeIntervals', () => {
    test('merges overlapping ranges', () => {
      expect(mergeIntervals([[1, 3], [2, 6], [8, 10], [15, 18]])).toEqual([
        [1, 6],
        [8, 10],
        [15, 18]
      ]);
    });

    test('normalizes intervals where start is greater than end', () => {
      expect(mergeIntervals([[5, 1], [2, 3]])).toEqual([[1, 5]]);
    });

    test('returns empty array for empty input', () => {
      expect(mergeIntervals([])).toEqual([]);
    });

    test('returns null for invalid interval input', () => {
      expect(mergeIntervals([[1, 2], [3]])).toBeNull();
      expect(mergeIntervals([[1, '2']])).toBeNull();
    });
  });

  describe('findMissingNumber', () => {
    test('returns the missing value from 0 to n', () => {
      expect(findMissingNumber([3, 0, 1])).toBe(2);
      expect(findMissingNumber([0, 1])).toBe(2);
    });

    test('handles empty array', () => {
      expect(findMissingNumber([])).toBe(0);
    });

    test('returns null when values are duplicated', () => {
      expect(findMissingNumber([0, 1, 1])).toBeNull();
    });

    test('returns null for invalid input', () => {
      expect(findMissingNumber([0, 1, 5])).toBeNull();
      expect(findMissingNumber('not-array')).toBeNull();
    });
  });

  describe('rotateArray', () => {
    test('rotates array to the right by k steps', () => {
      expect(rotateArray([1, 2, 3, 4, 5], 2)).toEqual([4, 5, 1, 2, 3]);
    });

    test('supports negative rotation values', () => {
      expect(rotateArray([1, 2, 3, 4], -1)).toEqual([2, 3, 4, 1]);
    });

    test('returns copied array when rotation is full length', () => {
      expect(rotateArray([1, 2, 3], 3)).toEqual([1, 2, 3]);
    });

    test('returns empty array for empty input', () => {
      expect(rotateArray([], 2)).toEqual([]);
    });

    test('returns null for invalid input', () => {
      expect(rotateArray([1, 2, '3'], 1)).toBeNull();
      expect(rotateArray([1, 2, 3], 1.5)).toBeNull();
    });
  });
});
