/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  return function (x) {
    let result = x; // 3

    for (let i = functions.length - 1; i >= 0; i--) {
      result = functions[i](result);
    }
    return result;
  };
};

function addOne(x) {
  return x + 1;
}
function double(x) {
  return x * 2;
}
function square(x) {
  return x * x;
}

console.log(compose([addOne, double, square])(3)); // length = 3
