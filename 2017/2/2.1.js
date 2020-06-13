const reader = require('../../reader.js');

function solution(input) {
    let rows = input.split('\n');
    let sum = 0;

    for (const row of rows) {
        let numbers = row.split('\t').map(Number);

        for (const firstNumber of numbers) {
            for (const secondNumber of numbers) {
                if (firstNumber !== secondNumber && firstNumber % secondNumber === 0) {
                    sum = sum + (firstNumber / secondNumber);
                    break;
                }
            }

        }
    }

    return sum;
}

reader.solve(solution);
