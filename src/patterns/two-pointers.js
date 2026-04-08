/**
 * Problem: Return true when a sorted array contains two values that add up to a target.
 * Approach: Start one pointer at each end and move inward based on the current sum.
 * Time Complexity: O(n).
 * Space Complexity: O(1).
 * Edge Cases: Returns false for empty arrays and null for invalid input.
 */
function hasPairWithTargetSum(numbers, target) {
  if (!Array.isArray(numbers) || typeof target !== 'number') {
    return null;
  }

  for (var i = 0; i < numbers.length; i += 1) {
    if (typeof numbers[i] !== 'number') {
      return null;
    }

    if (i > 0 && numbers[i] < numbers[i - 1]) {
      return null;
    }
  }

  var left = 0;
  var right = numbers.length - 1;

  while (left < right) {
    var total = numbers[left] + numbers[right];

    if (total === target) {
      return true;
    }

    if (total < target) {
      left += 1;
    } else {
      right -= 1;
    }
  }

  return false;
}

module.exports = hasPairWithTargetSum;
