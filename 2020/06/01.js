const reader = require('../../reader.js');

function solution(input) {
    let groups = reader.buildNewline(input);
    let total = 0;

    for (let x = 0; x < groups.length; x = x + 1) {
        let answers = new Set();

        for (let letter = 0; letter < groups[x].length; letter = letter + 1) {
            let lowercase = groups[x][letter];

            if (/[a-z]/.test(lowercase)) {
                answers.add(lowercase);
            }
        }

        total = total + answers.size;
    }

    return total;
}

reader.solve(solution);
