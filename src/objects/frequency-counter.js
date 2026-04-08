/**
 * Problem: Frequency counter.
 * Approach: Validate input, then solve with a straightforward step-by-step algorithm.
 * Time Complexity: Depends on input size (see implementation details).
 * Space Complexity: Depends on input size (see implementation details).
 * Edge Cases: Handles invalid inputs and empty values where reasonable.
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
