const reader = require('../../reader.js');

function solution(input) {
    input = input.split('\n');
    let coordinates = input.map(x => x.split(', ').map(Number));
    let gridX = new Set([]);
    let gridY = new Set([]);
    let size = 0;

    for (let count = 0; count < coordinates.length; count = count + 1) {
        gridX.add(coordinates[count][0]);
        gridY.add(coordinates[count][1]);
    }

    let minX = Math.min(...gridX);
    let maxX = Math.max(...gridX);
    let minY = Math.min(...gridY);
    let maxY = Math.max(...gridY);

    for (let x = minX; x <= maxX; x = x + 1) {
        for (let y = minY; y <= maxY; y = y + 1) {
            let maxDistance = 10000;

            for (let index = 0; index < coordinates.length; index = index + 1) {
                let distanceBetween = Math.abs(coordinates[index][0] - x) + Math.abs(coordinates[index][1] - y);

                maxDistance = maxDistance - distanceBetween;

                if (maxDistance < 0) {
                    break;
                }
            }

            if (maxDistance > 0) {
                size++;
            }
        }
    }

    return size;
}

reader.solve(solution);
