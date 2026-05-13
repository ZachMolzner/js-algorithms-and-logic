const frequencyCounter = require('../src/objects/frequency-counter');
const groupByProperty = require('../src/objects/group-by-property');

describe('Object problems', () => {
  describe('frequencyCounter', () => {
    test('counts occurrences', () => {
      expect(frequencyCounter(['a', 'b', 'a', 'c', 'b', 'a'])).toEqual({
        a: 3,
        b: 2,
        c: 1
      });
    });

    test('handles empty arrays', () => {
      expect(frequencyCounter([])).toEqual({});
    });

    test('supports mixed primitive values', () => {
      expect(frequencyCounter([1, '1', true, true])).toEqual({
        '1': 2,
        true: 2
      });
    });

    test('returns null for invalid input', () => {
      expect(frequencyCounter('abc')).toBeNull();
    });
  });

  describe('groupByProperty', () => {
    test('groups objects by selected property', () => {
      const users = [
        { name: 'Ana', role: 'admin' },
        { name: 'Bo', role: 'user' },
        { name: 'Cal', role: 'admin' }
      ];

      expect(groupByProperty(users, 'role')).toEqual({
        admin: [users[0], users[2]],
        user: [users[1]]
      });
    });

    test('puts missing values in undefined group', () => {
      const items = [{ id: 1, type: 'x' }, { id: 2 }];
      expect(groupByProperty(items, 'type')).toEqual({
        x: [items[0]],
        undefined: [items[1]]
      });
    });

    test('returns empty object for empty array input', () => {
      expect(groupByProperty([], 'role')).toEqual({});
    });

    test('returns null for invalid input', () => {
      expect(groupByProperty([{ role: 'admin' }], '')).toBeNull();
      expect(groupByProperty([{ role: 'admin' }, null], 'role')).toBeNull();
    });
  });
});
