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
                return intcode[0];
            }
        }
    }
}
