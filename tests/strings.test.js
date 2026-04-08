const reverseString = require('../src/strings/reverse-string');
const isPalindrome = require('../src/strings/palindrome');
const countVowels = require('../src/strings/count-vowels');
const firstNonRepeatingChar = require('../src/strings/first-non-repeating-char');
const anagramChecker = require('../src/strings/anagram-checker');
const longestSubstringWithoutRepeating = require('../src/strings/longest-substring-without-repeating');

describe('String problems', () => {
  describe('reverseString', () => {
    test('returns reversed value', () => {
      expect(reverseString('hello')).toBe('olleh');
    });

    test('handles empty string and invalid input', () => {
      expect(reverseString('')).toBe('');
      expect(reverseString(10)).toBeNull();
    });
  });

  describe('isPalindrome', () => {
    test('ignores case and symbols', () => {
      expect(isPalindrome('A man, a plan, a canal: Panama!')).toBe(true);
    });

    test('returns false when value is not a palindrome', () => {
      expect(isPalindrome('javascript')).toBe(false);
    });

    test('returns false for invalid input', () => {
      expect(isPalindrome(null)).toBe(false);
    });
  });

  describe('countVowels', () => {
    test('counts vowels correctly', () => {
      expect(countVowels('Beautiful Day')).toBe(6);
    });

    test('handles empty string and invalid input', () => {
      expect(countVowels('')).toBe(0);
      expect(countVowels([])).toBeNull();
    });
  });

  describe('firstNonRepeatingChar', () => {
    test('returns first unique character', () => {
      expect(firstNonRepeatingChar('swiss')).toBe('w');
    });

    test('returns null when no unique character exists', () => {
      expect(firstNonRepeatingChar('aabbcc')).toBeNull();
    });

    test('handles empty string and invalid input', () => {
      expect(firstNonRepeatingChar('')).toBeNull();
      expect(firstNonRepeatingChar(100)).toBeNull();
    });
  });

  describe('anagramChecker', () => {
    test('returns true for matching anagrams', () => {
      expect(anagramChecker('Listen', 'Silent')).toBe(true);
      expect(anagramChecker('Dormitory', 'Dirty room')).toBe(true);
    });

    test('returns false for non-anagrams', () => {
      expect(anagramChecker('hello', 'world')).toBe(false);
    });

    test('returns false for invalid input types', () => {
      expect(anagramChecker('listen', null)).toBe(false);
    });
  });

  describe('longestSubstringWithoutRepeating', () => {
    test('returns longest unique-length substring size', () => {
      expect(longestSubstringWithoutRepeating('abcabcbb')).toBe(3);
      expect(longestSubstringWithoutRepeating('bbbbb')).toBe(1);
      expect(longestSubstringWithoutRepeating('pwwkew')).toBe(3);
    });

    test('returns 0 for empty string', () => {
      expect(longestSubstringWithoutRepeating('')).toBe(0);
    });

    test('handles duplicates and invalid input', () => {
      expect(longestSubstringWithoutRepeating('aaaa')).toBe(1);
      expect(longestSubstringWithoutRepeating(123)).toBeNull();
    });
  });
});
