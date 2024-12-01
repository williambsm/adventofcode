const r = require('../../reader2.js');

function solution(i, e) {
    const left = [];
    const right = [];
    let diff = 0;

    i.split('\n').forEach((raw) => {
        let row = raw.split('   ');

        left.push(row[0]);
        right.push(row[1]);
    });

    left.sort((a, b) => a - b);
    right.sort((a, b) => a - b);

    for (let x = 0; x < left.length; x++) {
        diff += Math.abs(left[x] - right[x]);
    }

    return diff;
}

r.solve(solution);
