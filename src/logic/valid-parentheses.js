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
