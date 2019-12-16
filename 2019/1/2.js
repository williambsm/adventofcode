const reader = require('../../reader.js');

function solution(input) {
    const masses = input.split('\n');
    let totalFuel = 0;

    for (let mass of masses) {
        while(mass > 0) {
            totalFuel += mass = Math.floor(mass / 3) - 2;
        }
    }

    return totalFuel;
}

reader.solve(solution);
