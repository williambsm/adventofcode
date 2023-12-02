const fs = require('fs');

module.exports = {
    solve: function(solution) {
        const input = fs.readFileSync('input.txt', 'utf-8');
        const example = fs.readFileSync('example.txt', 'utf-8');

        console.time('Time elapsed');
        console.log(solution(input, example));
        console.timeEnd('Time elapsed');
    },

    l: function(input) {
        return input.split('\r\n');
    },

    nl: function (input) {
        return input.split('\r\n\r\n');
    },

    sn: function (input) {
        return parseInt(input.replace(/\D/g,''));
    },

    sum: function(array) {
        return array.reduce((a,b) => a+b, 0);
    }
}
