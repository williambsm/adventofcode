const reader = require('../../reader.js');

function solution(input) {
    let masses = input.split('\n');
    let totalFuel = 0;

    for (let mass of masses) {
        let fuel = Math.floor(mass / 3) - 2;
        totalFuel = totalFuel + fuel;

        while (fuel > 0) {
            fuel = Math.floor(fuel / 3) - 2;

            if (fuel > 0) {
                totalFuel = totalFuel + fuel;
            }
        }
    }

    return totalFuel;
}

reader.solve(solution);
