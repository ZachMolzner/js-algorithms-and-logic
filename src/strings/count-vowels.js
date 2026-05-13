/**
 * Problem: Count vowels.
 * Approach: Validate input, then solve with a straightforward step-by-step algorithm.
 * Time Complexity: Depends on input size (see implementation details).
 * Space Complexity: Depends on input size (see implementation details).
 * Edge Cases: Handles invalid inputs and empty values where reasonable.
 */
function countVowels(value) {
  if (typeof value !== 'string') {
    return null;
  }

  var matches = value.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

module.exports = countVowels;
