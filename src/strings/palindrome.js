/**
 * Problem: Palindrome.
 * Approach: Validate input, then solve with a straightforward step-by-step algorithm.
 * Time Complexity: Depends on input size (see implementation details).
 * Space Complexity: Depends on input size (see implementation details).
 * Edge Cases: Handles invalid inputs and empty values where reasonable.
 */
function isPalindrome(value) {
  if (typeof value !== 'string') {
    return false;
  }

  var cleaned = value.toLowerCase().replace(/[^a-z0-9]/g, '');
  var reversed = cleaned.split('').reverse().join('');

  return cleaned === reversed;
}

module.exports = isPalindrome;
