function countVowels(value) {
  if (typeof value !== 'string') {
    return null;
  }

  var matches = value.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

module.exports = countVowels;
