const r = require('../../reader2.js');

function solution(i, e) {
    return r.sum(r.nl(i).map((elf) => r.sum(r.l(elf).map(Number))).sort((a,b) => b-a).slice(0,3));
}

r.solve(solution);
