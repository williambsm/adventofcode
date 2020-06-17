const reader = require('../../reader.js');

function solution(input) {
    let minLength = -1;
    let maxLength = 1;
    let xIndex = 1;
    let yIndex = 0;
    let direction = 'right';

    let map = ['x'];
    map['x0y0'] = 1;

    while (true) {
        let sum = 0;

        for (let x = -1; x < 2; x = x + 1) {
            for (let y = -1; y < 2; y = y + 1) {
                let key = 'x' + (xIndex + x) + 'y' + (yIndex + y);

                if (typeof map[key] !== 'undefined' && (xIndex !== x || yIndex !== y)) {
                    sum = sum + map[key];
                }
            }
        }

        if (sum > input) {
            return sum;
        }

        map['x' + xIndex + 'y' + yIndex] = sum;

        if (direction === 'right' && (xIndex === maxLength)) {
            direction = 'up';
        } else if (direction === 'up' && (yIndex === minLength)) {
            direction = 'left';
        } else if (direction === 'left' && (xIndex === minLength)) {
            direction = 'down';
        } else if (direction === 'down' && (yIndex === maxLength)) {
            direction = 'right';
            minLength = minLength - 1;
            maxLength = maxLength + 1;
        }

        switch(direction) {
            case 'right':
                xIndex = xIndex + 1;
                break;
            case 'up':
                yIndex = yIndex - 1;
                break;
            case 'left':
                xIndex = xIndex - 1;
                break;
            case 'down':
                yIndex = yIndex + 1;
                break;
        }
    }
}

reader.solve(solution);
