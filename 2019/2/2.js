const reader = require('../../reader.js');

function solution(input) {
    let addresses = input.split(',').map(Number);
    let noun = 0;
    let verb = 0;

    while (true) {
        let solution = 0;

        let testAddresses = addresses.slice();

        testAddresses[1] = noun;
        testAddresses[2] = verb;

        for (let index = 0; index < testAddresses.length; index = index + 1) {
            if (testAddresses[index] === 1) {
                testAddresses[testAddresses[index+3]] = testAddresses[testAddresses[index+1]] + testAddresses[testAddresses[index+2]];
                index = index + 3;
            } else if (testAddresses[index] === 2) {
                testAddresses[testAddresses[index+3]] = testAddresses[testAddresses[index+1]] * testAddresses[testAddresses[index+2]];
                index = index + 3;
            } else if (testAddresses[index] === 99) {
                solution = testAddresses[0];
                break;
            }
        }

        if (solution === 19690720) {
            return 100 * noun + verb;
        } else {
            if (verb === 99) {
                noun = noun + 1;
                verb = 0;
            } else {
                verb = verb + 1;
            }
        }
    }
}

reader.solve(solution);
