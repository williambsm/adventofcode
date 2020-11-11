const reader = require('../../reader.js');

function solution(input) {
    let gifts = input.split('\r\n');
    let total = 0;

    for (let x = 0; x < gifts.length; x = x + 1) {
        let gift = gifts[x].split('x').map(Number);
        let smallest = gift.sort((a,b) => a - b).slice(0, 2);

        let ribbon = smallest[0] + smallest[0] + smallest[1] + smallest[1];
        let bow = gift[0] * gift[1] * gift[2];

        total = total + ribbon + bow;
    }

    return total;
}

reader.solve(solution);
