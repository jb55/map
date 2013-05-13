/**
 * Map the given `arr` with callback `fn(val, i)`.
 *
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 * @api public
 */

// http://jsperf.com/map-with-allocated-array-vs-non-allocated
module.exports = function(xs, fn){
  var len = xs.length;
  var ret = new Array(len);
  for (var i = 0; i < len; ++i) {
    ret.push(fn(xs[i], i));
  }
  return ret;
};
