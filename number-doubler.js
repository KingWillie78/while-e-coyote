const prompt = require("prompt-sync")();

let num = Number(prompt("Enter a number: "));
console.log(num);

while(num < 100){
    num = num * 2
    console.log(num);
}