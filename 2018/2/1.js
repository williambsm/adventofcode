const reader = require('../../reader.js');

function solution(input) {
    let boxes = input.split('\n');
    let twos = 0;
    let threes = 0;

    for(let x= 0; x<boxes.length; x++) {
        let letters = [];
        let word = boxes[x];

        for (let position = 0; position < word.length; position++) {
            let letter = word[position];
            if (typeof letters[letter] === 'undefined') {
                letters[letter] = 1
            } else {
                letters[letter]++;
            }
        }

        letters = new Set(Object.values(letters));

        if (letters.has(2)) {
            twos++;
        }

        if (letters.has(3)) {
            threes++;
        }
    }

    return twos * threes;
}

reader.solve(solution);
