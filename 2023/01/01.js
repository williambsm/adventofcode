const r = require('../../reader2.js');

function solution(i, e) {
    return  r.l(i).map((calibration) => {
        const numbers = [...calibration].filter((value) => !isNaN(value));
        return parseInt(numbers[0] + numbers[numbers.length - 1]);
    }).reduce((a,b) => a + b);
}

r.solve(solution);
