/**
 * Problem: Solve the first non repeating char problem with clear input validation.
 * Approach: Use a straightforward, beginner-friendly algorithm with early returns for invalid input.
 * Time Complexity: Varies by input size (see implementation details).
 * Space Complexity: Varies by approach; uses only needed helper storage.
 * Edge Cases: Handles empty input, invalid types, and boundary values when applicable.
 */
function firstNonRepeatingChar(value) {
  if (typeof value !== 'string') {
    return null;
  }

  var counts = {};

  for (var i = 0; i < value.length; i += 1) {
    var char = value[i];
    counts[char] = (counts[char] || 0) + 1;
  }

  for (var j = 0; j < value.length; j += 1) {
    if (counts[value[j]] === 1) {
      return value[j];
    }
  }

  return null;
}

module.exports = firstNonRepeatingChar;
