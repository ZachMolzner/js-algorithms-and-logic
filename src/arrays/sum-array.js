/**
 * Problem: Sum array.
 * Approach: Validate input, then solve with a straightforward step-by-step algorithm.
 * Time Complexity: Depends on input size (see implementation details).
 * Space Complexity: Depends on input size (see implementation details).
 * Edge Cases: Handles invalid inputs and empty values where reasonable.
 */
function sumArray(numbers) {
  if (!Array.isArray(numbers)) {
    return null;
  }

  var total = 0;

  for (var i = 0; i < numbers.length; i += 1) {
    if (typeof numbers[i] !== 'number') {
      return null;
    }

    total += numbers[i];
  }

  return total;
}

module.exports = sumArray;
