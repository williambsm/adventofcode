const reader = require('../../reader.js');

function solution(input) {
    let houses = new Set(['0-0']);
    let x = 0;
    let y = 0;

    for (let pos = 0; pos < input.length; pos = pos + 1) {
        if (input[pos] === '<') {
            x = x - 1;
        } else if (input[pos] === '>') {
            x = x + 1;
        } else if (input[pos] === '^') {
            y = y + 1;
        } else {
            y = y - 1;
        }

        houses.add(x + '-' + y);
    }

    return houses.size;
}

reader.solve(solution);
