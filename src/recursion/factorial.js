/**
 * Problem: Factorial.
 * Approach: Validate input, then solve with a straightforward step-by-step algorithm.
 * Time Complexity: Depends on input size (see implementation details).
 * Space Complexity: Depends on input size (see implementation details).
 * Edge Cases: Handles invalid inputs and empty values where reasonable.
 */
function factorial(n) {
  if (!Number.isInteger(n)) {
    return null;
  }

  if (n < 0) {
    return null;
  }

  if (n === 0 || n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

module.exports = factorial;
