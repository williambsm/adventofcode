const reader = require('../../reader.js');

function solution(input) {
    let houses = new Set(['0-0']);
    let santa = [0,0];
    let robot = [0,0];
    let direction = null;
    let increment = null;

    for (let pos = 0; pos < input.length; pos = pos + 1) {
        if (input[pos] === '<') {
            direction = 0;
            increment = -1;
        } else if (input[pos] === '>') {
            direction = 0;
            increment = 1;
        } else if (input[pos] === '^') {
            direction = 1;
            increment = -1;
        } else {
            direction = 1;
            increment = 1;
        }

        if (pos % 2) {
            santa[direction] = santa[direction] + increment;
            houses.add(santa[0] + '-' + santa[1]);
        } else {
            robot[direction] = robot[direction] + increment;
            houses.add(robot[0] + '-' + robot[1]);
        }
    }

    return houses.size;
}

reader.solve(solution);
