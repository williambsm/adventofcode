const reader = require('../../reader.js');

function solution(input) {
    let xmas = reader.buildLine(input).map(Number);
    let current = [];
    const limit = 25;

    for (let index = 0; index < xmas.length; index = index + 1) {
        current.push(xmas[index]);

        if (current.length > limit) {
            let match = false;

            for (let first = 0; first < current.length; first = first + 1) {
                for (let second = first + 1; second < current.length; second = second + 1) {
                    if (current[first] + current[second] === xmas[index]) {
                        match = true;
                    }
                }
            }

            if (!match) {
                return xmas[index];
            }

            current.shift();
        }
    }
}

reader.solve(solution);
