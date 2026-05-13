/**
 * Problem: Anagram checker.
 * Approach: Validate input, then solve with a straightforward step-by-step algorithm.
 * Time Complexity: Depends on input size (see implementation details).
 * Space Complexity: Depends on input size (see implementation details).
 * Edge Cases: Handles invalid inputs and empty values where reasonable.
 */
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
