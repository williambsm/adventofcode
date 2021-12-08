const reader = require('../../reader.js');

function solution(input) {
    let arr = input.split(',').map(Number);
    const minPosition = Math.min(...arr);
    const maxPosition = Math.max(...arr);
    const positions = [];

    for (let i = minPosition; i < maxPosition; i = i + 1) {
        positions[i] = 0;

        arr.forEach((crab) => {
            let steps = Math.abs(i - crab);

            for (let s = 1; s <= steps; s = s + 1) {
                positions[i] = positions[i] + s;
            }
        });
    }

    return Math.min(...positions);
}

reader.solve(solution);
