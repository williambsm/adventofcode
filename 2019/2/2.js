const reader = require('../../reader.js');
const computer = require('../computer.js');

function solution(input) {
    let addresses = input.split(',').map(Number);
    let noun = 0;
    let verb = 0;

    while (true) {
        let solution = 0;

        let testAddresses = addresses.slice();

        testAddresses[1] = noun;
        testAddresses[2] = verb;

        solution = computer.readIntcode(testAddresses);

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
