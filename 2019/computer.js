module.exports = {
    readIntcode: function (intcode, param = null) {
        for (let index = 0; index < intcode.length; index = index + 1) {
            let instruction;
            let parameters = [];

            if (intcode[index] > 99) {
                let operation = ('' + intcode[index]).split('').map(Number).reverse();

                instruction = operation[0];

                if (instruction === 1 ||
                    instruction === 2 ||
                    instruction === 5 ||
                    instruction === 6 ||
                    instruction === 7 ||
                    instruction === 8) {
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

                if (instruction === 1 ||
                    instruction === 2 ||
                    instruction === 5 ||
                    instruction === 6 ||
                    instruction === 7 ||
                    instruction === 8) {
                    parameters[0] = intcode[intcode[index + 1]];
                    parameters[1] = intcode[intcode[index + 2]];
                    parameters[2] = intcode[index + 3];
                } else {
                    parameters[0] = intcode[index + 1];
                }
            }

            // Go through the instruction code.
            switch(instruction) {
                case 1: // adds together numbers read from two positions and stores the result in a third position.
                    intcode[parameters[2]] = parameters[0] + parameters[1];
                    index = index + 3;
                    break;
                case 2: // multiplies together numbers read from two positions and stores the result in a third position.
                    intcode[parameters[2]] = parameters[0] * parameters[1];
                    index = index + 3;
                    break;
                case 3: // takes a single integer as input and saves it to the position given by its only parameter.
                    intcode[parameters[0]] = param;
                    index = index + 1;
                    break;
                case 4: // outputs the value of its only parameter.
                    console.log('Output: ' + intcode[parameters[0]]);
                    index = index + 1;
                    break;
                case 5: // if the first parameter is non-zero, it sets the instruction pointer to the value from the second parameter. Otherwise, it does nothing.
                    index = (parameters[0] !== 0) ? parameters[1] - 1 : index + 2;
                    break;
                case 6: // if the first parameter is zero, it sets the instruction pointer to the value from the second parameter. Otherwise, it does nothing.
                    index = (parameters[0] === 0) ? parameters[1] - 1 : index + 2;
                    break;
                case 7: // if the first parameter is less than the second parameter, it stores 1 in the position given by the third parameter. Otherwise, it stores 0.
                    intcode[parameters[2]] = (parameters[0] < parameters[1]) ? 1 : 0;
                    index = index + 3
                    break;
                case 8: // if the first parameter is equal to the second parameter, it stores 1 in the position given by the third parameter. Otherwise, it stores 0.
                    intcode[parameters[2]] = (parameters[0] === parameters[1]) ? 1 : 0;
                    index = index + 3;
                    break;
                case 99: // the program is finished and should immediately halt.
                default:
                    return intcode;
            }
        }
    }
}
