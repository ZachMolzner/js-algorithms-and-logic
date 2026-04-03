function rotateArray(numbers, steps) {
  if (!Array.isArray(numbers) || !Number.isInteger(steps)) {
    return null;
  }

  for (var i = 0; i < numbers.length; i += 1) {
    if (typeof numbers[i] !== 'number') {
      return null;
    }
  }

  if (numbers.length === 0) {
    return [];
  }

  var normalizedSteps = steps % numbers.length;

  if (normalizedSteps < 0) {
    normalizedSteps += numbers.length;
  }

  if (normalizedSteps === 0) {
    return numbers.slice();
  }

  var rightPart = numbers.slice(numbers.length - normalizedSteps);
  var leftPart = numbers.slice(0, numbers.length - normalizedSteps);

  return rightPart.concat(leftPart);
}

module.exports = rotateArray;
