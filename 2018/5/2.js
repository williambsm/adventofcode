const reader = require('../../reader.js');

function solution(input) {
    let winningLetter = null;
    let winningLength = 100000;

    const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    for (const letter of letters) {
        let replaceRegExp = new RegExp(letter + '|' + letter.toUpperCase(), 'g');
        let letterInput = input.replace(replaceRegExp, '');

        let finalCount = null;

        while (finalCount === null) {
            let index = letterInput.search(/aA|Aa|bB|Bb|cC|Cc|dD|Dd|eE|Ee|fF|Ff|gG|Gg|hH|Hh|iI|Ii|jJ|Jj|kK|Kk|lL|Ll|mM|Mm|nN|Nn|oO|Oo|pP|Pp|qQ|Qq|rR|Rr|sS|Ss|tT|Tt|uU|Uu|vV|Vv|wW|Ww|xX|Xx|yY|Yy|zZ|Zz/);

            if (index !== -1) {
                letterInput = letterInput.slice(0, index) + letterInput.slice(index + 2);
            } else {
                finalCount = letterInput.length;
            }
        }

        if (finalCount < winningLength) {
            winningLetter = letter;
            winningLength = finalCount;
        }
    }

    return winningLength;
}

reader.solve(solution);
