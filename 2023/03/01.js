const r = require('../../reader2.js');

function solution(i, e) {
    const grid = r.l(i).map((l) => l.split(''));
    let exclusions = new Set();
    let total = 0;

    grid.forEach((row, x) => {
        row.forEach((col, y) => {
            if (!isNaN(col) && !exclusions.has(`${x}, ${y}`)) {
                const coords = checkSurroundings(x, y, grid)

                if (coords) {
                    const extract = extractNumber(coords, grid);
                    exclusions = new Set([...exclusions, ...extract[1]]);
                    total = total + extract[0];
                }
            }
        });
    });

    return total;
}

function checkSurroundings(x, y, grid) {
    for (let xset = -1; xset < 2; xset = xset + 1) {
        for (let yset = -1; yset < 2; yset = yset + 1) {
            const spot = grid[x + xset] ? grid[x + xset][y + yset] ?? null : null;
            if (spot && spot !== '.' && isNaN(spot)) {
                return [x, y];
            }
        }
    }

    return false;
}

function extractNumber(coords, grid) {
    let x = coords[0];
    let y = coords[1];
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
