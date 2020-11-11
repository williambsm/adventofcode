const reader = require('../../reader.js');

function solution(input) {
    let words = input.split('\r\n');
    let nice = 0;

    for (let x = 0; x < words.length; x = x + 1) {
        let string = words[x];

        if (string.includes('ab') || string.includes('cd') || string.includes('pq') || string.includes('xy')) {
            continue;
        }

        if (!/(.)\1/.test(string)) {
            continue;
        }

        let vowelCount = string.match(/([aeiou])+/g);

        if (vowelCount && vowelCount.length < 3) {
            continue;
        }

        nice = nice + 1;
    }

    return nice;
}

reader.solve(solution);
