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

            if (data[0] === 'byr' && (data[1] >= 1920 && data[1] <= 2002)) {
                byr = true;
            }

            if (data[0] === 'iyr' && (data[1] >= 2010 && data[1] <= 2020)) {
                iyr = true;
            }

            if (data[0] === 'eyr' && (data[1] >= 2020 && data[1] <= 2030)) {
                eyr = true;
            }

            if (data[0] === 'hgt') {
                if (data[1].includes('cm')) {
                    data[1] = data[1].replace('cm', '');

                    if (data[1] >= 150 && data[1] <= 193) {
                        hgt = true;
                    }
                } else if (data[1].includes('in')) {
                    data[1] = data[1].replace('in', '');

                    if (data[1] >= 59 && data[1] <= 76) {
                        hgt = true;
                    }
                }
            }

            if (data[0] === 'hcl' && /^#[0-9A-F]{6}$/i.test(data[1])) {
                hcl = true;
            }

            if (data[0] === 'ecl' && ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(data[1])) {
                ecl = true;
            }

            if (data[0] === 'pid' && data[1].length === 9 && /^\d+$/.test(data[1])) {
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
