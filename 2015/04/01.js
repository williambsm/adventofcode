const reader = require('../../reader.js');
const md5 = require('../../md5.js');

function solution(input) {
    let x = 0;

    while (true) {
        let hash = md5.hash(input + x);
        let sub = hash.substring(0,5);

        if (sub === '00000') {
            return x;
        }

        x = x + 1;
    }
}

reader.solve(solution);
