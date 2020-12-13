const reader = require('../../reader.js');

function solution(input) {
    let instructions = reader.buildLine(input);
    let test = null;

    for (let index = 0; index < instructions.length; index = index + 1) {
        let test = runInstructions(instructions, index);

        if (test !== false) {
            return test;
        }
    }

    return test;
}

function runInstructions(instructions, fixIndex) {
    let accumulator = 0;
    let index = 0;
    let run = new Set();

    while (true) {
        if (run.has(index)) {
            return false;
        }

        run.add(index);

        if (index === instructions.length) {
            return accumulator;
        }

        let rule = instructions[index].split(' ')[0];
        let value = parseInt(instructions[index].split(' ')[1]);

        if (rule === 'acc') {
            accumulator = accumulator + value;
        }

        if (fixIndex === index && rule === 'nop' || fixIndex !== index && rule === 'jmp') {
            index = index + value;
            continue;
        }

        index = index + 1;
    }
}

reader.solve(solution);
