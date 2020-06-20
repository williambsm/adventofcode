const reader = require('../../reader.js');

function solution(input) {
    let maze = input.split('\r\n');
    let stepCount = 0;
    let index = 0;

    while (true) {
        if (typeof maze[index] !== 'undefined') {
            index = index + maze[index]++;
            stepCount++;
        } else {
            return stepCount;
        }
    }
}

reader.solve(solution);
