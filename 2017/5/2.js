const reader = require('../../reader.js');

function solution(input) {
    let maze = input.split('\r\n');
    let stepCount = 0;
    let index = 0;

    while (true) {
        if (typeof maze[index] !== 'undefined') {
            if (maze[index] >= 3) {
                index = index + maze[index]--;
            } else {
                index = index + maze[index]++;
            }
            stepCount++;
        } else {
            return stepCount;
        }
    }
}

reader.solve(solution);
