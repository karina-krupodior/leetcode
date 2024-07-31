var createHelloWorld = function() {
    return function(...args) {
        return "Hello World";
    };
};

const inner_fun = createHelloWorld(); // consol return [Function (anonymous)]
console.log(inner_fun)
console.log(inner_fun()); // consol return "Hello World"


// Чтобы вызвать внутреннюю функцию, возвращаемую createHelloWorld, вам нужно сначала выполнить 
// вызов createHelloWorld() и сохранить результат в переменную, а затем вызвать эту переменную как функцию.


// Таким образом, вам нужно выполнить два шага:

// Вызвать функцию createHelloWorld() и сохранить возвращенную функцию в переменную.
// Вызвать сохраненную функцию, чтобы получить строку "Hello, World!".


console.log(createHelloWorld()()); // Вывод: "Hello, World!"
const createHelloWorld2 = () => () => "Hello, World!";
console.log(createHelloWorld2()()); // Вывод: "Hello, World!"
console.log((() => () => "Hello, World!")()()); // Вывод: "Hello, World!"