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
