/**
 * Problem: Solve the anagram checker problem with clear input validation.
 * Approach: Use a straightforward, beginner-friendly algorithm with early returns for invalid input.
 * Time Complexity: Varies by input size (see implementation details).
 * Space Complexity: Varies by approach; uses only needed helper storage.
 * Edge Cases: Handles empty input, invalid types, and boundary values when applicable.
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
