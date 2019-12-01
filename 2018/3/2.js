const reader = require('../../reader.js');

function solution(input) {
    let claims = input.split(/#/g);
    claims.shift();
    claims = claims.map(function(claim) {
        return claim.split(/ @ |,|: |x/).map(Number);
    });

    let claimed = new Set([]);
    let claimedTwice = new Set([]);

    for (let claim of claims) {
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

    for (let claim of claims) {
        let isNotUnique = false;

        for (let posLeft = claim[1]; posLeft < claim[1]+claim[3]; posLeft++) {
            for (let posTop = claim[2]; posTop < claim[2]+claim[4]; posTop++) {
                let position = posLeft + 'x' + posTop;

                if (claimedTwice.has(position)) {
                    isNotUnique = true;
                    break;
                }
            }

            if (isNotUnique) {
                break;
            }
        }

        if (!isNotUnique) {
            return claim[0];
        }
    }
}

reader.solve(solution);
