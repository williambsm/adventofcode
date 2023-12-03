const r = require('../../reader2.js');

function solution(i, e) {
    const grid = r.l(i).map((l) => l.split(''));
    let total = 0;

    grid.forEach((row, x) => {
        row.forEach((col, y) => {
            if (col === '*') {
                total = total + calculateGearRatio(x, y, grid);
            }
        });
    });

    return total;
}

function calculateGearRatio(x, y, grid) {
    let exclusions = new Set();
    let ratio = [];

    for (let xset = -1; xset < 2; xset = xset + 1) {
        for (let yset = -1; yset < 2; yset = yset + 1) {
            const spot = grid[x + xset] ? grid[x + xset][y + yset] ?? null : null;
            if (spot && !exclusions.has(`${x+xset}, ${y+yset}`) && !isNaN(spot)) {
                const extract = extractNumber(x+xset, y+yset, grid);
                exclusions = new Set([...exclusions, ...extract[1]]);
                ratio.push(extract[0]);
            }
        }
    }

    if (ratio.length >= 2) {
        return ratio.reduce((a,b) => a * b);
    }

    return 0;
}

function extractNumber(x, y, grid) {
    let l = -1;
    let r = 1;
    const exclusions = new Set();

    let fullNumber = [grid[x][y]];

    while(grid[x][y+l] && !isNaN(grid[x][y+l])) {
        fullNumber.unshift(grid[x][y+l]);
        exclusions.add(`${x}, ${y+l}`);
        l = l - 1;
    }

    while (grid[x][y+r] && !isNaN(grid[x][y+r])) {
        fullNumber.push(grid[x][y+r]);
        exclusions.add(`${x}, ${y+r}`);
        r = r + 1;
    }

    return [parseInt(fullNumber.join('')), exclusions];
}

r.solve(solution);
