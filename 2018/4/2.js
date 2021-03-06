const reader = require('../../reader.js');

function solution(input) {
    let logs = input.split('\n');
    let guards = {};
    let guardsTotal = {};
    let activeGuard = null;
    let asleep = null;
    let winnerGuard = null;
    let winnerMinute = null;
    let winnerMinuteTotal = null;

    logs.sort();

    logs = logs.map(function(log) {
        const date = log.substring(log.lastIndexOf('[') + 1, log.lastIndexOf(']'));
        const action = log.split('] ')[1];

        return [date, action];
    });

    for (let log of logs) {
        log[0] = log[0].split(/[- :]/g).map(Number);

        const firstLetter = log[1].substr(0,1);

        if (firstLetter === "G") {
            activeGuard = log[1].substring(log[1].lastIndexOf('#') + 1, log[1].lastIndexOf(' b'));

            if (typeof guards[activeGuard] === 'undefined') {
                guards[activeGuard] = {};
                guardsTotal[activeGuard] = 1;
            }
        } else if (firstLetter === "f") {
            asleep = log[0][4];
        } else if (firstLetter === "w") {
            for (let minute = asleep; minute < log[0][4]; minute += 1) {
                if (typeof guards[activeGuard][minute] === 'undefined') {
                    guards[activeGuard][minute] = 1;
                } else {
                    guards[activeGuard][minute]++;
                }

                guardsTotal[activeGuard]++;

                if (guards[activeGuard][minute] > winnerMinuteTotal) {
                    winnerMinute = minute;
                    winnerGuard = activeGuard;
                    winnerMinuteTotal = guards[activeGuard][minute];
                }
            }
        }
    }

    return winnerGuard * winnerMinute;
}

reader.solve(solution);
