const reader = require('../../reader.js');

function solution(input) {
    input = input.split('-').map(Number);

    let min = input[0];
    let max = input[1];
    let matches = 0;

    for (let x = min; x <= max; x = x + 1) {
        let number = ('' + x).split('').map(Number);
        let match = [];
        let ascending = true;

        for(let y = 1; y < number.length; y = y + 1) {
            if (number[y] < number[y -1]) {
                ascending = false;
                break;
            }

            if (number[y] === number[y-1]) {
                if (typeof match[number[y]] === 'undefined') {
                    match[number[y]] = 1;
                } else {
                    match[number[y]]++;
                }
            }
        }

        if (ascending && match) {
            for (let index = 0; index < match.length; index = index + 1) {
                if (match[index] === 1) {
                    matches++;
                    break;
                }
            }
        }
    }

    return matches;
}

reader.solve(solution);
