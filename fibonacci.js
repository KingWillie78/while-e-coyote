const prompt = require('prompt-sync')();

let n = prompt('How many fibonacci values should we print? ');
n = Number(n);


let count = 0;
let fibonacciValue1 = 0;
let fibonaccivalue2 = 1;


while (count < n) {
    console.log(fibonacciValue1);
    const fibonacciValue3 = fibonacciValue1 + fibonaccivalue2;
    fibonacciValue1 = fibonaccivalue2;
    fibonaccivalue2 = fibonacciValue3;
    count = count + 1;
}