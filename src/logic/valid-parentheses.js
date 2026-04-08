/**
 * Problem: Valid parentheses.
 * Approach: Validate input, then solve with a straightforward step-by-step algorithm.
 * Time Complexity: Depends on input size (see implementation details).
 * Space Complexity: Depends on input size (see implementation details).
 * Edge Cases: Handles invalid inputs and empty values where reasonable.
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
