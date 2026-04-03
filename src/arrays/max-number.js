function maxNumber(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return null;
  }

  var largest = numbers[0];

  for (var i = 0; i < numbers.length; i += 1) {
    if (typeof numbers[i] !== 'number') {
      return null;
    }

    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }

  return largest;
}

module.exports = maxNumber;
