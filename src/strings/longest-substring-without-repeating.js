function longestSubstringWithoutRepeating(value) {
  if (typeof value !== 'string') {
    return null;
  }

  var seen = {};
  var start = 0;
  var maxLength = 0;

  for (var end = 0; end < value.length; end += 1) {
    var character = value[end];

    if (Object.prototype.hasOwnProperty.call(seen, character) && seen[character] >= start) {
      start = seen[character] + 1;
    }

    seen[character] = end;

    var currentLength = end - start + 1;
    if (currentLength > maxLength) {
      maxLength = currentLength;
    }
  }

  return maxLength;
}

module.exports = longestSubstringWithoutRepeating;
