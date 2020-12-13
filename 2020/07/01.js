const reader = require('../../reader.js');

let bags = [];

function solution(input) {
    let array = reader.buildLine(input);
    let validBags = 0;

    for (const rule of array) {
        let split = rule.split(' bags contain ');
        bags[split[0]] = [];

        if (split[1].match(/no other bags/)) {
            continue;
        }

        let contents = split[1].slice(0, -1).split(', ');

        for (let bag of contents) {
            bag = bag.replace(' bags', '');
            bag = bag.replace(' bag', '');
            bag = bag.substring(2);
            bags[split[0]].push(bag);
        }
    }

    for (const bag in bags) {
        if (bag.match(/shiny gold/)) {
            continue;
        }

        if (checkBag(bag)) {
            console.log(bag + ' can contain a shiny bag!');
            validBags++;
        }
    }

    return validBags;
}

function checkBag(bag) {
    if (bag.match(/shiny gold/)) {
        return true;
    }

    let valid = false;

    if (bags[bag].length) {
        for (const contentBag of bags[bag]) {
            if (checkBag(contentBag)) {
                valid = true;
            }
        }
    }

    return valid;
}

reader.solve(solution);
