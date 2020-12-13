const reader = require('../../reader.js');

function solution(input) {
    let instructions = reader.buildLine(input);
    let accumulator = 0;
    let index = 0;
    let run = new Set();

    while (true) {
        if (run.has(index)) {
            return accumulator;
        }

        run.add(index);

        let rule = instructions[index].split(' ')[0];
        let value = parseInt(instructions[index].split(' ')[1]);

        if (rule === 'acc') {
            accumulator = accumulator + value;
        }

        if (rule === 'jmp') {
            index = index + value;
            continue;
        }

        index = index + 1;
    }
}

reader.solve(solution);
