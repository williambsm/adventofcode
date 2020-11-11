const reader = require('../../reader.js');

function solution(input) {
    let floor = 0;

    for (let x = 0; x < input.length; x = x + 1) {
        if (input[x] === '(') {
            floor++;
        } else {
            floor--;
        }
    }

    return floor;
}

reader.solve(solution);
