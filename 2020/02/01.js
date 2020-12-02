const reader = require('../../reader.js');

function solution(input) {
    let array = input.split('\r\n');
    let valid = 0;

    for (let x = 0; x < array.length; x = x + 1) {
        let passwordInfo = array[x].split(' ');
        let criterias = passwordInfo[0].split('-').map(Number);

        let expression = new RegExp(passwordInfo[1][0], "g");
        let match = passwordInfo[2].match(expression) || [];

        if (match.length >= criterias[0] && match.length <= criterias[1]) {
            valid++;
        }
    }

    return valid;
}

reader.solve(solution);
