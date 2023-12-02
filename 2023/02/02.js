const r = require('../../reader2.js');

function solution(i, e) {
    return r.l(i).map((game) => {
        const red = Math.max(...[...game.matchAll(/[0-9]+ r/g)].map((o) => parseInt(o)));
        const green = Math.max(...[...game.matchAll(/[0-9]+ g/g)].map((o) => parseInt(o)));
        const blue = Math.max(...[...game.matchAll(/[0-9]+ b/g)].map((o) => parseInt(o)));

        return red * green * blue;
    }).reduce((a,b) => a + b);
}

r.solve(solution);
