const reader = require('../../reader.js');

function solution(input) {
    const operations = input.split('\n').map(Number);

    let offsetNumber = 0;
    let usedNumbers = new Set([offsetNumber]);

    while (true) {
        for(let index = 0; index < operations.length - 1; index = index + 1) {
            offsetNumber += operations[index];

            if (usedNumbers.has(offsetNumber)) {
                return offsetNumber;
            } else {
                usedNumbers.add(offsetNumber);
            }
        }
    }
}

reader.solve(solution);
