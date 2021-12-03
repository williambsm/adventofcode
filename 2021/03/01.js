const reader = require('../../reader.js');

function solution(input) {
    const a = input.split('\r\n');
    let k = null;
    let gr = '';
    let er = '';
    let numbers = [];

    a.forEach((report) => {
        for(let i = 0; i < report.length; i = i + 1) {
            if (typeof numbers[i] === 'undefined') {
                numbers[i] = [];
            }

            numbers[i].push(report[i]);
        }
    });

    numbers.forEach((line) => {
        let total = 0;

        line.forEach((digit) => {
            total += parseInt(digit);
        })

        console.log(total);
        console.log(line.length);

        if (total > (line.length / 2)) {
            gr = gr + '1';
            er = er + '0';
        } else {
            gr = gr + '0';
            er = er + '1';
        }
    });

    gr = parseInt(gr, 2);
    er = parseInt(er, 2);

    return gr * er;
}

reader.solve(solution);
