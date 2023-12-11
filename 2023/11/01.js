const r = require('../../reader2.js');

function solution(i, e) {
    const map = expandGalaxy(r.l(e).map((rows) => rows.split('')));
    const combinations = [];
    let total = 0;

    map.forEach((row, x) => {
        row.forEach((col, y) => {
            if (col === '#') {
                // console.log(`--- Star LOC: ${x}, ${y} ---`);
                combinations.forEach((com) => {
                    // console.log(`~ Comparing to Star LOC: ${com[0]}, ${com[1]} ~`);
                    // console.log(`Shortest distance: ${Math.abs(com[0] - x) + Math.abs(com[1] - y)}`);
                    total = total + (Math.abs(com[0] - x) + Math.abs(com[1] - y));
                });

                combinations.push([x, y]);
            }
        });
    });

    return total;
}

function expandGalaxy(map) {
    const expandedMap = [];

    for (let i = 0; i < map[0].length; i = i + 1) {
        if (map.every((row) => row[i] === '.')) {
            map.map((row) => row.splice(i, 0, '.'));
            i = i + 1;
        }
    }

    map.forEach((row) => {
        expandedMap.push(row);

        if (row.every((col) => col === '.')) {
            expandedMap.push(row);
        }
    });

    return expandedMap;
}

r.solve(solution);
