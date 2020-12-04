const reader = require('../../reader.js');

function solution(input) {
    let passports = input.split('\r\n\r\n');
    let valid = 0;

    for (let id = 0; id < passports.length; id = id + 1) {
        let fields = passports[id].split('\r\n');
        let passport = [];

        let byr = false;
        let iyr = false;
        let eyr = false;
        let hgt = false;
        let hcl = false;
        let ecl = false;
        let pid = false;
        let cid = false;

        for (let row = 0; row < fields.length; row = row + 1) {
            let data = fields[row].split(' ');
            passport = passport.concat(data);
        }

        for(let index = 0; index < passport.length; index = index + 1) {
            let data = passport[index].split(':');

            if (data[0] === 'byr') {
                byr = true;
            }

            if (data[0] === 'iyr') {
                iyr = true;
            }

            if (data[0] === 'eyr') {
                eyr = true;
            }

            if (data[0] === 'hgt') {
                hgt = true;
            }

            if (data[0] === 'hcl') {
                hcl = true;
            }

            if (data[0] === 'ecl') {
                ecl = true;
            }

            if (data[0] === 'pid') {
                pid = true;
            }

            if (data[0] === 'cid') {
                cid = true;
            }

        }

        let result = byr + iyr + eyr + hgt + hcl + ecl + pid + cid;

        if (result === 8 || result === 7 && cid === false) {
            valid++;
        }
    }

    return valid;
}

reader.solve(solution);
