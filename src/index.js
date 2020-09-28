
exports.min = function min (array = []) {
  if(array.length !== 0) {
    return Math.min.apply(null, array);
  } else return 0;
  
}

exports.max = function max (array = []) {
  if(array.length !== 0) {
    return Math.max.apply(null, array);
  } else return 0;
}

exports.avg = function avg (array = []) {
  if(array.length !== 0) {
    return array.reduce((acc, item, i) => {
      return acc + item;
    }, 0) / array.length;
  } else return 0;
}
