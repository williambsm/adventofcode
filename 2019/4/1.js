const reader = require('../../reader.js');

function solution(input) {
    input = input.split('-').map(Number);

    let min = input[0];
    let max = input[1];
    let matches = 0;

    for (let x = min; x <= max; x = x + 1) {
        let number = ('' + x).split('').map(Number);
        let match = false;
        let ascending = true;

        for(let y = 1; y < number.length; y = y + 1) {
            if (number[y] < number[y -1]) {
                ascending = false;
                break;
            }

            if (number[y] === number[y-1]) {
                match = true;
            }
        }

        if (ascending && match) {
            matches++;
        }
    }

    return matches;
}

reader.solve(solution);
