const reader = require('../../reader.js');

function solution(input) {
    let rows = input.split(',').map(Number);

    rows[1] = 12;
    rows[2] = 2;

    for (let index = 0; index < rows.length; index = index + 1) {
        if (rows[index] === 1) {
             rows[rows[index+3]] = rows[rows[index+1]] + rows[rows[index+2]];
             index = index + 3;
        } else if (rows[index] === 2) {
            rows[rows[index+3]] = rows[rows[index+1]] * rows[rows[index+2]];
            index = index + 3;
        } else if (rows[index] === 99) {
            return rows[0];
        }
    }
}

reader.solve(solution);
