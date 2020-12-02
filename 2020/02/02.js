const reader = require('../../reader.js');

function solution(input) {
    let array = input.split('\r\n');
    let valid = 0;

    for (let x = 0; x < array.length; x = x + 1) {
        let passwordInfo = array[x].split(' ');

        let letter = passwordInfo[1][0];
        let criterias = passwordInfo[0].split('-').map(Number);
        let password = passwordInfo[2]

        if ((password[criterias[0]-1] === letter) + (password[criterias[1]-1] === letter) === 1) {
            valid++;
        }
    }

    return valid;
}

reader.solve(solution);
