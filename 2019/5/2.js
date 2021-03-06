const reader = require('../../reader.js');
const computerClass = require('../computer.js');

function solution(input) {
    // Get intcode.
    const intcode = input.split(',').map(Number);
    // Initiate computer.
    let computer = new computerClass(intcode);

    // Set input.
    computer.input = 5;

    // Run computer;
    computer.run();

    // Return result.
    return computer.output;
}

reader.solve(solution);
