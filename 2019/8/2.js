const reader = require('../../reader.js');

function solution(input) {
    const width = 25;
    const height = 6;
    const sizeOfLayers = width * height;

    let layers = [];

    let layerIndex = -1;

    for (let index = 0; index < input.length; index = index +1) {
        if (index % sizeOfLayers === 0) {
            layerIndex++;
            layers[layerIndex] = [];
        }

        layers[layerIndex].push(input[index]);
    }

    let writer = "";

    for (let index = 0; index < sizeOfLayers; index = index + 1) {
        for (let layerIndex = 0; layerIndex < layers.length; layerIndex = layerIndex + 1) {
            let color = layers[layerIndex][index];

            if (color === "0") {
                writer = writer + " ";
                break;
            }

            if (color === "1") {
                writer = writer + color;
                break;
            }
        }

        if (writer.length % width === 0) {
            console.log(writer);
            writer = "";
        }
    }
}

reader.solve(solution);
