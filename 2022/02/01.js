const r = require('../../reader2.js');

function solution(i, e) {
    return r.sum(r.l(i).map((game) => {
        const move = game.split(' ')[0] === 'A' ? 1 : game.split(' ')[0] === 'B' ? 2 : 3;
        const response = game.split(' ')[1] === 'X' ? 1 : game.split(' ')[1] === 'Y' ? 2 : 3;
        return response + readResult(move, response);
    }));
}

function readResult(move, response) {
    if (move === response) {
        return 3;
    } else if (move === 1) {
        return response === 2 ? 6 : 0;
    } else if (move === 2) {
        return response === 3 ? 6 : 0;
    } else if (move === 3) {
        return response === 1 ? 6 : 0;
    } else {
        return 0;
    }
}

r.solve(solution);
