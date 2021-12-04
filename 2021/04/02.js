const reader = require('../../reader.js');

function solution(input) {
    const arr = input.split('\r\n');
    const bingoPool = arr.shift().split(',').map(Number);
    const bingoDrawn = [];
    let bingoIndex = 0;
    let winningIndexes = [];

    arr.shift();

    const boards = buildBoards(arr);
    const boardCombinations = buildCombinations(boards);

    while (winningIndexes.length !== boards.length) {
        bingoDrawn.push(bingoPool[bingoIndex]);
        winningIndexes = checkCombinations(boards, boardCombinations, bingoDrawn, winningIndexes);
        bingoIndex++;
    }

    return calculateSolution(boards[winningIndexes[winningIndexes.length - 1]], bingoDrawn);
}

function buildBoards(arr) {
    const boards = [];

    for (let i = 0; i < arr.length; i = i + 6) {
        const board = [];

        for (let c = 0; c < 5; c = c + 1) {
            board.push(arr[i+c].trim().split(/\s+/).map(Number));
        }

        boards.push(board);
    }

    return boards;
}

function buildCombinations(boards) {
    const boardCombinations = [];

    boards.forEach((board) => {
        const combinations = [];

        board.forEach((row) => {
            combinations.push(row);
        });

        for (let i = 0; i < combinations[0].length; i = i + 1) {
            const combination = [];

            board.forEach((row) => {
                combination.push(row[i]);
            });

            combinations.push(combination);
        }

        boardCombinations.push(combinations);
    });

    return boardCombinations;
}

function checkCombinations(boards, boardCombinations, bingoDrawn, winningIndexes) {
    for (let i = 0; i < boardCombinations.length; i = i + 1) {
        boardCombinations[i].forEach((combination) => {
            if (combination.every(number => bingoDrawn.includes(number)) && !winningIndexes.includes(i)) {
                winningIndexes.push(i);
            }
        });
    }

    return winningIndexes;
}

function calculateSolution(board, bingoDrawn) {
    let undrawnSum = 0;

    board.forEach((row) => {
        row.forEach((number) => {
            if (!bingoDrawn.includes(number)) {
                undrawnSum += number;
            }
        });
    });

    return undrawnSum * bingoDrawn[bingoDrawn.length - 1];
}

reader.solve(solution);
