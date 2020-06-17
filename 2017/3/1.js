const reader = require('../../reader.js');

function solution(input) {
    let ringPosition = 1;
    let ringMultiplier = 1;

    while (true) {
        if (ringMultiplier * ringMultiplier >= input) {
            break;
        }

        ringPosition = ringPosition + 1;
        ringMultiplier = ringMultiplier + 2;
    }

    let minPosition = (ringMultiplier - 2) * (ringMultiplier - 2);
    let length = ringMultiplier - 1;
    let center = length / 2;
    let distance = 100000;

    for (let x = 0; x < 4; x = x + 1) {
        let newDistance = Math.abs(center - (input - minPosition));

        if (newDistance < distance) {
            distance = newDistance;
        }

        center = center + length;
    }

    return distance + (ringPosition - 1);
}

reader.solve(solution);
