/**
 * Problem: Find the maximum sum of any contiguous subarray of a fixed window size.
 * Approach: Build the first window sum, then slide one step at a time and update the sum.
 * Time Complexity: O(n).
 * Space Complexity: O(1).
 * Edge Cases: Returns null for invalid input and when window size is larger than array length.
 */
function slidingWindowMaxSum(numbers, windowSize) {
  if (!Array.isArray(numbers) || !Number.isInteger(windowSize) || windowSize < 1) {
    return null;
  }

  for (var i = 0; i < numbers.length; i += 1) {
    if (typeof numbers[i] !== 'number') {
      return null;
    }
  }

  if (windowSize > numbers.length) {
    return null;
  }

  var currentSum = 0;

  for (var start = 0; start < windowSize; start += 1) {
    currentSum += numbers[start];
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

module.exports = slidingWindowMaxSum;
