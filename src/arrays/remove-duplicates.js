/**
 * Problem: Remove duplicates.
 * Approach: Validate input, then solve with a straightforward step-by-step algorithm.
 * Time Complexity: Depends on input size (see implementation details).
 * Space Complexity: Depends on input size (see implementation details).
 * Edge Cases: Handles invalid inputs and empty values where reasonable.
 */
function removeDuplicates(items) {
  if (!Array.isArray(items)) {
    return null;
  }

  return Array.from(new Set(items));
}

module.exports = removeDuplicates;
