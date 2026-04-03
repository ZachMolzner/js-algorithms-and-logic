function sumArray(numbers) {
  if (!Array.isArray(numbers)) {
    return null;
  }

  var total = 0;

  for (var i = 0; i < numbers.length; i += 1) {
    if (typeof numbers[i] !== 'number') {
      return null;
    }

    total += numbers[i];
  }

  return total;
}

module.exports = sumArray;
