const reader = require('../../reader.js');

function solution(input) {
    const a = input.split('\r\n');
    let ogrArray = a;
    let csrArray = a;
    let ogr = null;
    let csr = null;
    let ogrIndex = 0;
    let csrIndex =  0;

    while (ogr === null) {
        ogrArray = findOxygenRating(ogrArray, ogrIndex);
        ogrIndex++;

        if (ogrArray.length === 2) {
            ogrArray.forEach((number) => {
               if (number[ogrIndex] === '1') {
                   ogr = parseInt(number, 2);
               }
            });
        }
    }

    while (csr === null) {
        csrArray = findCo2Rating(csrArray, csrIndex);
        csrIndex++;

        console.log(csrArray);

        if (csrArray.length === 2) {
            csrArray.forEach((number) => {
                if (number[csrIndex] === '0') {
                    csr = parseInt(number, 2);
                }
            });
        } else if (csrArray.length === 1) {
            csr = parseInt(csrArray[0], 2);
        }

        console.log(csrIndex);
    }

    return ogr * csr;
}

function findOxygenRating(array, pos) {
    const zeroArray = [];
    const oneArray = [];

    array.forEach((number) => {
        if (number[pos] === '0') {
            zeroArray.push(number);
        } else {
            oneArray.push(number);
        }
    });

    if (zeroArray.length > oneArray.length) {
        return zeroArray;
    } else {
        return oneArray;
    }
}

function findCo2Rating(array, pos) {
    const zeroArray = [];
    const oneArray = [];

    array.forEach((number) => {
        if (number[pos] === '0') {
            zeroArray.push(number);
        } else {
            oneArray.push(number);
        }
    });

    if (zeroArray.length > oneArray.length) {
        return oneArray;
    } else {
        return zeroArray;
    }
}

reader.solve(solution);
