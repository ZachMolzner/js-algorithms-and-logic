const algorithms = require('../src/index');

describe('src/index exports', () => {
  test('exports all primary algorithm functions', () => {
    expect(typeof algorithms.twoSum).toBe('function');
    expect(typeof algorithms.maxNumber).toBe('function');
    expect(typeof algorithms.removeDuplicates).toBe('function');
    expect(typeof algorithms.sumArray).toBe('function');
    expect(typeof algorithms.arrayBinarySearch).toBe('function');
    expect(typeof algorithms.binarySearchArray).toBe('function');
    expect(typeof algorithms.mergeIntervals).toBe('function');
    expect(typeof algorithms.findMissingNumber).toBe('function');
    expect(typeof algorithms.rotateArray).toBe('function');

    expect(typeof algorithms.reverseString).toBe('function');
    expect(typeof algorithms.isPalindrome).toBe('function');
    expect(typeof algorithms.countVowels).toBe('function');
    expect(typeof algorithms.firstNonRepeatingChar).toBe('function');
    expect(typeof algorithms.anagramChecker).toBe('function');
    expect(typeof algorithms.longestSubstringWithoutRepeating).toBe('function');

    expect(typeof algorithms.fizzBuzz).toBe('function');
    expect(typeof algorithms.gradeCalculator).toBe('function');
    expect(typeof algorithms.isPrime).toBe('function');
    expect(typeof algorithms.validParentheses).toBe('function');

    expect(typeof algorithms.frequencyCounter).toBe('function');
    expect(typeof algorithms.groupByProperty).toBe('function');

    expect(typeof algorithms.factorial).toBe('function');
    expect(typeof algorithms.fibonacci).toBe('function');
    expect(typeof algorithms.flattenNestedArray).toBe('function');

    expect(typeof algorithms.bubbleSort).toBe('function');
    expect(typeof algorithms.mergeSort).toBe('function');
    expect(typeof algorithms.binarySearch).toBe('function');
    expect(typeof algorithms.hasPairWithTargetSum).toBe('function');
    expect(typeof algorithms.maxSubarraySum).toBe('function');
  });
});
