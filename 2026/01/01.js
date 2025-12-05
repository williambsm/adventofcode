const r = require('../solver.js');

function solution(input, example) {
    const lockInstructions = input.split('\r\n');
    let lockPosition = 50;
    let lockStepsAtZero = 0;

    lockInstructions.forEach(lockInstruction => {
       const turnDirection = lockInstruction[0] === 'L' ? -1 : 1;
       const turnDistance = Number(lockInstruction.slice(1));

       lockPosition = (10000 + lockPosition + (turnDistance * turnDirection)) % 100;

       if (lockPosition === 0) {
           lockStepsAtZero++;
       }
    });

    return lockStepsAtZero;
}

r.solve(solution);
