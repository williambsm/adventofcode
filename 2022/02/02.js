const r = require('../../reader2.js');

function solution(i, e) {
    return r.sum(r.l(i).map((game) => {
        const move = game.split(' ')[0] === 'A' ? 1 : game.split(' ')[0] === 'B' ? 2 : 3;
        const result = game.split(' ')[1] === 'X' ? 0 : game.split(' ')[1] === 'Y' ? 3 : 6;
        return result + predictResponse(move, result);
    }));
}

function predictResponse(move, result) {
    if (move === 1) {
        switch(result) {
            case 0: return 3;
            case 3: return 1;
            case 6: return 2;
        }
    } else if (move === 2) {
        switch(result) {
            case 0: return 1;
            case 3: return 2;
            case 6: return 3;
        }
    } else {
        switch(result) {
            case 0: return 2;
            case 3: return 3;
            case 6: return 1;
        }
    }
}

r.solve(solution);
