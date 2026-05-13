/**
 * Problem: Find missing number.
 * Approach: Validate input, then solve with a straightforward step-by-step algorithm.
 * Time Complexity: Depends on input size (see implementation details).
 * Space Complexity: Depends on input size (see implementation details).
 * Edge Cases: Handles invalid inputs and empty values where reasonable.
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
