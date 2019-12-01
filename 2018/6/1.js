const reader = require('../../reader.js');

function solution(input) {
    input = input.split('\n');
    let coordinates = input.map(x => x.split(', ').map(Number));
    console.log(coordinates);
    let largestArea = 0;
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

    for (let x = minX; x < maxX; x = x + 1) {
        for (let y = minY; y < maxY; y = y + 1) {
            let closestCoordinate = null;
            let closestDistance = 100000;
            let closestTied = false;

            for (let count = 0; count < coordinates.length; count = count + 1) {
                let distance = Math.abs(coordinates[count][0] - x) + Math.abs(coordinates[count][1] - y);

                if (distance === closestDistance) {
                    closestTied = true;
                } else if (distance < closestDistance) {
                    closestDistance = distance;
                    closestCoordinate = count
                    closestTied = false;
                }
            }

            if (!closestTied) {
                sizes[closestCoordinate]++;
            }
        }
    }

    return Math.max(...sizes);

    return largestArea;
}

reader.solve(solution);
