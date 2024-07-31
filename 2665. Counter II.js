/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let counter = init;
  let obj = {
    increment: function () {
      return (counter = counter + 1);
    },
    decrement: function () {
      return (counter = counter - 1);
    },
    reset: function () {
      return (counter = init);
    },
  };

  return obj;
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
console.log(createCounter(5).increment());
console.log(createCounter(5).reset());
console.log(createCounter(5).decrement());
