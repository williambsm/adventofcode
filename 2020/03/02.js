const reader = require('../../reader.js');

function solution(input) {
    let map = input.split('\r\n');
    let slopeTrees = [];
    let row = 1;

    for (let slope = 1; slope !== 3 || row !== 2; slope = slope + 2) {
        let trees = 0;
        let x = 0;
        let y = 0;

        if (slope === 9) {
            slope = 1;
            row = 2;
        }

        for (let i = 1; i <= map.length - 1; i = i + row) {
            x = x + slope;
            y = y + row;

            if (x >= map[y].length ) {
                x = x - map[y].length;
            }

            if (y >= map.length) {
                y = y - map.length;
            }

            if (map[y][x] === "#") {
                trees++;
            }
        }

        slopeTrees.push(trees);
    }

    return slopeTrees.reduce((a, b) => a * b);
}

reader.solve(solution);
