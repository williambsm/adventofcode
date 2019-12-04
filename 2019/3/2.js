const reader = require('../../reader.js');

function solution(input) {
    let wires = input.split('\n');
    let firstWirePath = new Set([]);
    let firstWireIndexes = [];
    let shortestSteps = 1000000;

    for (let wire = 0; wire < wires.length; wire = wire + 1) {
        wires[wire] = wires[wire].split(',');

        let currentX = 0;
        let currentY = 0;
        let step = 0;

        for (let index = 0; index < wires[wire].length; index = index + 1) {
            let direction = wires[wire][index].slice(0, 1);
            let distance = wires[wire][index].slice(1);

            for (let unit = 1; unit <= distance; unit = unit + 1) {
                step = step + 1;

                if (direction === 'U') {
                    currentY++;
                } else if (direction === 'D') {
                    currentY--;
                } else if (direction === 'L') {
                    currentX--;
                } else {
                    currentX++;
                }

                let coordinate = currentX + ',' + currentY;

                if (wire === 0) {
                    firstWirePath.add(coordinate);

                    if (typeof firstWireIndexes[coordinate] === 'undefined') {
                        firstWireIndexes[coordinate] = step;
                    }
                }

                if (wire === 1 && firstWirePath.has(coordinate)) {
                    let steps = firstWireIndexes[coordinate] + step;

                    if (steps < shortestSteps) {
                        shortestSteps = steps;
                    }
                }
            }
        }
    }

    return shortestSteps;
}

reader.solve(solution);
