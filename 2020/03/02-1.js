const reader = require('../../reader.js');

function solution(input) {
    let map = input.split('\r\n');
    let trees = [0,0,0,0,0];

    for (let i = 0; i < map.length; i = i + 1) {
        let row = map[i];
        let length = row.length;

        if (row[i % length] === "#") {
            trees[0]++;
        }

        if (row[i*3 % length] === "#") {
            trees[1]++;
        }

        if (row[i*5 % length] === "#") {
            trees[2]++;
        }

        if (row[i*7 % length] === "#") {
            trees[3]++;
        }

        if (i % 2 === 0 && row[i/2%length] === "#") {
            trees[4]++;
        }
    }

    return trees[0] * trees[1] * trees[2] * trees[3] * trees[4];
}

reader.solve(solution);
