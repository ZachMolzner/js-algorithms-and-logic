function reverseString(value) {
  if (typeof value !== 'string') {
    return null;
  }

  return value.split('').reverse().join('');
}

module.exports = reverseString;
