const prompt = require("prompt-sync")();

let num = prompt("Please a enter a number.");
let num2 = prompt("Please a second enter a number.");

while(num % num2 != 0){
    x = x + 1
}

console.log(num,' is divisible by', num2);