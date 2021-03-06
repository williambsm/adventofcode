const reader = require('../../reader.js');

function solution(input) {
    input = input.split('\n');
    let coordinates = input.map(x => x.split(', ').map(Number));
    let sizes = [];
    let gridX = new Set([]);
    let gridY = new Set([]);

    for (let count = 0; count < coordinates.length; count = count + 1) {
        sizes[count] = 0;

        gridX.add(coordinates[count][0]);
        gridY.add(coordinates[count][1]);
    }

    let minX = Math.min(...gridX);
    let maxX = Math.max(...gridX);
    let minY = Math.min(...gridY);
    let maxY = Math.max(...gridY);

    for (let x = minX; x <= maxX; x = x + 1) {
        for (let y = minY; y <= maxY; y = y + 1) {
            let closestCoordinate = null;
            let closestDistance = maxY;
            let tied = false;

            for (let index = 0; index < coordinates.length; index = index + 1) {
                let distanceBetween = Math.abs(coordinates[index][0] - x) + Math.abs(coordinates[index][1] - y);

                if (distanceBetween === closestDistance) {
                    tied = true;
                } else if (distanceBetween < closestDistance) {
                    closestCoordinate = index;
                    closestDistance = distanceBetween;
                    tied = false;
                }
            }

            if (!tied && sizes[closestCoordinate] !== null) {
                if (minX === x || maxX === x || minY === y || maxY === y) {
                    sizes[closestCoordinate] = null;
                } else {
                    sizes[closestCoordinate]++;
                }
            }
        }
    }

    return Math.max(...sizes);
}

reader.solve(solution);
