const reader = require('../../reader.js');

function solution(input) {
    let words = input.split('\r\n');
    let nice = 0;

    for (let x = 0; x < words.length; x = x + 1) {
        let string = words[x];

        let test1 = string.match(/[^ab]|[^cd]|[^pq]|[^xy]/);
        let test2 = string.match(/[aeiou].*[aeiou].*[aeiou]/);
        let test3 = string.match(/(.)\1/);

        if (test1 && test2 && test3) {
            nice = nice + 1;
        }
    }

    return nice;
}

reader.solve(solution);
