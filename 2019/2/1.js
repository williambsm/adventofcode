const reader = require('../../reader.js');
const computer = require('../computer.js');

function solution(input) {
    let rows = input.split(',').map(Number);

    rows[1] = 12;
    rows[2] = 2;

    return computer.readIntcode(rows);
}

reader.solve(solution);
