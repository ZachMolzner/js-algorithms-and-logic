function removeDuplicates(items) {
  if (!Array.isArray(items)) {
    return null;
  }

  return Array.from(new Set(items));
}

module.exports = removeDuplicates;
