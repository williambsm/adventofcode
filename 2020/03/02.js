const reader = require('../../reader.js');

function solution(input) {
    let map = input.split('\r\n');

    function st(slope, row) {
        let trees = 0;
        let x = 0;
        let y = 0;

        for (let i = 1; i <= map.length - 1; i = i + row) {
            x = (x + slope) % map[y].length;
            y = (y + row) % map.length;

            if (map[y][x] === "#") {
                trees++;
            }
        }

        return trees;
    }

    return st(1,1) * st(3, 1) * st(5, 1) * st(7,1) * st(1,2);
}

reader.solve(solution);
