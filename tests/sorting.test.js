const bubbleSort = require('../src/sorting/bubble-sort');
const mergeSort = require('../src/sorting/merge-sort');

describe('Sorting problems', () => {
  describe('bubbleSort', () => {
    test('sorts numbers in ascending order', () => {
      expect(bubbleSort([5, 3, 8, 4, 2])).toEqual([2, 3, 4, 5, 8]);
    });

    test('handles empty input and duplicate values', () => {
      expect(bubbleSort([])).toEqual([]);
      expect(bubbleSort([3, 1, 3, 2])).toEqual([1, 2, 3, 3]);
    });

    test('returns null for invalid input', () => {
      expect(bubbleSort([1, '2', 3])).toBeNull();
      expect(bubbleSort('not-array')).toBeNull();
    });
  });

  describe('mergeSort', () => {
    test('sorts numbers in ascending order', () => {
      expect(mergeSort([10, -1, 7, 3, 3])).toEqual([-1, 3, 3, 7, 10]);
    });

    test('handles empty arrays', () => {
      expect(mergeSort([])).toEqual([]);
    });

    test('returns null for invalid input', () => {
      expect(mergeSort([1, null, 2])).toBeNull();
      expect(mergeSort(null)).toBeNull();
    });
  });
});
