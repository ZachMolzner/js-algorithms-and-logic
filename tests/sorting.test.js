const bubbleSort = require('../src/sorting/bubble-sort');
const mergeSort = require('../src/sorting/merge-sort');

describe('Sorting problems', () => {
  describe('bubbleSort', () => {
    test('sorts values in ascending order', () => {
      expect(bubbleSort([5, 1, 4, 2, 8])).toEqual([1, 2, 4, 5, 8]);
    });

    test('handles duplicates and empty arrays', () => {
      expect(bubbleSort([3, 2, 2, 1])).toEqual([1, 2, 2, 3]);
      expect(bubbleSort([])).toEqual([]);
    });

    test('returns null for invalid input', () => {
      expect(bubbleSort('not-array')).toBeNull();
      expect(bubbleSort([1, '2', 3])).toBeNull();
    });
  });

  describe('mergeSort', () => {
    test('sorts values in ascending order', () => {
      expect(mergeSort([10, -1, 2, 5, 0])).toEqual([-1, 0, 2, 5, 10]);
    });

    test('handles duplicates and empty arrays', () => {
      expect(mergeSort([4, 4, 4])).toEqual([4, 4, 4]);
      expect(mergeSort([])).toEqual([]);
    });

    test('returns null for invalid input', () => {
      expect(mergeSort(null)).toBeNull();
      expect(mergeSort([1, {}, 3])).toBeNull();
    });
  });
});
