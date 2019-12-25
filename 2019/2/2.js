const reader = require('../../reader.js');
const computerClass = require('../computer.js');

function solution(input) {
    let addresses = input.split(',').map(Number);
    let noun = 0;
    let verb = 0;

    while (true) {
        // Refresh intcode.
        let intcode = addresses.slice();
        // Initiate computer;
        let computer = new computerClass(intcode);

        // Update intcode.
        computer.intcode[1] = noun;
        computer.intcode[2] = verb;

        // Run computer.
        computer.run();

        // Compare result.
        if (computer.intcode[0] === 19690720) {
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
