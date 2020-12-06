const fs = require('fs');

module.exports = {
    solve: function(solution) {
        const input = fs.readFileSync('input.txt', 'utf-8');

        console.time('Time elapsed');
        console.log(solution(input));
        console.timeEnd('Time elapsed');
    },

    buildLine: function(input) {
        return input.split('\r\n');
    },

    buildNewline: function (input) {
        return input.split('\r\n\r\n');
    }
}
