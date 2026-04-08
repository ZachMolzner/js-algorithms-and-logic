const twoPointersPairSum = require('../src/patterns/two-pointers-pair-sum');
const slidingWindowMaxSum = require('../src/patterns/sliding-window-max-sum');

describe('Pattern problems', () => {
  describe('twoPointersPairSum', () => {
    test('returns a pair that matches the target sum', () => {
      expect(twoPointersPairSum([1, 2, 4, 6, 10], 8)).toEqual([2, 6]);
    });

    test('handles duplicates and no-match scenarios', () => {
      expect(twoPointersPairSum([1, 2, 2, 4], 4)).toEqual([2, 2]);
      expect(twoPointersPairSum([1, 2, 3], 100)).toBeNull();
    });

    test('returns null for invalid input', () => {
      expect(twoPointersPairSum([], 4)).toBeNull();
      expect(twoPointersPairSum([3, 1, 2], 3)).toBeNull();
      expect(twoPointersPairSum([1, '2'], 3)).toBeNull();
    });
  });

  describe('slidingWindowMaxSum', () => {
    test('returns max sum for the given window size', () => {
      expect(slidingWindowMaxSum([1, 3, 2, 6, -1, 4, 1, 8, 2], 3)).toBe(13);
    });

    test('handles edge window cases', () => {
      expect(slidingWindowMaxSum([5, 1, 2], 1)).toBe(5);
      expect(slidingWindowMaxSum([5, 1, 2], 3)).toBe(8);
    });

    test('returns null for invalid input', () => {
      expect(slidingWindowMaxSum([], 1)).toBeNull();
      expect(slidingWindowMaxSum([1, 2], 3)).toBeNull();
      expect(slidingWindowMaxSum([1, '2', 3], 2)).toBeNull();
      expect(slidingWindowMaxSum([1, 2, 3], 0)).toBeNull();
    });
  });
});
