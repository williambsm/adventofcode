const reader = require('../../reader.js');

function solution(input) {
    let measurements = input.split('\r\n').map(Number);
    let count = 0;

    for (let i = 1; i < measurements.length; i = i + 1) {
        if (measurements[i - 1] < measurements[i]) count++;
    }

    return count;
}

reader.solve(solution);
