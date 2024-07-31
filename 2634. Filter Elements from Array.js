/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      // Check if the function returns a truthy value
      result.push(arr[i]); // Only push the element if the function returns a truthy value
    }
  }
  return result;
};

// Example usage:

arr = [0, 10, 20, 30];
fn = function greaterThan10(n) {
  return n > 10;
};
console.log(fn(arr[3]), "fn");

console.log(filter(arr, fn)); // Output: [20, 30]

arr = [1, 2, 3];
fn = function firstIndex(n, i) {
  if (i === 0) {
    return n;
  }
};
console.log(filter(arr, fn));

arr = [-2, -1, 0, 1, 2];
fn = function plusOne(n) {
  if (n + 1 !== 0) {
    return n;
  }
};
console.log(filter(arr, fn));
