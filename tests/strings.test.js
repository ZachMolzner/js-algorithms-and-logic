const reverseString = require('../src/strings/reverse-string');
const isPalindrome = require('../src/strings/palindrome');
const countVowels = require('../src/strings/count-vowels');
const firstNonRepeatingChar = require('../src/strings/first-non-repeating-char');

describe('String problems', () => {
  describe('reverseString', () => {
    test('returns reversed value', () => {
      expect(reverseString('hello')).toBe('olleh');
    });
  });

  describe('isPalindrome', () => {
    test('ignores case and symbols', () => {
      expect(isPalindrome('A man, a plan, a canal: Panama!')).toBe(true);
    });

    test('returns false when value is not a palindrome', () => {
      expect(isPalindrome('javascript')).toBe(false);
    });
  });

  describe('countVowels', () => {
    test('counts vowels correctly', () => {
      expect(countVowels('Beautiful Day')).toBe(6);
    });
  });

  describe('firstNonRepeatingChar', () => {
    test('returns first unique character', () => {
      expect(firstNonRepeatingChar('swiss')).toBe('w');
    });

    test('returns null when no unique character exists', () => {
      expect(firstNonRepeatingChar('aabbcc')).toBeNull();
    });
  });
});
