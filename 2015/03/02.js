const reader = require('../../reader.js');

function solution(input) {
    let houses = new Set(['0-0']);
    let santa = [0,0];
    let robo = [0,0];
    let direction = null;
    let increment = true;
    let toggle = false;

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

        if (toggle) {
            santa[direction] = santa[direction] + increment;
            houses.add(santa[0] + '-' + santa[1]);
        } else {
            robo[direction] = robo[direction] + increment;
            houses.add(robo[0] + '-' + robo[1]);
        }

        toggle = !toggle;
    }

    return houses.size;
}

reader.solve(solution);
