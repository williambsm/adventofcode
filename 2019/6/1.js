const reader = require('../../reader.js');

function solution(input) {
    input = input.split('\n');

    let orbits = [];
    let orbitsCount = 0;

    for (let index = 0; index < input.length; index = index + 1) {
        let position = input[index].split(')');

        if (typeof orbits[position[0]] === 'undefined') {
            orbits[position[0]] = [position[1]];
        } else {
            orbits[position[0]].push(position[1]);
        }

        if (typeof orbits[position[1]] === 'undefined') {
            orbits[position[1]] = [];
        }
    }

    navigateOrbit('COM', 0);

    function navigateOrbit(orbitIndex, increment) {
        orbitsCount = orbitsCount + increment;

        if (orbits[orbitIndex].length) {
            increment = increment + 1;

            for (let index = 0; index < orbits[orbitIndex].length; index = index + 1) {
                navigateOrbit(orbits[orbitIndex][index], increment);
            }
        }

        return increment;
    }

    return orbitsCount;
}

reader.solve(solution);
