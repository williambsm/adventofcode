const r = require('../../reader2.js');

function solution(i, e) {
    const left = [];
    const right = [];
    let similarity = 0;

    i.split('\n').forEach((raw) => {
        let row = raw.split('   ');

        left.push(row[0]);
        right.push(row[1]);
    });

    left.forEach((left_num) => {
        similarity += right.reduce((a, b) => (b === left_num ? a + 1 : a), 0) * left_num;
    });

    return similarity;
}

r.solve(solution);
