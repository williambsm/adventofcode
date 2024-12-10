const fs = require('fs');

module.exports = {
    solve: function(solution) {
        const input = fs.readFileSync('input.txt', 'utf-8');
        const example = fs.readFileSync('example.txt', 'utf-8');

        console.log('===HISTORIAN FINDER MACHINE IS ACTIVATED===');
        console.log('======CALCULATING SOLUTION BEEP BOOP=======');
        console.time('TIME ELAPSED');
        console.log('THE SOLUTION IS:', solution(input, example));
        console.timeEnd('TIME ELAPSED');
        console.log('===SOLUTION CALCULATED===');
    },

    sortAscending: function(numbers) {
        return numbers.concat().sort((a, b) => a - b);
    },

    sortDescending: function(numbers) {
        return numbers.concat().sort((b, a) => a - b);
    },

    compareArrays: function(a, b) {
        return a.toString() === b.toString();
    }
}
