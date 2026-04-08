const binarySearch = require('../src/searching/binary-search');

describe('Searching problems', () => {
  describe('binarySearch', () => {
    test('returns index when target exists', () => {
      expect(binarySearch([1, 3, 5, 7, 9], 1)).toBe(0);
      expect(binarySearch([1, 3, 5, 7, 9], 9)).toBe(4);
    });

    test('returns -1 when target does not exist or input is empty', () => {
      expect(binarySearch([2, 4, 6, 8], 5)).toBe(-1);
      expect(binarySearch([], 3)).toBe(-1);
    });

    test('returns null for invalid input', () => {
      expect(binarySearch([3, 2, 1], 2)).toBeNull();
      expect(binarySearch([1, 2, '3'], 3)).toBeNull();
      expect(binarySearch('not-array', 3)).toBeNull();
    });
  });
});
