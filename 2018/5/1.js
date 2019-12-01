const reader = require('../../reader.js');

function solution(input) {
    while (true) {
        let index = input.search(/aA|Aa|bB|Bb|cC|Cc|dD|Dd|eE|Ee|fF|Ff|gG|Gg|hH|Hh|iI|Ii|jJ|Jj|kK|Kk|lL|Ll|mM|Mm|nN|Nn|oO|Oo|pP|Pp|qQ|Qq|rR|Rr|sS|Ss|tT|Tt|uU|Uu|vV|Vv|wW|Ww|xX|Xx|yY|Yy|zZ|Zz/);

        if (index !== -1) {
            input = input.slice(0, index) + input.slice(index + 2);
        } else {
            return input.length;
        }
    }
}

reader.solve(solution);
