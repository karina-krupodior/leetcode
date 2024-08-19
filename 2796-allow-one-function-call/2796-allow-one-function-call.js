/**
 * @param {Function} fn
 * @return {Function}
 */

function once(fn) {
  let hasBeenCalled = false;
  let result;

  return function(...args) {
    if (!hasBeenCalled) {
      hasBeenCalled = true;
      return fn(...args);
    }
    return undefined;
  };
}






/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
