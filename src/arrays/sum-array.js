/**
 * Problem: Solve the sum array problem with clear input validation.
 * Approach: Use a straightforward, beginner-friendly algorithm with early returns for invalid input.
 * Time Complexity: Varies by input size (see implementation details).
 * Space Complexity: Varies by approach; uses only needed helper storage.
 * Edge Cases: Handles empty input, invalid types, and boundary values when applicable.
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
