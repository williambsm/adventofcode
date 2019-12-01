const reader = require('../../reader.js');

function solution(input) {
    input = input.split('\n');
    let steps = {};
    let orderOfSteps = '';

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

    while (count > 0) {
        for (let step in orderedSteps) {
            if (!orderedSteps[step].size) {
                orderOfSteps = orderOfSteps + step;
                delete orderedSteps[step];
                count = count - 1;

                for (let step2 in orderedSteps) {
                    if (orderedSteps[step2].has(step)) {
                        orderedSteps[step2].delete(step);
                    }
                }

                break;
            }
        }
    }

    return orderOfSteps;
}

reader.solve(solution);
