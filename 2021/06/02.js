const reader = require('../../reader.js');

function solution(input) {
    let fishies = input.split(',').map(Number);
    let days = [0,0,0,0,0,0,0,0,0];

    fishies.forEach((fish) => {
        days[fish]++;
    });

    for (let d = 0; d < 256; d = d + 1) {
        days = advanceDays(days);
    }

    return days.reduce((sum, a) => sum + a, 0);
}

function advanceDays(days) {
    let newDays = [0,0,0,0,0,0,days[0],0,days[0]];

    for (let i = 1; i < days.length; i = i + 1) {
        newDays[i-1] += days[i];
    }

    return newDays;
}

reader.solve(solution);
