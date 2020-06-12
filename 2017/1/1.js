const reader = require('../../reader.js');

function solution(input) {
    let numbers = input.split('').map(Number);
    let sum = 0;

    numbers.push(numbers[0]);

    for (let x = 0; x < numbers.length - 1; x = x + 1) {
        if (numbers[x] === numbers[x + 1]) {
            sum = sum + numbers[x];
        }
    }

    return sum;
}

reader.solve(solution);
