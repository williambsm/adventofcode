const reader = require('../../reader.js');

function solution(input) {
    input = input.split('\n');

    let orbits = [];
    let orbitted = [];
    let transfers = null;
    let visited = new Set([]);

    for (let index = 0; index < input.length; index = index + 1) {
        let position = input[index].split(')');

        if (typeof orbits[position[0]] === 'undefined') {
            orbits[position[0]] = [position[1]];
        } else {
            orbits[position[0]].push(position[1]);
        }

        if (typeof orbitted[position[0]] === 'undefined') {
            orbitted[position[0]] = [];
        }

        if (typeof orbits[position[1]] === 'undefined') {
            orbits[position[1]] = [];
        }

        if (typeof orbitted[position[1]] === 'undefined') {
            orbitted[position[1]] = [position[0]];
        } else {
            orbitted[position[1]].push(position[0]);
        }
    }

    navigateTo('SAN', 'YOU', -2);

    function navigateTo(to, orbit, distance) {
        visited.add(orbit);

        if (orbit === to) {
            transfers = distance;
        }

        distance = distance + 1;

        if (orbits[orbit].length) {
            for (let index = 0; index < orbits[orbit].length; index = index + 1) {
                if (visited.has(orbits[orbit][index])) {
                    continue;
                }

                navigateTo(to, orbits[orbit][index], distance);
            }
        }

        if (orbitted[orbit].length) {
            for (let index = 0; index < orbitted[orbit].length; index = index + 1) {
                if (visited.has(orbitted[orbit][index])) {
                    continue;
                }

                navigateTo(to, orbitted[orbit][index], distance);
            }
        }

        return distance;
    }

    return transfers;
}

reader.solve(solution);
