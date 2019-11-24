const input = '262, 196|110, 109|58, 188|226, 339|304, 83|136, 356|257, 50|315, 148|47, 315|73, 130|136, 91|341, 169|334, 346|285, 248|76, 233|334, 64|106, 326|48, 207|64, 65|189, 183|300, 247|352, 279|338, 287|77, 277|220, 152|77, 295|49, 81|236, 294|321, 192|43, 234|180, 69|130, 122|166, 225|301, 290|49, 176|62, 156|346, 55|150, 138|214, 245|272, 241|50, 283|104, 70|215, 184|339, 318|175, 123|250, 100|134, 227|96, 197|312, 174|133, 237';
// const input = '1, 1|1, 6|8, 3|3, 4|5, 5|8, 9'

function solution(input) {
    input = input.split('|');
    let coordinates = input.map(x => x.split(', ').map(Number));
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

console.time('solution');
console.log(solution(input));
console.timeEnd('solution');
