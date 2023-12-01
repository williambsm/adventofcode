const r = require('../../reader2.js');

function solution(i, e) {
    return  r.l(e).map((calibration) => {
        const reg = /1|2|3|4|5|6|7|8|9|one|two|three|four|five|six|seven|eight|nine/g;
        const l = { 'one': '1', 'two': '2', 'three': '3', 'four': '4', 'five': '5', 'six': '6', 'seven': '7', 'eight': '8', 'nine': '9', };
        const list = [...calibration.matchAll(reg)].map((arr) => l[arr[0]] ?? arr[0]);
        console.log(list);
        return parseInt(list[0] + list[list.length - 1]);
    }).reduce((a,b) => a + b);
}

r.solve(solution);
