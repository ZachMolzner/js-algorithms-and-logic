/**
 * Problem: Solve the palindrome problem with clear input validation.
 * Approach: Use a straightforward, beginner-friendly algorithm with early returns for invalid input.
 * Time Complexity: Varies by input size (see implementation details).
 * Space Complexity: Varies by approach; uses only needed helper storage.
 * Edge Cases: Handles empty input, invalid types, and boundary values when applicable.
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
