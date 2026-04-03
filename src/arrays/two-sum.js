function twoSum(numbers, target) {
  if (!Array.isArray(numbers) || typeof target !== 'number') {
    return null;
  }

  var seen = {};

  for (var i = 0; i < numbers.length; i += 1) {
    if (typeof numbers[i] !== 'number') {
      return null;
    }

    var complement = target - numbers[i];

    if (Object.prototype.hasOwnProperty.call(seen, complement)) {
      return [seen[complement], i];
    }

    seen[numbers[i]] = i;
  }

  return null;
}

module.exports = twoSum;
