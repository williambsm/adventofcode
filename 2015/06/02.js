const reader = require('../../reader.js');

function solution(input) {
    let instructions = input.split('\r\n');
    let lights = {};
    let total = 0;

    for (let index = 0; index < instructions.length; index = index + 1) {
        let instruction = instructions[index].match(/turn on|toggle|turn off/)[0];
        let coords = instructions[index].match(/(\d+),(\d+)/g);
        let coords1 = coords[0].split(',').map(Number);
        let coords2 = coords[1].split(',').map(Number);

        for (let x = coords1[0]; x <= coords2[0]; x = x + 1) {
            for (let y = coords1[1]; y <= coords2[1]; y = y + 1) {
                let coord = x + '-' + y;

                if (typeof lights[coord] === 'undefined') {
                    lights[coord] = 0;
                }

                if (instruction === 'toggle') {
                    lights[coord] = lights[coord] + 2;
                } else if (instruction === 'turn on') {
                    lights[coord] = lights[coord] + 1;
                } else {
                    lights[coord] = lights[coord] > 0 ? lights[coord] - 1 : 0;
                }
            }
        }
    }

    for (const [key, value] of Object.entries(lights)) {
        total = total + value;
    }

    return total;
}

reader.solve(solution);
