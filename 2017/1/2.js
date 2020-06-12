const reader = require('../../reader.js');

function solution(input) {
    let numbers = input.split('').map(Number);
    let sum = 0;
    let steps = numbers.length / 2;

    for (let x = 0; x < numbers.length; x = x + 1) {
        let comparePos = x + steps;

        if (comparePos >= numbers.length) {
            comparePos = comparePos - numbers.length;
        }

        if (numbers[x] === numbers[comparePos]) {
            sum = sum + numbers[x];
        }
    }

    return sum;
}

reader.solve(solution);
