function findMissingNumber(numbers) {
  if (!Array.isArray(numbers)) {
    return null;
  }

  var maxExpectedValue = numbers.length;
  var expectedSum = (maxExpectedValue * (maxExpectedValue + 1)) / 2;
  var actualSum = 0;
  var seen = {};

  for (var i = 0; i < numbers.length; i += 1) {
    var value = numbers[i];

    if (!Number.isInteger(value) || value < 0 || value > maxExpectedValue) {
      return null;
    }

    if (Object.prototype.hasOwnProperty.call(seen, value)) {
      return null;
    }

    seen[value] = true;
    actualSum += value;
  }

  return expectedSum - actualSum;
}

module.exports = findMissingNumber;
