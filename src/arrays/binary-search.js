/**
 * Problem: Binary search.
 * Approach: Validate input, then solve with a straightforward step-by-step algorithm.
 * Time Complexity: Depends on input size (see implementation details).
 * Space Complexity: Depends on input size (see implementation details).
 * Edge Cases: Handles invalid inputs and empty values where reasonable.
 */
function binarySearch(numbers, target) {
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

  while (left <= right) {
    var middleIndex = Math.floor((left + right) / 2);
    var middleValue = numbers[middleIndex];

    if (middleValue === target) {
      return middleIndex;
    }

    if (middleValue < target) {
      left = middleIndex + 1;
    } else {
      right = middleIndex - 1;
    }
  }

  return -1;
}

module.exports = binarySearch;
