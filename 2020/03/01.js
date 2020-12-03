const reader = require('../../reader.js');

function solution(input) {
    let map = input.split('\r\n');
    let trees = 0;
    let x = 0;

    for (let y = 1; y <= map.length - 1; y = y + 1) {
        x = x + 3;

        if (x >= map[y].length ) {
            x = x - map[y].length;
        }

        if (map[y][x] === "#") {
            trees++;
        }
    }

    return trees;
}

reader.solve(solution);
