/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let counter = n
    
    return function() {
        return counter = counter + 1
    };
};

console.log(createCounter())
const counter = createCounter(10)
//  counter() // 10
//  counter() // 11
//counter() // 12
console.log(counter())
console.log(counter())
console.log(counter())