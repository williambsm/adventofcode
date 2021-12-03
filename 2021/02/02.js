const reader = require('../../reader.js');

function solution(input) {
    const directions = input.split('\r\n');
    let x = 0;
    let y = 0;
    let aim = 0;

    directions.forEach((direction) => {
        direction = direction.split(' ');
        direction[1] = parseInt(direction[1]);

        if (direction[0] === 'forward') {
            x += direction[1];
            y = y + (aim * direction[1]);
        } else if (direction[0] === 'down') {
            aim += direction[1];
        } else {
            aim -= direction[1];
        }
    });

    return x * y;
}

reader.solve(solution);
