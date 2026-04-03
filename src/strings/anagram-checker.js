function anagramChecker(first, second) {
  if (typeof first !== 'string' || typeof second !== 'string') {
    return false;
  }

  var cleanedFirst = first.toLowerCase().replace(/[^a-z0-9]/g, '');
  var cleanedSecond = second.toLowerCase().replace(/[^a-z0-9]/g, '');

  if (cleanedFirst.length !== cleanedSecond.length) {
    return false;
  }

  var sortedFirst = cleanedFirst.split('').sort().join('');
  var sortedSecond = cleanedSecond.split('').sort().join('');

  return sortedFirst === sortedSecond;
}

module.exports = anagramChecker;
