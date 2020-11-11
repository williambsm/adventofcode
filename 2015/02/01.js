const reader = require('../../reader.js');

function solution(input) {
    let gifts = input.split('\r\n');
    let total = 0;

    for (let x = 0; x < gifts.length; x = x + 1) {
        let gift = gifts[x].split('x').map(Number);

        let length = 2 * gift[0] * gift[1];
        let width = 2 * gift[1] * gift[2];
        let height = 2 * gift[2] * gift[0];
        let smallest = gift.sort((a,b) => a - b).slice(0, 2);
        let extra = smallest[0] * smallest[1];

        total = total + length + width + height + extra;
    }

    return total;
}

reader.solve(solution);
