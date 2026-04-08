/**
 * Problem: Merge intervals.
 * Approach: Validate input, then solve with a straightforward step-by-step algorithm.
 * Time Complexity: Depends on input size (see implementation details).
 * Space Complexity: Depends on input size (see implementation details).
 * Edge Cases: Handles invalid inputs and empty values where reasonable.
 */
function mergeIntervals(intervals) {
  if (!Array.isArray(intervals)) {
    return null;
  }

  if (intervals.length === 0) {
    return [];
  }

  var validatedIntervals = [];

  for (var i = 0; i < intervals.length; i += 1) {
    var interval = intervals[i];

    if (!Array.isArray(interval) || interval.length !== 2) {
      return null;
    }

    var start = interval[0];
    var end = interval[1];

    if (typeof start !== 'number' || typeof end !== 'number') {
      return null;
    }

    if (start <= end) {
      validatedIntervals.push([start, end]);
    } else {
      validatedIntervals.push([end, start]);
    }
  }

  validatedIntervals.sort(function (first, second) {
    return first[0] - second[0];
  });

  var merged = [validatedIntervals[0].slice()];

  for (var j = 1; j < validatedIntervals.length; j += 1) {
    var current = validatedIntervals[j];
    var lastMerged = merged[merged.length - 1];

    if (current[0] <= lastMerged[1]) {
      lastMerged[1] = Math.max(lastMerged[1], current[1]);
    } else {
      merged.push(current.slice());
    }
  }

  return merged;
}

module.exports = mergeIntervals;
