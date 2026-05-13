/**
 * Problem: Fizzbuzz.
 * Approach: Validate input, then solve with a straightforward step-by-step algorithm.
 * Time Complexity: Depends on input size (see implementation details).
 * Space Complexity: Depends on input size (see implementation details).
 * Edge Cases: Handles invalid inputs and empty values where reasonable.
 */
function fizzBuzz(n) {
  if (!Number.isInteger(n) || n < 1) {
    return null;
  }

  var result = [];

  for (var i = 1; i <= n; i += 1) {
    if (i % 15 === 0) {
      result.push('FizzBuzz');
    } else if (i % 3 === 0) {
      result.push('Fizz');
    } else if (i % 5 === 0) {
      result.push('Buzz');
    } else {
      result.push(i);
    }
  }

  return result;
}

module.exports = fizzBuzz;
