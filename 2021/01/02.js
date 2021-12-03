const reader = require('../../reader.js');

function solution(input) {
    let measurements = input.split('\r\n').map(Number);
    let count = 0;

    for (let i = 0; i < measurements.length - 3; i = i + 1) {
        const a = measurements[i] + measurements[i+1] + measurements[i+2];
        const b = measurements[i+1] + measurements[i+2] + measurements[i+3];

        if (a < b) count++;
    }

    return count;
}

reader.solve(solution);
