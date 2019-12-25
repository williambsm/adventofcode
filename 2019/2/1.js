const reader = require('../../reader.js');
const computerClass = require('../computer.js');

function solution(input) {
    // Get intcode.
    let intcode = input.split(',').map(Number);
    // Initiate computer.
    let computer = new computerClass(intcode);

    // Update intcode.
    computer.intcode[1] = 12;
    computer.intcode[2] = 2;

    // Run computer.
    computer.run();

    // Return result.
    return computer.intcode[0];
}

reader.solve(solution);
