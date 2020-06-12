const reader = require('../../reader.js');

function solution(input) {
    let numbers = input.split('').map(Number);
    let sum = 0;

    for (let x = 0; x < numbers.length; x = x + 1) {
        if (x === numbers.length  - 1 && numbers[x] === numbers[0]) {
            sum = sum + numbers[x];
        } else if (numbers[x] === numbers[x + 1]) {
            sum = sum + numbers[x];
        }
    }

    return sum;
}

reader.solve(solution);
