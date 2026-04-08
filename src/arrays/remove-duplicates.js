/**
 * Problem: Solve the remove duplicates problem with clear input validation.
 * Approach: Use a straightforward, beginner-friendly algorithm with early returns for invalid input.
 * Time Complexity: Varies by input size (see implementation details).
 * Space Complexity: Varies by approach; uses only needed helper storage.
 * Edge Cases: Handles empty input, invalid types, and boundary values when applicable.
 */
function removeDuplicates(items) {
  if (!Array.isArray(items)) {
    return null;
  }

  return Array.from(new Set(items));
}

module.exports = removeDuplicates;
