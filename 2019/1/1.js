const reader = require('../../reader.js');

function solution(input) {
    let masses = input.split('\n');
    let totalFuel = 0;

    for (let mass of masses) {
        totalFuel = totalFuel + Math.floor(mass / 3) - 2;
    }

    return totalFuel;
}

reader.solve(solution);
