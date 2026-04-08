/**
 * Problem: Solve the valid parentheses problem with clear input validation.
 * Approach: Use a straightforward, beginner-friendly algorithm with early returns for invalid input.
 * Time Complexity: Varies by input size (see implementation details).
 * Space Complexity: Varies by approach; uses only needed helper storage.
 * Edge Cases: Handles empty input, invalid types, and boundary values when applicable.
 */
function validParentheses(value) {
  if (typeof value !== 'string') {
    return false;
  }

  var stack = [];
  var pairs = {
    ')': '(',
    ']': '[',
    '}': '{'
  };

  for (var i = 0; i < value.length; i += 1) {
    var character = value[i];

    if (character === '(' || character === '[' || character === '{') {
      stack.push(character);
    } else if (character === ')' || character === ']' || character === '}') {
      if (stack.pop() !== pairs[character]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

module.exports = validParentheses;
