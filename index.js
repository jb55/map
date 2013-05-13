
/**
 * Map the given `arr` with callback `fn(val, i)`.
 *
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 * @api public
 */

module.exports = function(xs, fn){
  var ret = [];
  var len = xs.length;
  for (var i = 0; i < len; ++i) {
    ret.push(fn(xs[i], i));
  }
  return ret;
};
