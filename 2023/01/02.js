const r = require('../../reader2.js');

function solution(i, e) {
    return  r.l(i).map((calibration) => {
        const rcalibration = [...calibration].reverse().join('');

        const reg = /1|2|3|4|5|6|7|8|9|one|two|three|four|five|six|seven|eight|nine/g;
        const rreg = /1|2|3|4|5|6|7|8|9|eno|owt|eerht|ruof|evif|xis|neves|thgie|enin/g;

        const vals = { 'one': '1', 'two': '2', 'three': '3', 'four': '4', 'five': '5', 'six': '6', 'seven': '7', 'eight': '8', 'nine': '9', };
        const rvals = { 'eno': '1', 'owt': '2', 'eerht': '3', 'ruof': '4', 'evif': '5', 'xis': '6', 'neves': '7', 'thgie': '8', 'enin': '9', };

        const list = [...calibration.matchAll(reg)].map((arr) => vals[arr[0]] ?? arr[0]);
        const rlist = [...rcalibration.matchAll(rreg)].map((arr) => rvals[arr[0]] ?? arr[0]);

        return parseInt(list[0] + rlist[0]);
    }).reduce((a,b) => a + b);
}

r.solve(solution);
