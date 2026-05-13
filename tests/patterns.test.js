const hasPairWithTargetSum = require('../src/patterns/two-pointers');
const maxSubarraySum = require('../src/patterns/sliding-window');

describe('Pattern problems', () => {
  describe('hasPairWithTargetSum (two pointers)', () => {
    test('returns true when a matching pair exists', () => {
      expect(hasPairWithTargetSum([1, 2, 4, 7, 11], 9)).toBe(true);
    });

    test('returns false for empty arrays or no pair', () => {
      expect(hasPairWithTargetSum([], 10)).toBe(false);
      expect(hasPairWithTargetSum([1, 2, 3], 100)).toBe(false);
    });

    test('returns null for invalid input', () => {
      expect(hasPairWithTargetSum([3, 2, 1], 3)).toBeNull();
      expect(hasPairWithTargetSum([1, '2', 3], 3)).toBeNull();
      expect(hasPairWithTargetSum([1, 2, 3], '3')).toBeNull();
    });
  });

  describe('maxSubarraySum (sliding window)', () => {
    test('returns max sum for fixed-size window', () => {
      expect(maxSubarraySum([2, 1, 5, 1, 3, 2], 3)).toBe(9);
    });

    test('supports negative numbers and exact-size window', () => {
      expect(maxSubarraySum([-5, -1, -3], 2)).toBe(-4);
      expect(maxSubarraySum([4, 2, 1], 3)).toBe(7);
    });

    test('returns null for invalid input', () => {
      expect(maxSubarraySum([1, 2], 0)).toBeNull();
      expect(maxSubarraySum([1, 2], 3)).toBeNull();
      expect(maxSubarraySum([1, '2', 3], 2)).toBeNull();
      expect(maxSubarraySum('bad', 2)).toBeNull();
    });
  });
});
