/**
 * Problem: Solve the count vowels problem with clear input validation.
 * Approach: Use a straightforward, beginner-friendly algorithm with early returns for invalid input.
 * Time Complexity: Varies by input size (see implementation details).
 * Space Complexity: Varies by approach; uses only needed helper storage.
 * Edge Cases: Handles empty input, invalid types, and boundary values when applicable.
 */
function countVowels(value) {
  if (typeof value !== 'string') {
    return null;
  }

  var matches = value.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

module.exports = countVowels;
