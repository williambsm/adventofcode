module.exports = class Computer {
    constructor(intcode) {
        // The computer intcode.
        this.intcode = intcode;
        // The computer pointer.
        this.pointer = 0;
        // The computer setting.
        this.setting = null;
        // The computer input.
        this.input   = null;
        // The computer output.
        this.output  = null;
        // If the computer setting is set.
        this.set = false;
        // If the computer is halted.
        this.halted = false;
        // if the computer is done.
        this.done = false;
        // If the computer is in debug mode.
        this.debug = false;
    }

    run() {
        // Remove halt.
        this.halted = false;

        // Keep running until the computer is halted or paused.
        while (!this.halted && !this.done) {
            // Get instructions.
            let instructions = this.read();
            // Read instructions.
            this.operate(instructions);

            if (this.debug === true) {
                console.log('Pointer: ' + this.pointer);
                console.log('Instruction: ' + instructions.instruction);
                console.log('---------------');
            }
        }

        // Return output.
        return this.output;
    }

    read() {
        let instruction;
        let parameters = [];

        if (this.intcode[this.pointer] > 99) {
            let operation = ('' + this.intcode[this.pointer]).split('').map(Number).reverse();

            instruction = operation[0];

            if (instruction === 1 ||
                instruction === 2 ||
                instruction === 5 ||
                instruction === 6 ||
                instruction === 7 ||
                instruction === 8) {
                if (typeof operation[2] === 'undefined' || operation[2] === 0) {
                    parameters[0] = this.intcode[this.intcode[this.pointer + 1]];
                } else {
                    parameters[0] = this.intcode[this.pointer + 1];
                }

                if (typeof operation[3] === 'undefined' || operation[3] === 0) {
                    parameters[1] = this.intcode[this.intcode[this.pointer + 2]];
                } else {
                    parameters[1] = this.intcode[this.pointer + 2];
                }

                parameters[2] = this.intcode[this.pointer + 3];
            } else {
                if (typeof operation[2] === 'undefined' || operation[2] === 0) {
                    parameters[0] = this.intcode[this.pointer + 1];
                } else {
                    parameters[0] = this.pointer + 1;
                }
            }
        } else {
            instruction = this.intcode[this.pointer];

            if (instruction === 1 ||
                instruction === 2 ||
                instruction === 5 ||
                instruction === 6 ||
                instruction === 7 ||
                instruction === 8) {
                parameters[0] = this.intcode[this.intcode[this.pointer + 1]];
                parameters[1] = this.intcode[this.intcode[this.pointer + 2]];
                parameters[2] = this.intcode[this.pointer + 3];
            } else {
                parameters[0] = this.intcode[this.pointer + 1];
            }
        }

        return {instruction: instruction, parameters: parameters};
    }

    operate(instructions) {
        // adds together numbers read from two positions and stores the result in a third position.
        if (instructions.instruction === 1) {
            this.intcode[instructions.parameters[2]] = instructions.parameters[0] + instructions.parameters[1];
            this.pointer = this.pointer + 4;
        }

        // multiplies together numbers read from two positions and stores the result in a third position.
        else if (instructions.instruction === 2) {
            this.intcode[instructions.parameters[2]] = instructions.parameters[0] * instructions.parameters[1];
            this.pointer = this.pointer + 4;
        }

        // takes a single integer as input and saves it to the position given by its only parameter.
        else if (instructions.instruction === 3 ) {
            // Check if there is a setting or if the computer is already set.
            if (!this.set && this.setting !== null) {
                // Set the computer.
                this.intcode[instructions.parameters[0]] = this.setting;
                this.set = true;
            } else {
                // Save the input to location.
                this.intcode[instructions.parameters[0]] = this.input;
            }

            this.pointer = this.pointer + 2;
        }

        // outputs the value of its only parameter.
        else if (instructions.instruction === 4) {
            this.output = this.intcode[instructions.parameters[0]];
            this.halted = true;

            this.pointer = this.pointer + 2;
        }

        // if the first parameter is non-zero, it sets the instruction pointer to the value from the second parameter. Otherwise, it does nothing.
        else if (instructions.instruction === 5) {
            this.pointer = (instructions.parameters[0] !== 0) ? instructions.parameters[1] : this.pointer + 3;
        }

        // if the first parameter is zero, it sets the instruction pointer to the value from the second parameter. Otherwise, it does nothing.
        else if (instructions.instruction === 6) {
            this.pointer = (instructions.parameters[0] === 0) ? instructions.parameters[1] : this.pointer + 3;
        }

        // if the first parameter is less than the second parameter, it stores 1 in the position given by the third parameter. Otherwise, it stores 0.
        else if (instructions.instruction === 7) {
            this.intcode[instructions.parameters[2]] = (instructions.parameters[0] < instructions.parameters[1]) ? 1 : 0;
            this.pointer = this.pointer + 4;
        }

        // if the first parameter is equal to the second parameter, it stores 1 in the position given by the third parameter. Otherwise, it stores 0.
        else if (instructions.instruction === 8) {
            this.intcode[instructions.parameters[2]] = (instructions.parameters[0] === instructions.parameters[1]) ? 1 : 0;
            this.pointer = this.pointer + 4;
        }

        // the program is finished and should immediately halt.
        else if (instructions.instruction === 99) {
            this.done = true;
        }
    }
};