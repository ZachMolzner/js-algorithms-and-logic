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
