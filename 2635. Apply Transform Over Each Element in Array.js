/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

//Given an integer array arr and a mapping function fn
var map = function (arr, fn) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    //fn - это функция, которая передается в качестве параметра в вашу функцию map.
//fn(arr[i], i) - это вызов функции fn с двумя аргументами:
//arr[i] - текущий элемент массива.
//i - текущий индекс.
    newArr.push(fn(arr[i], i));
  }
  return newArr;
};

let example = [15, 10, 20, 5]; // Given an integer array arr
let plusone = function (n) {
  return n + 1;
};

let plusI = function (n, i) {
  return n + i;
};

let constant = function () {
  return 42;
};

console.log(map(example, constant));

// return a new array with a transformation applied to each element
//  The returned array should be created such that returnedArray[i] = fn(arr[i], i)
// const map1 = array1.map((x) => x * 2);


