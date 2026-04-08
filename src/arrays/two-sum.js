/**
 * Problem: Two sum.
 * Approach: Validate input, then solve with a straightforward step-by-step algorithm.
 * Time Complexity: Depends on input size (see implementation details).
 * Space Complexity: Depends on input size (see implementation details).
 * Edge Cases: Handles invalid inputs and empty values where reasonable.
 */
function twoSum(numbers, target) {
  if (!Array.isArray(numbers) || typeof target !== 'number') {
    return null;
  }

  var seen = {};

  for (var i = 0; i < numbers.length; i += 1) {
    if (typeof numbers[i] !== 'number') {
      return null;
    }

    var complement = target - numbers[i];

    if (Object.prototype.hasOwnProperty.call(seen, complement)) {
      return [seen[complement], i];
    }

    seen[numbers[i]] = i;
  }

  return null;
}

module.exports = twoSum;
