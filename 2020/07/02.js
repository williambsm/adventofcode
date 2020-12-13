const reader = require('../../reader.js');

let bags = [];
let count = 0;

function solution(input) {
    let array = reader.buildLine(input);

    for (const rule of array) {
        let split = rule.split(' bags contain ');
        bags[split[0]] = [];

        if (split[1].match(/no other bags/)) {
            continue;
        }

        let contents = split[1].slice(0, -1).split(', ');

        for (let bag of contents) {
            let amount = parseInt(bag.replace(/^\D+/g, ''));
            bag = bag.replace(' bags', '');
            bag = bag.replace(' bag', '');
            bag = bag.substring(2);

            for (let count = 0; count < amount; count = count + 1 ) {
                bags[split[0]].push(bag);
            }
        }
    }

    for (const bag in bags) {
        if (bag.match(/shiny gold/)) {
            countBags(bag);
        }
    }

    return count;
}

function countBags(bag) {
    if (bags[bag].length) {
        for (const contentBag of bags[bag]) {
            countBags(contentBag);

            count++;
        }
    }
}

reader.solve(solution);
