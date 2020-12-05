const reader = require('../../reader.js');

function solution(input) {
    let passes = input.split('\r\n');

    let boardingList = [];

    for (let minSeat = 0; minSeat <= 7; minSeat = minSeat + 1) {
        for (let minRow = 0; minRow <= 127; minRow = minRow + 1) {
            boardingList[(minRow * 8) + minSeat] = true;
        }
    }

    for (let count = 0; count < passes.length; count = count + 1) {
        let id = getPassId(passes[count]);

        boardingList[id] = false;
    }

    for (let id = 0; id < boardingList.length; id = id + 1) {
        if (!boardingList[id]) {
            continue;
        }

        if (typeof boardingList[id - 1] !== 'undefined' && !boardingList[id - 1]) {
            if (typeof boardingList[id + 1] !== 'undefined' && !boardingList[id + 1]) {
                return id;
            }
        }
    }
}

function getPassId(pass) {
    let minSeat = 0;
    let maxSeat = 127;
    let minRow = 0;
    let maxRow = 7;

    for (let char = 0; char < pass.length; char = char + 1) {
        if (pass[char] === "F") {
            maxSeat = Math.floor((minSeat + maxSeat) / 2);
        }

        if (pass[char] === "B") {
            minSeat = Math.ceil((minSeat + maxSeat) / 2);
        }

        if (pass[char] === "L") {
            maxRow = Math.floor((minRow + maxRow) / 2);
        }

        if (pass[char] === "R") {
            minRow = Math.ceil((minRow + maxRow) / 2);
        }
    }

    return (minSeat * 8) + minRow;
}

reader.solve(solution);
