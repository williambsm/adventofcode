const reader = require('../../reader.js');

function solution(input) {
    let rows = input.split('\n');
    let sum = 0;

    for (const row of rows) {
        let numbers = row.split('\t').map(Number);

        let first = 0;
        let second = 1;

        while(true) {
            if (numbers[first] % numbers[second] === 0) {
                sum = sum + (numbers[first] / numbers[second]);
                break;
            } else if (numbers[second] % numbers[first] === 0) {
                sum = sum + (numbers[second] / numbers[first]);
                break;
            }

            if (second === numbers.length - 1) {
                first = first + 1;
                second = first + 1;
            } else {
                second = second + 1;
            }
        }
    }

    return sum;
}

reader.solve(solution);
