const reader = require('../../reader.js');

function solution(input) {
    let instructions = input.split('\r\n');
    let lights = new Set();

    for (let index = 0; index < instructions.length; index = index + 1) {
        let instruction = instructions[index].match(/turn on|toggle|turn off/)[0];
        let coords = instructions[index].match(/(\d+),(\d+)/g);
        let coords1 = coords[0].split(',').map(Number);
        let coords2 = coords[1].split(',').map(Number);

        for (let x = coords1[0]; x <= coords2[0]; x = x + 1) {
            for (let y = coords1[1]; y <= coords2[1]; y = y + 1) {
                let coord = x + '-' + y;

                if (instruction === 'toggle' && lights.has(coord)) {
                    lights.delete(coord);
                } else if (instruction === 'toggle' || instruction === 'turn on') {
                    lights.add(coord);
                } else {
                    lights.delete(coord);
                }
            }
        }
    }

    return lights.size;
}

reader.solve(solution);
