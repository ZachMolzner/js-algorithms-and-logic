const binarySearch = require('../src/searching/binary-search');

describe('Searching problems', () => {
  describe('binarySearch', () => {
    test('returns index for an existing target', () => {
      expect(binarySearch([1, 3, 5, 7, 9], 5)).toBe(2);
    });

    test('returns -1 for missing target and empty arrays', () => {
      expect(binarySearch([1, 2, 3], 8)).toBe(-1);
      expect(binarySearch([], 8)).toBe(-1);
    });

    test('returns null for invalid input', () => {
      expect(binarySearch([3, 2, 1], 2)).toBeNull();
      expect(binarySearch([1, 2, '3'], 3)).toBeNull();
      expect(binarySearch('bad', 3)).toBeNull();
    });
  });
});
