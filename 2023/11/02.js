const r = require('../../reader2.js');

function solution(i, e) {
    const map = expandGalaxy(r.l(i).map((rows) => rows.split('')));
    const combinations = [];
    let total = 0;

    map.forEach((row, x) => {
        row.forEach((col, y) => {
            if (col === '#') {
                combinations.forEach((com) => {
                    const xDistance = Math.abs(com[0] - x);
                    const yDistance = Math.abs(com[1] - y);
                    let multipliers = 0;

                    for(let xs = Math.min(com[0], x); xs < Math.max(com[0], x); xs = xs + 1) {
                        if (map[xs][0] === '*') {
                            multipliers = multipliers + 1;
                        }
                    }

                    for(let ys = Math.min(com[1], y); ys < Math.max(com[1], y); ys = ys + 1) {
                        if (map[0][ys] === '*') {
                            multipliers = multipliers + 1;
                        }
                    }

                    if (multipliers > 0) {
                        multipliers = multipliers * 999999;
                    }

                    total = total + xDistance + yDistance + multipliers;
                });

                combinations.push([x, y]);
            }
        });
    });

    return total;
}

function expandGalaxy(map) {
    for (let i = 0; i < map[0].length; i = i + 1) {
        if (map[i].every((col) => (col === '.' || col === '*'))) {
            map[i] = map[i].map(() => '*');
        }

        if (map.every((row) => (row[i] === '.' || row[i] === '*'))) {
            map.map((row) => row[i] = '*');
        }
    }

    return map;
}

r.solve(solution);
