/**
 * Problem: Find the maximum sum of any contiguous subarray with fixed window size.
 * Approach: Build the first window sum, then slide one step at a time by adding next and removing previous values.
 * Time Complexity: O(n).
 * Space Complexity: O(1).
 * Edge Cases: Returns null for invalid input or impossible window size.
 */
function maxSubarraySum(numbers, windowSize) {
  if (!Array.isArray(numbers) || !Number.isInteger(windowSize)) {
    return null;
  }

  if (windowSize <= 0 || windowSize > numbers.length) {
    return null;
  }

  for (var i = 0; i < numbers.length; i += 1) {
    if (typeof numbers[i] !== 'number') {
      return null;
    }
  }

  var currentSum = 0;

  for (var firstWindowIndex = 0; firstWindowIndex < windowSize; firstWindowIndex += 1) {
    currentSum += numbers[firstWindowIndex];
  }

  var maxSum = currentSum;

  for (var end = windowSize; end < numbers.length; end += 1) {
    currentSum += numbers[end] - numbers[end - windowSize];

    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }

  return maxSum;
}

module.exports = maxSubarraySum;
