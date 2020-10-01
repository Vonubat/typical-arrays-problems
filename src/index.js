
exports.min = function min(array) {
  if (!array || array.length === 0) {
    return 0;
  } else {
    // return Math.min.apply(null, array)
    return Math.min(...array);
  }
}

exports.max = function max(array) {
  if (!array || array.length === 0) {
    return 0;
  } else {
    // return Math.max.apply(null, array)
    return Math.max(...array);
  }
}

exports.avg = function avg(array) {
  if (!array || array.length === 0) {
    return 0;
  } else {
    return array.reduce((acc, cur) => (acc + cur), 0) / array.length;
  }
}