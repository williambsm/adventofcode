const reader = require('../../reader.js');
const computerClass = require('../computer.js');

function solution(input) {
    const intcode = input.split(',').map(Number);
    let computer;
    let highestOutput = 0;


    for (let param1 = 0; param1 < 5; param1 = param1 + 1) {
        for (let param2 = 0; param2 < 5; param2 = param2 + 1) {
            for (let param3 = 0; param3 < 5; param3 = param3 + 1) {
                for(let param4 = 0; param4 < 5; param4 = param4 + 1) {
                    for (let param5 = 0; param5 < 5; param5 = param5 + 1) {
                        const parameters = new Set([param1, param2, param3, param4, param5]);
                        let value = 0;

                        if (parameters.size < 5) {
                            continue;
                        }

                        for (let parameter of parameters) {
                            // Init new computer.
                            computer = new computerClass(intcode.slice(0));
                            // Set setting and input.
                            computer.setting = parameter;
                            computer.input = value;

                            // Run computer.
                            computer.run();

                            value = computer.output;
                        }

                        if (value > highestOutput) {
                            highestOutput = value;
                        }
                    }
                }
            }
        }
    }

    return highestOutput;
}

reader.solve(solution);
