const reader = require('../../reader.js');
const computerClass = require('../computer.js');

function solution(input) {
    // Get the intcode.
    const intcode = input.split(',').map(Number);
    // Init power and computers.
    let ampComputer1, ampComputer2, ampComputer3, ampComputer4, ampComputer5;
    let power = 0;

    for (let param1 = 5; param1 < 10; param1 = param1 + 1) {
        for (let param2 = 5; param2 < 10; param2 = param2 + 1) {
            for (let param3 = 5; param3 < 10; param3 = param3 + 1) {
                for(let param4 = 5; param4 < 10; param4 = param4 + 1) {
                    for (let param5 = 5; param5 < 10; param5 = param5 + 1) {
                        const parameters = new Set([param1, param2, param3, param4, param5]);

                        if (parameters.size < 5) {
                            continue;
                        }

                        // Start up all the reactors.
                        ampComputer1 = new computerClass(intcode.slice(0));
                        ampComputer2 = new computerClass(intcode.slice(0));
                        ampComputer3 = new computerClass(intcode.slice(0));
                        ampComputer4 = new computerClass(intcode.slice(0));
                        ampComputer5 = new computerClass(intcode.slice(0));

                        // Set phase settings.
                        ampComputer1.setting = param1;
                        ampComputer2.setting = param2;
                        ampComputer3.setting = param3;
                        ampComputer4.setting = param4;
                        ampComputer5.setting = param5;

                        // Set output to 0 for ampComputer5.
                        ampComputer5.output = 0;

                        // Run the computers.
                        while (!ampComputer5.done) {
                            ampComputer1.input = ampComputer5.output;
                            ampComputer1.run();

                            ampComputer2.input = ampComputer1.output;
                            ampComputer2.run();

                            ampComputer3.input = ampComputer2.output;
                            ampComputer3.run();

                            ampComputer4.input = ampComputer3.output;
                            ampComputer4.run();

                            ampComputer5.input = ampComputer4.output;
                            ampComputer5.run();
                        }

                        if (ampComputer5.output > power) {
                            power = ampComputer5.output;
                        }
                    }
                }
            }
        }
    }

    return power;
}

reader.solve(solution);
