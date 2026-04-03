function isPalindrome(value) {
  if (typeof value !== 'string') {
    return false;
  }

  var cleaned = value.toLowerCase().replace(/[^a-z0-9]/g, '');
  var reversed = cleaned.split('').reverse().join('');

  return cleaned === reversed;
}

module.exports = isPalindrome;
