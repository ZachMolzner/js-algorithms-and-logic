/**
 * Problem: Solve the frequency counter problem with clear input validation.
 * Approach: Use a straightforward, beginner-friendly algorithm with early returns for invalid input.
 * Time Complexity: Varies by input size (see implementation details).
 * Space Complexity: Varies by approach; uses only needed helper storage.
 * Edge Cases: Handles empty input, invalid types, and boundary values when applicable.
 */
function frequencyCounter(items) {
  if (!Array.isArray(items)) {
    return null;
  }

  var counts = {};

  for (var i = 0; i < items.length; i += 1) {
    var key = String(items[i]);
    counts[key] = (counts[key] || 0) + 1;
  }

  return counts;
}

module.exports = frequencyCounter;
