// returns the most occuring value(s) in an array

const mode = (array) => {
    let valuesOfArrayElements = {};
    
    // sorting the array into an object of {value: frequency}
    for (let i = 0; i < array.length; i++) {
        let currentValue = array[i].toString();

        if (valuesOfArrayElements.hasOwnProperty(currentValue)) {
            valuesOfArrayElements[currentValue] += 1;
        }
        else {
            valuesOfArrayElements[currentValue] = 1;
        }
    }


    // calculating the maximum frequecy that appears in the created object
    let maxFrequecy = 0;
    for (let value in valuesOfArrayElements) {
        if (valuesOfArrayElements[value] > maxFrequecy) {
            maxFrequecy = valuesOfArrayElements[value];
        }
    }


    // computing and returning the mode(s)
    let returnValue = [[], null]; // [[mode(s)], modalFrequency]
    for (let modalValue in valuesOfArrayElements) {

        if (valuesOfArrayElements[modalValue] == maxFrequecy) {
            returnValue[0].push(modalValue);
            returnValue[1] = maxFrequecy;
        }
    }

    return returnValue;
};

let sampleArray = [4, 6, 7, 8, 2, 4, 7, 5, 6, 7, 5, 4, 4, 4, 8, 7, 7];

console.log(`Mode(s): ${mode(sampleArray)[0]}\nFrequency: ${mode(sampleArray)[1]}`);
