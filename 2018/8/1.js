const reader = require('../../reader.js');

function solution(input) {
    const numbers = input.split(' ').map(Number);
    let childs = [];
    let metadatas = [];
    let total = 0;

    for (let index = 0; index < numbers.length; index = index + 1) {
        if (!childs.length || childs[childs.length - 1]) {
            childs.push(numbers[index]);
            index++;
            metadatas.push(numbers[index]);
        } else {
            total = total + numbers[index];
            metadatas[metadatas.length - 1] = metadatas[metadatas.length - 1] - 1;

            if (!metadatas[metadatas.length - 1]) {
                if (!childs[childs.length - 1]) {
                    childs.pop();
                }

                metadatas.pop();

                if (childs.length) {
                    childs[childs.length - 1] = childs[childs.length - 1] - 1;
                }
            }
        }
    }

    return total;
}

reader.solve(solution);
