const reader = require('../../reader.js');
const computer = require('../computer.js');

function solution(input) {
    //const program = input.split(',').map(Number);
    //const program = "3,26,1001,26,-4,26,3,27,1002,27,2,27,1,27,26,27,4,27,1001,28,-1,28,1005,28,6,99,0,0,5".split(',').map(Number);
    const program = "3,52,1001,52,-5,52,3,53,1,52,56,54,1007,54,5,55,1005,55,26,1001,54,-5,54,1105,1,12,1,53,54,53,1008,54,0,55,1001,55,1,55,2,53,55,53,4,53,1001,56,-1,56,1005,56,6,99,0,0,0,0,10".split(',').map(Number);


    let ampProgram1 = {intcode: program.slice(0), halted: false, output: null, pointer: 0};
    let ampProgram2 = {intcode: program.slice(0), halted: false, output: null, pointer: 0};
    let ampProgram3 = {intcode: program.slice(0), halted: false, output: null, pointer: 0};
    let ampProgram4 = {intcode: program.slice(0), halted: false, output: null, pointer: 0};
    let ampProgram5 = {intcode: program.slice(0), halted: false, output: 0, pointer: 0};

    while (!ampProgram5.halted) {
        ampProgram1 = computer.readIntcode(ampProgram1.intcode, 9, ampProgram5.output, ampProgram1.pointer);
        ampProgram2 = computer.readIntcode(ampProgram2.intcode, 7, ampProgram1.output, ampProgram2.pointer);
        ampProgram3 = computer.readIntcode(ampProgram3.intcode, 8, ampProgram2.output, ampProgram3.pointer);
        ampProgram4 = computer.readIntcode(ampProgram4.intcode, 5, ampProgram3.output, ampProgram4.pointer);
        ampProgram5 = computer.readIntcode(ampProgram5.intcode, 6, ampProgram4.output, ampProgram5.pointer);

        console.log(ampProgram5.output);
    }

    return ampProgram5.output;
}

reader.solve(solution);
