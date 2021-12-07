const reader = require('../../reader.js');

function solution(input) {
    const arr = input.split('\r\n').map((instr) => instr.split(' -> ').map((dir) => dir.split(',').map(Number)));
    const waves = {};
    let duplicates = 0;

    arr.forEach((instruction) => {
        let start = instruction[0];
        let end = instruction[1];

        let xRange = getRange(start[0], end[0]);
        let yRange = getRange(start[1], end[1]);

        if (xRange.length > 1 && yRange.length === 1) {
            xRange.forEach((x) => {
                addWave(waves, `${x}, ${yRange[0]}`);
            });
        } else if (xRange.length === 1 && yRange.length > 1) {
            yRange.forEach((y) => {
                addWave(waves, `${xRange[0]}, ${y}`);
            });
        }
    });

    for (const wave in waves) {
        if (waves[wave] > 1) {
            duplicates++;
        }
    }

    return duplicates;
}

function getRange(num1, num2) {
    let range = [];

    if (num1 < num2) {
        for (let i = num1; i <= num2; i = i + 1) {
            range.push(i);
        }
    } else {
        for (let i = num1; i >= num2; i = i - 1) {
            range.push(i);
        }
    }

    return range;
}

function addWave(waves, wave) {
    if (typeof waves[wave] === 'undefined') {
        waves[wave] = 1;
    } else {
        waves[wave]++;
    }

    return waves;
}

reader.solve(solution);
