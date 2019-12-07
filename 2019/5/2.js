const reader = require('../../reader.js');
const computer = require('../computer.js');

function solution(input) {
    input = input.split(',').map(Number);

    computer.readIntcode(input, 5);

    return true;
}

reader.solve(solution);
