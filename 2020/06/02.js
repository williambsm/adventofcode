const reader = require('../../reader.js');

function solution(input) {
    let groups = reader.buildNewline(input);
    let total = 0;
    
    for (let x = 0; x < groups.length; x = x + 1) {
        let answers = {};

        let group = groups[x].split('\r\n');

        for (let person = 0; person < group.length; person = person + 1) {
            for (let letter = 0; letter < group[person].length; letter = letter + 1) {
                let lowercase = group[person][letter];

                if (/[a-z]/.test(lowercase)) {
                    if (typeof answers[lowercase] === 'undefined') {
                        answers[lowercase] = 1;
                    } else {
                        answers[lowercase]++;
                    }
                }
            }
        }

        for (const char of Array.from(Object.keys(answers))) {
            const count = answers[char];

            if (count === group.length) {
                total = total + 1;
            }
        }
    }

    return total;
}

reader.solve(solution);
