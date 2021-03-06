const reader = require('../../reader.js');

function solution(input) {
    let expenses = input.split('\r\n').map(Number);

    for (let x = 0; x < expenses.length; x = x + 1) {
        for (let y = x + 1; y < expenses.length; y = y + 1) {
            for (let z = y + 1; z < expenses.length; z = z + 1) {
                if (expenses[x] + expenses[y] + expenses[z] === 2020) {
                    return expenses[x] * expenses[y] * expenses[z];
                }
            }
        }
    }
}

reader.solve(solution);
