const input = 'Step J must be finished before step E can begin.|Step X must be finished before step G can begin.|Step D must be finished before step A can begin.|Step K must be finished before step M can begin.|Step P must be finished before step Z can begin.|Step F must be finished before step O can begin.|Step B must be finished before step I can begin.|Step U must be finished before step W can begin.|Step A must be finished before step R can begin.|Step E must be finished before step R can begin.|Step H must be finished before step C can begin.|Step O must be finished before step S can begin.|Step Q must be finished before step Y can begin.|Step V must be finished before step W can begin.|Step T must be finished before step N can begin.|Step S must be finished before step I can begin.|Step Y must be finished before step W can begin.|Step Z must be finished before step C can begin.|Step M must be finished before step L can begin.|Step L must be finished before step W can begin.|Step N must be finished before step I can begin.|Step I must be finished before step G can begin.|Step C must be finished before step G can begin.|Step G must be finished before step R can begin.|Step R must be finished before step W can begin.|Step Z must be finished before step R can begin.|Step Z must be finished before step N can begin.|Step G must be finished before step W can begin.|Step L must be finished before step G can begin.|Step Y must be finished before step R can begin.|Step P must be finished before step I can begin.|Step C must be finished before step W can begin.|Step T must be finished before step G can begin.|Step T must be finished before step R can begin.|Step V must be finished before step Z can begin.|Step L must be finished before step C can begin.|Step K must be finished before step I can begin.|Step J must be finished before step I can begin.|Step Q must be finished before step C can begin.|Step F must be finished before step A can begin.|Step H must be finished before step Y can begin.|Step M must be finished before step N can begin.|Step P must be finished before step H can begin.|Step M must be finished before step C can begin.|Step V must be finished before step Y can begin.|Step O must be finished before step V can begin.|Step O must be finished before step Q can begin.|Step A must be finished before step G can begin.|Step T must be finished before step Z can begin.|Step K must be finished before step R can begin.|Step H must be finished before step O can begin.|Step O must be finished before step Y can begin.|Step O must be finished before step C can begin.|Step K must be finished before step P can begin.|Step P must be finished before step F can begin.|Step E must be finished before step M can begin.|Step M must be finished before step I can begin.|Step T must be finished before step W can begin.|Step P must be finished before step L can begin.|Step A must be finished before step O can begin.|Step X must be finished before step V can begin.|Step S must be finished before step G can begin.|Step A must be finished before step Y can begin.|Step J must be finished before step R can begin.|Step K must be finished before step F can begin.|Step J must be finished before step A can begin.|Step P must be finished before step C can begin.|Step E must be finished before step N can begin.|Step F must be finished before step Y can begin.|Step J must be finished before step D can begin.|Step H must be finished before step Z can begin.|Step U must be finished before step H can begin.|Step J must be finished before step T can begin.|Step V must be finished before step G can begin.|Step Z must be finished before step I can begin.|Step H must be finished before step W can begin.|Step B must be finished before step R can begin.|Step F must be finished before step B can begin.|Step X must be finished before step C can begin.|Step L must be finished before step R can begin.|Step F must be finished before step U can begin.|Step D must be finished before step N can begin.|Step P must be finished before step O can begin.|Step B must be finished before step O can begin.|Step F must be finished before step C can begin.|Step H must be finished before step L can begin.|Step O must be finished before step N can begin.|Step J must be finished before step Y can begin.|Step H must be finished before step N can begin.|Step O must be finished before step L can begin.|Step I must be finished before step W can begin.|Step J must be finished before step H can begin.|Step D must be finished before step Z can begin.|Step F must be finished before step W can begin.|Step X must be finished before step W can begin.|Step Y must be finished before step M can begin.|Step T must be finished before step M can begin.|Step U must be finished before step G can begin.|Step L must be finished before step I can begin.|Step N must be finished before step W can begin.|Step E must be finished before step C can begin.';

function solution(input) {
    input = input.split('|');

    let stepsComplete = new Set([]);
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
                stepsComplete.add(step);
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

console.time('solution');
console.log(solution(input));
console.timeEnd('solution');
