module.exports = function longestConsecutiveLength(array) {

  var i = 0;
  var count = 1;
  var result = 1;
  var povtor = 0;

  array.sort(function (a, b) {
    return a - b;
  });

  if (array.length === 0) {
    return result = 0;
  }
  for (i; i < array.length; i++) {
    while ((array[i + 1] - array[i] === 1) || (array[i + 1] - array[i] === 0)) {
      if ((array[i + 1] - array[i] === 0)) {
        povtor++;
      }
      i++; count++;
    }
    if (result < count - povtor) {
      result = count - povtor;
    }
    array.splice(0, count);
    i = 0; count = 1; povtor = 0;
  }
  return result;
}

