const r = require('../../reader2.js');

function solution(i, e) {
    return r.nl(i).map((elf) => r.sum(r.l(elf).map(Number))).sort((a,b) => b-a)[0];
}

r.solve(solution);
