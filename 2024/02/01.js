const solver = require('../solver.js');

function solution(input, example) {
    const reports = input.split('\n').map((report) => report.split(' ').map(Number));
    let safe = 0;

    reports.forEach((report) => {
        let prev = report[0];
        let is_safe = true;

        if (
            solver.compareArrays(report, solver.sortAscending(report)) ||
            solver.compareArrays(report, solver.sortDescending(report))
        ) {
            for(let i = 1; i < report.length; i++) {
                if (prev === report[i] || Math.abs(report[i] - prev) > 3) {
                    is_safe = false;
                    break;
                }

                prev = report[i];
            }
        } else {
            is_safe = false;
        }

        is_safe ? safe++ : null;
    });

    return safe;
}

solver.solve(solution);
