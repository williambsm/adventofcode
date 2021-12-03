const reader = require('../../reader.js');

function solution(input) {
    const a = input.split('\r\n');
    let gr = '';
    let er = '';

    for (let i = 0; i < a[0].length; i = i + 1) {
        let common = findCommon(a, i);
        gr = gr + common[0];
        er = er + common[1];
    }

    return parseInt(gr, 2) * parseInt(er, 2);
}

function findCommon(array, pos) {
    let count = 0;

    array.forEach((number) => {
        count += parseInt(number[pos]);
    });

    return count > array.length / 2 ? ['1', '0'] : ['0', '1'];
}

reader.solve(solution);
