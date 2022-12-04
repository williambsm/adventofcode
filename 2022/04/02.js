const r = require('../../reader2.js');

function solution(i, e) {
    return r.sum(r.l(i).map((pair) => {
        pair = pair.split(/,|-/).map(Number);
        const left = [];
        const right = [];

        for(let s = pair[0]; s <= pair[1]; s += 1) {
            left.push(s);
        }

        for (let s = pair[2]; s <= pair[3]; s += 1) {
            right.push(s);
        }

        return left.find((n) => right.includes(n)) ? 1 : 0;
    }));
}

r.solve(solution);
