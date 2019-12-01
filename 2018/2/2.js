const reader = require('../../reader.js');

function solution(input) {
    let boxes = input.split('\n');
    let length = boxes[0].length;

    for(let firstBoxIndex = 0; firstBoxIndex < boxes.length; firstBoxIndex++) {
        for (let secondBoxIndex = firstBoxIndex + 1; secondBoxIndex < boxes.length; secondBoxIndex++) {
            let difference = null;
            let differences = 0;
            let firstBox = boxes[firstBoxIndex];
            let secondBox = boxes[secondBoxIndex];

            for (let letterIndex = 0; letterIndex < length; letterIndex++) {
                if (firstBox[letterIndex] !== secondBox[letterIndex]) {
                    difference = letterIndex;
                    differences++;

                    if (differences > 1) {
                        break;
                    }
                }
            }

            if (differences === 1) {
                return firstBox.slice(0, difference) + firstBox.slice(difference + 1);
            }
        }
    }
}

reader.solve(solution);
