const reader = require('../../reader.js');

function solution(input) {
    let rows = input.split('\n');
    let sum = 0;

    for (let x = 0; x < rows.length; x = x + 1) {
        let numbers = rows[x].split('\t').map(Number);
        sum = sum + (Math.max(...numbers) - Math.min(...numbers));
    }

    return sum;
}

reader.solve(solution);
