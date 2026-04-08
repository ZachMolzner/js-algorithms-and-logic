/**
 * Problem: Solve the find missing number problem with clear input validation.
 * Approach: Use a straightforward, beginner-friendly algorithm with early returns for invalid input.
 * Time Complexity: Varies by input size (see implementation details).
 * Space Complexity: Varies by approach; uses only needed helper storage.
 * Edge Cases: Handles empty input, invalid types, and boundary values when applicable.
 */
function findMissingNumber(numbers) {
  if (!Array.isArray(numbers)) {
    return null;
  }

  var maxExpectedValue = numbers.length;
  var expectedSum = (maxExpectedValue * (maxExpectedValue + 1)) / 2;
  var actualSum = 0;
  var seen = {};

  for (var i = 0; i < numbers.length; i += 1) {
    var value = numbers[i];

    if (!Number.isInteger(value) || value < 0 || value > maxExpectedValue) {
      return null;
    }

    if (Object.prototype.hasOwnProperty.call(seen, value)) {
      return null;
    }

    seen[value] = true;
    actualSum += value;
  }

  return expectedSum - actualSum;
}

module.exports = findMissingNumber;
