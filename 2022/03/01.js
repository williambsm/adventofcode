const r = require('../../reader2.js');

function solution(i, e) {
    return r.sum(r.l(i).map((rucksack) => {
        const left = [...rucksack.slice(0, rucksack.length / 2 - rucksack.length)];
        const right = [...rucksack.slice(rucksack.length / 2)];
        const item = left.find((x) => right.includes(x));
        return (item.toLowerCase().charCodeAt(0) - 96) + (item.toLowerCase() !== item ? 26 : 0);
    }));
}

r.solve(solution);
