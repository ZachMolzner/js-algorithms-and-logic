/**
 * Problem: Is prime.
 * Approach: Validate input, then solve with a straightforward step-by-step algorithm.
 * Time Complexity: Depends on input size (see implementation details).
 * Space Complexity: Depends on input size (see implementation details).
 * Edge Cases: Handles invalid inputs and empty values where reasonable.
 */
function isPrime(value) {
  if (!Number.isInteger(value) || value < 2) {
    return false;
  }

  if (value === 2) {
    return true;
  }

  if (value % 2 === 0) {
    return false;
  }

  for (var i = 3; i * i <= value; i += 2) {
    if (value % i === 0) {
      return false;
    }
  }

  return true;
}

module.exports = isPrime;
