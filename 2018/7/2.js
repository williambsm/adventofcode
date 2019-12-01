const reader = require('../../reader.js');

function solution(input) {
    input = input.split('\n');
    let steps = {};

    for (let step of input) {
        const letters = step.match(/[A-Z]/g);

        if (typeof steps[letters[1]] === 'undefined') {
            steps[letters[1]] = new Set([]);
        }

        if (typeof steps[letters[2]] === 'undefined') {
            steps[letters[2]] = new Set([letters[1]]);
        } else {
            steps[letters[2]].add(letters[1]);
        }
    }

    let orderedSteps = {};

    Object.keys(steps).sort().forEach(function(key) {
        orderedSteps[key] = steps[key];
    });

    let count = Object.keys(orderedSteps).length;
    let timer = -1;

    let workers = [
        [null, 0],
        [null, 0],
        [null, 0],
        [null, 0],
        [null, 0]
    ];

    while (count > 0) {
        for (let worker of workers) {
            if (worker[0] !== null) {
                worker[1] = worker[1] - 1;

                if (worker[1] === 0) {
                    for (let step in orderedSteps) {
                        orderedSteps[step].delete(worker[0]);
                    }

                    count = count - 1;
                    worker[0] = null;
                }
            }
        }

        for(let worker of workers) {
            if (worker[0] === null) {
                for (let step in orderedSteps) {
                    if (!orderedSteps[step].size) {
                        worker[0] = step;
                        worker[1] = 60 + step.charCodeAt(0) - 64;
                        delete orderedSteps[worker[0]];
                        break;
                    }
                }
            }
        }

        timer = timer + 1;
    }

    return timer;
}

reader.solve(solution);
