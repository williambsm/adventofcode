const reader = require('../../reader.js');

function solution(input) {
    let passPhrases = input.split('\r\n');
    let sum = 0;

    for (const passPhrase of passPhrases) {
        let words = passPhrase.split(' ').map(word => word.split('').sort().join());

        if ((new Set(words)).size === words.length) {
            sum = sum + 1;
        }
    }

    return sum;
}

reader.solve(solution);