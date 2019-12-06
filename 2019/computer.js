module.exports = {
    readIntcode: function(intcode) {
        for (let index = 0; index < intcode.length; index = index + 1) {
            if (intcode[index] === 1) {
                intcode[intcode[index+3]] = intcode[intcode[index+1]] + intcode[intcode[index+2]];
                index = index + 3;
            } else if (intcode[index] === 2) {
                intcode[intcode[index+3]] = intcode[intcode[index+1]] * intcode[intcode[index+2]];
                index = index + 3;
            } else if (intcode[index] === 99) {
                return intcode;
            }
        }
    },
    readIntcodeWithParam: function (intcode, param = null) {
        for (let index = 0; index < intcode.length; index = index + 1) {
            let instruction;
            let parameters = [];

            if (intcode[index] > 99) {
                console.log('This is operation ' + intcode[index]);
                let operation = ('' + intcode[index]).split('').map(Number).reverse();

                instruction = operation[0];

                if (instruction === 1 || instruction === 2) {
                    if (typeof operation[2] === 'undefined' || operation[2] === 0) {
                        parameters[0] = intcode[intcode[index + 1]];
                    } else {
                        parameters[0] = intcode[index + 1];
                    }

                    if (typeof operation[3] === 'undefined' || operation[3] === 0) {
                        parameters[1] = intcode[intcode[index + 2]];
                    } else {
                        parameters[1] = intcode[index + 2];
                    }

                    parameters[2] = intcode[index + 3];
                } else {
                    if (typeof operation[2] === 'undefined' || operation[2] === 0) {
                        parameters[0] = intcode[index + 1];
                    } else {
                        parameters[0] = index + 1;
                    }
                }
            } else {
                instruction = intcode[index];

                if (instruction === 1 || instruction === 2) {
                    parameters[0] = intcode[intcode[index + 1]];
                    parameters[1] = intcode[intcode[index + 2]];
                    parameters[2] = intcode[index + 3];
                } else {
                    parameters[0] = intcode[index + 1];
                }
            }

            console.log('This is instruction ' + instruction);

            if (instruction === 1) {
                console.log (intcode[index] + ',' + intcode[index + 1] + ',' + intcode[index + 2] + ',' + intcode[index + 3]);
                console.log('I am adding ' + parameters[0] + ' to ' + parameters[1] + ' and saving it to position ' + parameters[2]);
                intcode[parameters[2]] = parameters[0] + parameters[1];
                index = index + 3;
            } else if (instruction === 2) {
                console.log (intcode[index] + ',' + intcode[index + 1] + ',' + intcode[index + 2] + ',' + intcode[index + 3]);
                console.log('I am multiplying ' + parameters[0] + ' to ' + parameters[1] + ' and saving it to position ' + parameters[2]);
                intcode[parameters[2]] = parameters[0] * parameters[1];
                index = index + 3;
            } else if (instruction === 3) {
                console.log (intcode[index] + ',' + intcode[index + 1]);
                console.log('I am saving ' + param + ' to position ' + parameters[0]);
                intcode[parameters[0]] = param;
                index = index + 1;
            } else if (instruction === 4) {
                console.log (intcode[index] + ',' + intcode[index + 1]);
                console.log('>>>>>>>>>>>>>>>>>>');
                console.log(' I am outputting ' + intcode[parameters[0]]);
                console.log('<<<<<<<<<<<<<<<<<<');
                index = index + 1;
            } else if (instruction === 99) {
                return intcode;
            }

            console.log('------------');
        }
    }
}
