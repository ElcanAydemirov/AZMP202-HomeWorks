//Task 1
function power(a, b) {
    console.log(a ** b);
}

console.log(`Result: ${power(2, 3)}`);

//task 2
function move(array, currentIndex, newIndex) {

    if (currentIndex >= 0 && currentIndex < array.length && newIndex >= 0 && newIndex < array.length) {

        let element = array[currentIndex];

        if (currentIndex < newIndex) {
            for (let i = currentIndex; i < newIndex; i++) {
                array[i] = array[i + 1];
            }
        }

        else if (currentIndex > newIndex) {
            for (let i = currentIndex; i > newIndex; i--) {
                array[i] = array[i - 1];
            }
        }

        array[newIndex] = element;
    }
    return array;
}

console.log(move([10, 20, 30, 40, 50], 0, 2));


//Task 3
function deleteRepeate(array) {
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        let exists = false;

        for (let j = 0; j < newArray.length; j++) {
            if (array[i] === newArray[j]) {
                exists = true;
                break;
            }
        }

        if (!exists) {
            newArray[newArray.length] = array[i];
        }
    }

    return newArray;
}


console.log(deleteRepeate([1, 2, 2, 3, 4, 4, 5]));

//Task4
function sentenceCapitalization(sentence) {
    let words = sentence.split(' ');
    for (let i = 0; i < words.length; i++) {
        let capitalizedWord = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        words.splice(i, 1, capitalizedWord);
    }
    return words.join(' ');
}

console.log(sentenceCapitalization("a short sentence")); // "A Short Sentence" 

//Task 5
function concatArray(array1, array2) {
    let result = [];

    for (let i = 0; i < array1.length; i++) {
        result[result.length] = array1[i];
    }

    for (let j = 0; j < array2.length; j++) {
        result[result.length] = array2[j];
    }

    return result;
}


console.log(concatArray([1, 2, 3, 4, 5], [6, 7, 8, 9]));

//Task 6
function countWords(sentence) {
    let wordCount = 0;
    let inWord = false;

    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] !== " " && !inWord) {
            wordCount++;
            inWord = true;
        } else if (sentence[i] === " ") {
            inWord = false;
        }
    }

    return wordCount;
}

console.log(countWords("This is a test sentence."));

//Task 7

//Task 8
function clearDuplicate(array) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        let exists = false;

        for (let j = 0; j < result.length; j++) {
            if (array[i] === result[j]) {
                exists = true;
                break;
            }
        }

        if (!exists) {
            result[result.length] = array[i];
        }
    }

    return result;
}

console.log(clearDuplicate([1, 2, 1, 2, 3]));


//Task 9
function charIndexSum(str, char) {
    let sum = 0;
    let found = false;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            sum += i;
            found = true;
        }
    }

    return found ? sum : -1;
}


console.log(charIndexSum("salam", 'a'));
console.log(charIndexSum("hello", 'x'));

//Task10
const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"];
const firstThreeLetters = [];

for (let i = 0; i < countries.length; i++) {
    let country = countries[i];
    let capitalized = "";

    for (let j = 0; j < 3; j++) {
        capitalized += country[j].toUpperCase();
    }

    firstThreeLetters.push(capitalized);
}

console.log(firstThreeLetters);

//Task 11
function convert(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char === char.toUpperCase()) {
            result += char.toLowerCase();
        } else {
            result += char.toUpperCase();
        }
    }
    return result;
}

console.log(convert('saLamNecesen'));

//Task 12
function isEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4])); 
