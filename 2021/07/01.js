const reader = require('../../reader.js');

function solution(input) {
    let arr = input.split(',').map(Number);
    const minPosition = Math.min(...arr);
    const maxPosition = Math.max(...arr);
    const positions = [];

    for (let i = minPosition; i < maxPosition; i = i + 1) {
        positions[i] = 0;

        arr.forEach((crab) => {
            positions[i] = positions[i] + Math.abs(i - crab);
        });
    }

    return Math.min(...positions);
}

reader.solve(solution);
