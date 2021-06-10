const prompt = require('prompt-sync')();

let input = prompt('Enter some numbers (type "done" when complete)');

const sum = Number(input);

while (input !== "done"){
    input = prompt('Enter number to add ');
}