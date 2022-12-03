const r = require('../../reader2.js');

function solution(i, e) {
    const rucksacks = r.l(i);
    const groups = [];

    for (let c = 0; c < rucksacks.length; c += 3) {
        const tier1 = [...rucksacks[c]].filter((item) => [...rucksacks[c+1]].includes(item));
        const badge = tier1.find((item) => [...rucksacks[c+2]].includes(item));
        groups.push((badge.toLowerCase().charCodeAt(0) - 96) + (badge.toLowerCase() !== badge ? 26 : 0));
    }

    return r.sum(groups);
}

r.solve(solution);
