function groupByProperty(items, property) {
  if (!Array.isArray(items) || typeof property !== 'string' || property.length === 0) {
    return null;
  }

  var grouped = {};

  for (var i = 0; i < items.length; i += 1) {
    var item = items[i];

    if (item === null || typeof item !== 'object') {
      return null;
    }

    var key = Object.prototype.hasOwnProperty.call(item, property) ? item[property] : 'undefined';
    var bucket = String(key);

    if (!grouped[bucket]) {
      grouped[bucket] = [];
    }

    grouped[bucket].push(item);
  }

  return grouped;
}

module.exports = groupByProperty;
