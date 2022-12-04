const r = require('../../reader2.js');

function solution(i, e) {
    return r.sum(r.l(i).map((pair) => {
        pair = pair.split(/,|-/);
        return (pair[0] <= pair[2] && pair[1] >= pair[3] || pair[2] <= pair[0] && pair[3] >= pair[1]) ? 1 : 0;
    }));
}

r.solve(solution);
