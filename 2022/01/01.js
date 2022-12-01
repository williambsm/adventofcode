const r = require('../../reader2.js');

function solution(i, e) {
    return r.nl(i).map((elf) => r.l(elf).map(Number).reduce((a,b) => a+b, 0)).sort((a,b) => b-a)[0];
}

r.solve(solution);
