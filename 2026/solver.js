const fs = require('fs');

module.exports = {
    solve: function(solution) {
        const input = fs.readFileSync('input.txt', 'utf-8');
        const example = fs.readFileSync('example.txt', 'utf-8');

        console.log('-----');
        console.log('Solving puzzle...');
        console.time(`Time Elapsed`);
        console.log('Solved! Solution:', solution(input, example));
        console.timeEnd(`Time Elapsed`);
        console.log('-----');
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
