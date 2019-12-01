const reader = require('../../reader.js');

function solution(input) {
    let claims = input.split(/#/g);
    claims.shift();

    let claimed = new Set([]);
    let claimedTwice = new Set([]);

    for (let claim of claims) {
        claim = claim.split(/ @ |,|: |x/).map(Number);

        for (let posLeft = claim[1]; posLeft < claim[1]+claim[3]; posLeft++) {
            for (let posTop = claim[2]; posTop < claim[2]+claim[4]; posTop++) {
                let position = posLeft + 'x' + posTop;

                if (claimed.has(position)) {
                    claimedTwice.add(position);
                } else {
                    claimed.add(position);
                }
            }
        }
    }

    return claimedTwice.size;
}

reader.solve(solution);
