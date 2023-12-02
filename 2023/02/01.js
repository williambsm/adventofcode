const r = require('../../reader2.js');

function solution(i, e) {
    return r.l(i).map((game) => {
        const red = Math.max(...[...game.matchAll(/[0-9]+ r/g)].map((o) => parseInt(o))) <= 12;
        const green = Math.max(...[...game.matchAll(/[0-9]+ g/g)].map((o) => parseInt(o))) <= 13;
        const blue = Math.max(...[...game.matchAll(/[0-9]+ b/g)].map((o) => parseInt(o))) <= 14;

        return red && green && blue ? r.sn(game.split(':')[0]) : 0;
    }).reduce((a,b) => a + b);
}

r.solve(solution);
