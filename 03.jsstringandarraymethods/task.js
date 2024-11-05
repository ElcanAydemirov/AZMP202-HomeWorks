//# Verilən bir cümlənin bütün hərflərini böyük hərflərə çevirən bir funksiya yazın.convertToUpper("Hello World");

function convertToUpper(word) {
    return word.toUpperCase();
}

console.log(convertToUpper("elcan"));

//# Daxil edilən cümlədə ən uzun sozu return edən funksiya yazın

function longest(sentence) {
    let arr = sentence.split(" ");
    let longest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longest.length) {
            longest = arr[i];
        }
    }
    return longest;
}

console.log(longest("Salam dostum necesiz dostlarrr"));


//  Verilən bir cümlədəki sözləri tərs sıraya düzmək üçün funksiya yazın.
function reverseWordOrder(sentence){
    return sentence.split(" ").reverse().join(" ");
}

console.log(reverseWordOrder("javascript öyrənmək maraqlidir"));

// findLongestWord("javascript oyrenirik çox maraqlıdır");
function findLongestWord(sentence) {
    const words = sentence.split(' ');

    let longestWord = '';

    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}

const resultt = findLongestWord("javascript oyrenirik çox maraqlidirr");
console.log(resultt);


// Cümlədəki bir hərfi başqası ilə əvəzləyən və lowerCase edilmiş şəkildə qaytaran bir funksiya yazın.
// replaceCharacter("Salam", "a", "o");
// Nəticə: "solom"

function replaceCharacter(sentence,letter1,letter2) {
    return sentence.replaceAll(letter1,letter2);
}

console.log(replaceCharacter("salam","a","o"));


// ARRAY METHODS
// 1) const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// #add 'Meat' in the beginning of your shopping cart if it has not been already added
// #add Sugar at the end of you shopping cart if it has not been already added
// #remove 'Honey' if you are allergic to honey
// #modify Tea to 'Green Tea'

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

if (!shoppingCart.includes('Meat')) {
  shoppingCart.unshift('Meat');
}

if (!shoppingCart.includes('Sugar')) {
  shoppingCart.push('Sugar');
}

const isAllergicToHoney = true; 
if (isAllergicToHoney) {
  const honeyIndex = shoppingCart.indexOf('Honey');
  if (honeyIndex !== -1) {
    shoppingCart.splice(honeyIndex, 1);
  }
}

const teaIndex = shoppingCart.indexOf('Tea');
if (teaIndex !== -1) {
  shoppingCart[teaIndex] = 'Green Tea';
}

console.log(shoppingCart);

// 2) const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
//   ]
  
//   #Reverse countries array using reverse() method
  
//   #remove "Canada" and "Denmark", and add "Azerbaijan 
//   (splice)

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]

const canadaIndex = countries.indexOf('Canada');
if (canadaIndex !== -1) {
  countries.splice(canadaIndex, 1); 
}

const denmarkIndex = countries.indexOf('Denmark');
if (denmarkIndex !== -1) {
  countries.splice(denmarkIndex, 1); 
}

countries.push('Azerbaijan');

console.log(countries);



// 3) #Concatenate the following two variables and store it in a fullStack variable.

// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node','Express', 'MongoDB']

// console.log(fullStack)


const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];

const fullStack = frontEnd.concat(backEnd);

console.log(fullStack);

// 4) const itCompanies = [Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon]

// #Slice out the first 3 companies from the array
// #Slice out the last 3 companies from the array
// #Slice out the middle IT company or companies from the array
// #Sort companies array using sort() method
// #Change each company name to uppercase one by one and print them out
// #Check if a "Google" company exists in the itCompanies array. If it exist return the company else return a company is not found
// #Filter out companies which have more than one 'o' without the filter method

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// #Slice out the first 3 companies from the array
const firstThree = itCompanies.slice(0, 3);
console.log('İlk 3 sirket:', firstThree);

// #Slice out the last 3 companies from the array
const lastThree = itCompanies.slice(-3);
console.log('Son 3 sirket:', lastThree);

// #Slice out the middle IT company or companies from the array
const middleIndex = Math.floor(itCompanies.length / 2);
const middleCompanies = itCompanies.length % 2 === 0 
    ? itCompanies.slice(middleIndex - 1, middleIndex + 1) // çift sayıda şirket varsa iki orta
    : itCompanies.slice(middleIndex, middleIndex + 1); // tek sayıda şirket varsa bir orta
console.log('Orta sirket ve sirketler :', middleCompanies);

// #Sort companies array using sort() method
const sortedCompanies = [...itCompanies].sort(); // orijinal diziyi değiştirmemek için kopyasını alıyoruz
console.log('Siralanmis Companyler :', sortedCompanies);

// #Change each company name to uppercase one by one and print them out
itCompanies.forEach(company => {
    console.log(company.toUpperCase());
});

// #Check if a "Google" company exists in the itCompanies array. If it exist return the company else return a company is not found
const googleExists = itCompanies.includes('Google');
console.log(googleExists ? 'Google var' : 'Google yox');

// 7. #Filter out companies which have more than one 'o' without the filter method
const companiesWithMultipleOs = [];
for (let company of itCompanies) {
    let count = 0;
    for (let char of company) {
        if (char === 'o') {
            count++;
        }
    }
    if (count > 1) {
        companiesWithMultipleOs.push(company);
    }
}
console.log('Birden cox o herfi olanlar:', companiesWithMultipleOs);

// 5) 

// Bir function yazın, parametr olaraq 2 array qebul edir və bir char qebul edir.gonderilmish char-a esasen hemin iki array-i
// ve elementlerini birleshdirib bir string olaraq return etmelidir. Meselen -> [1,2] [3,4] '*' gonderilerse output 
// -> 1*2*3*4 string-i olmalidir.

function combineArrays(arr1, arr2, char) {

    const combinedArray = arr1.concat(arr2);

    return combinedArray.join(char);
}

const result = combineArrays([1, 2], [3, 4], '*');
console.log(result); 