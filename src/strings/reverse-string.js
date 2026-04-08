/**
 * Problem: Reverse string.
 * Approach: Validate input, then solve with a straightforward step-by-step algorithm.
 * Time Complexity: Depends on input size (see implementation details).
 * Space Complexity: Depends on input size (see implementation details).
 * Edge Cases: Handles invalid inputs and empty values where reasonable.
 */
function reverseString(value) {
  if (typeof value !== 'string') {
    return null;
  }

  return value.split('').reverse().join('');
}

module.exports = reverseString;
