const reader = require('../../reader.js');

function solution(input) {
    const width = 25;
    const height = 6;
    const sizeOfLayers = width * height;

    let layers = [];
    let amountOfZeros = 100000000;
    let lowestZerosIndex = null;
    let lowestZerosCount = 100000000;
    let amountOfOnes = 0;
    let amountOfTwos = 0;

    let layerIndex = -1;

    for (let index = 0; index < input.length; index = index +1) {
        if (index % sizeOfLayers === 0) {
            if (amountOfZeros < lowestZerosCount) {
                lowestZerosIndex = layerIndex;
                lowestZerosCount = amountOfZeros;
            }

            layerIndex++;
            layers[layerIndex] = [];
            amountOfZeros = 0;
        }

        if (input[index] === "0") {
            amountOfZeros = amountOfZeros + 1;
        }

        layers[layerIndex].push(input[index]);
    }

    for (let index = 0; index < layers[lowestZerosIndex].length; index = index + 1) {
        if (layers[lowestZerosIndex][index] === "1") {
            amountOfOnes = amountOfOnes + 1;
        }

        if (layers[lowestZerosIndex][index] === "2") {
            amountOfTwos = amountOfTwos + 1;
        }
    }

    return amountOfOnes * amountOfTwos;
}

reader.solve(solution);
