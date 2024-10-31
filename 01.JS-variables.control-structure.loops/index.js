// Task 1

let number1 = 456;

if (number1 < 100 || number1 > 999) {
    console.log("Zəhmət olmasa, 3 rəqəmli bir ədəd daxil edin.");
} else {

    let digits = [];
    let temp = number1;

    for (let i = 0; i < 3; i++) {
        digits[i] = temp % 10;
        temp = (temp - digits[i]) / 10;
    }

    let sum = 0;
    let product = 1;

    for (let i = 0; i < digits.length; i++) {
        sum += digits[i];
        product *= digits[i];
    }

    let average = sum / digits.length;

    console.log("Verilmiş ədəd: " + number1);
    console.log("Rəqəmlərin cəmi: " + sum);
    console.log("Rəqəmlərin hasil: " + product);
    console.log("Rəqəmlərin ədədi ortası: " + average);
}

// Task 2

let number2 = 36;

console.log("Verilmiş ədədin bölənləri:");

for (let i = 1; i <= number2; i++) {
    if (number2 % i === 0) {
        console.log(i);
    }
}

// Task 3

let number = 36;
let Count = 0;


for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
        Count++;
    }
}

console.log(`Verilmiş ədədin bölənlərinin sayı: ${Count}`);

// Task 4 

for (let i = 0; i <= 10; i++) {
    console.log(i + " x " + i + " = " + (i * i));
}

// Task 5

console.log("i    i^2   i^3");

for (let i = 0; i <= 10; i++) {
    console.log(i + "    " + (i * i) + "     " + (i * i * i));
}

// Task 6

let oddSum = 0;
let evenSum = 0;

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        evenSum += i;
    } else {
        oddSum += i;
    }
}

console.log("0-dan 100-e qeder cut ededlerin cemi: " + evenSum);
console.log("0-dan 100-e qeder tek ededlerin cemi: " + oddSum);

// Task 7

let numbers = [4, 2, 7, 9, 3, 12, 46, 32, 19];

let max = numbers[0];
let min = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
    if (numbers[i] < min) {
        min = numbers[i];
    }
}

console.log("Minimum: " + min);
console.log("Maximum: " + max);

// Task 8

let numbersArray = [4, 2, 7, 9, 3, 12, 46, 32, 19];

let maximumValue = numbersArray[0];
let minimumValue = numbersArray[0];

for (let index = 1; index < numbersArray.length; index++) {
    if (numbersArray[index] > maximumValue) {
        maximumValue = numbersArray[index];
    }
    if (numbersArray[index] < minimumValue) {
        minimumValue = numbersArray[index];
    }
}

let averageValue = (maximumValue + minimumValue) / 2;

console.log("Ededi ortasi: " + averageValue);

// Task 9

let sampleNews = `As software developers, the natural tendency is to start developing applications based on your own hands-on experience and knowledge right away. However, over time issues in the application arise, adaptations to changes, and new features happen.`;

let spaceCount = 0;

for (let i = 0; i < sampleNews.length; i++) {
    if (sampleNews[i] === ' ') {
        spaceCount++;
    }
}

console.log("Boşluqlarin sayi: " + spaceCount);


//Extrasssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss


// Task 1

for (let num = 2; num <= 100; num++) {
    let isPrime = true;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(num);
    }
}

// Task 2

const fruits = ["alma", "banan", "qarpiz", "portagal", "ananas", "nar"];

let longestWord = "";

for (let i = 0; i < fruits.length; i++) {
    if (fruits[i].length > longestWord.length) {
        longestWord = fruits[i];
    }
}

console.log("En uzun soz: " + longestWord);

// Task 3

const products = [
    {
        id: 1,
        title: "Smartphone",
        description: "A high-end smartphone with the latest features.",
        price: 799.99,
    },
    {
        id: 2,
        title: "Laptop",
        description: "Powerful laptop with a large screen and fast processor.",
        price: 1299.99,
    },
    {
        id: 3,
        title: "Coffee Maker",
        description: "An automatic coffee maker with a built-in grinder.",
        price: 99.99,
    },
    {
        id: 4,
        title: "Headphones",
        description: "Wireless over-ear headphones with noise-cancellation.",
        price: 199.99,
    },
    {
        id: 5,
        title: "Smart TV",
        description: "55-inch 4K Smart TV with streaming apps built-in.",
        price: 699.99,
    },
];

let totalPrice = 0;

for (let i = 0; i < products.length; i++) {
    totalPrice += products[i].price;
}

let averagePrice = totalPrice / products.length;

console.log("Qiymetlerin cemi: " + totalPrice);
console.log("Qiymetlerin ortalamasi: " + averagePrice);