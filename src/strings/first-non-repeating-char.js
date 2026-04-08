/**
 * Problem: First non repeating char.
 * Approach: Validate input, then solve with a straightforward step-by-step algorithm.
 * Time Complexity: Depends on input size (see implementation details).
 * Space Complexity: Depends on input size (see implementation details).
 * Edge Cases: Handles invalid inputs and empty values where reasonable.
 */
function firstNonRepeatingChar(value) {
  if (typeof value !== 'string') {
    return null;
  }

  var counts = {};

  for (var i = 0; i < value.length; i += 1) {
    var char = value[i];
    counts[char] = (counts[char] || 0) + 1;
  }

  for (var j = 0; j < value.length; j += 1) {
    if (counts[value[j]] === 1) {
      return value[j];
    }
  }

  return null;
}

module.exports = firstNonRepeatingChar;
