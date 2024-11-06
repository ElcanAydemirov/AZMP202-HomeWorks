let arr = [
    {
      name: "test",
      key: 1,
    },
    {
      name: "task",
      key: 2,
    },
    {
      name: "tanqo",
      key: 3,
    },
    {
      name: "like",
      key: 4,
    },
    {
      name: "task",
      key: 5,
    },
    {
      name: "trust",
      key: 6,
    },
    {
      name: "test",
      key: 7,
    },
    {
      name: "last",
      key: 8,
    },
    {
      name: "tanqo",
      key: 9,
    },
    {
      name: "elephant",
      key: 10,
    },
    {
      name: "love",
      key: 11,
    },
    {
      name: "small",
      key: 12,
    },
    {
      name: "little",
      key: 13,
    },
  ];

// 1) "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin (filter)
const filteredname = arr.filter((item) =>{
    return item.name.startsWith("t");
});
console.log(filteredname);

// 2) "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin (forEach)
let count = 0;
arr.forEach(item => {
    if (item.name.startsWith("t") && item.name.endsWith("t")) {
        count++;
    }
});
console.log(count);

// 3) "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"lerinin cemini tapin
const filterSum = arr.filter((item) =>  item.name.startsWith("t") && item.name.endsWith("t"))
.reduce((sum,item) => {
    return sum += item.key;
},0)
console.log(filterSum);
// 4) "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.
const filterUpdate = arr.filter((item) => item.name.endsWith("e"))
.forEach((item) => item.name = "SuperDev");
console.log(arr);
// 5) "name"-i en uzun olan obyekti tapin
let longestNameObject = arr[0];

arr.forEach(item => {
    if (item.name.length > longestNameObject.name.length) {
        longestNameObject = item;
    }
});

console.log(longestNameObject);

// 6) "name"-i en uzun olan obyektin key'ni tapin

let longestNameKey = ""; 
let maxLength = 0; 

arr.forEach(item => {
    if (item.name.length > maxLength) {
        maxLength = item.name.length; 
        longestNameKey = item.key; 
    }
});

console.log(longestNameKey);

// 7)  "name"-i en uzun olan obyektin indexin kvadratini hesablayin
let longestNameIndex = arr.reduce((maxIndex, item, index) => {
  return item.name.length > arr[maxIndex].name.length ? index : maxIndex;
}, 0);

let resultt = longestNameIndex ** 2;
console.log(resultt);

// 8) "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin. (filter)
const filterNameLength = arr.filter((item) => item.name.length === 4)
console.log(filterNameLength);

// 9)  en boyuk "key"i olan obyektin "name"-i ni tapin
let largestKeyObject = arr[0];

arr.forEach(item => {
    if (item.key > largestKeyObject.key) {
        largestKeyObject = item;
    }
});

const largestKeyName = largestKeyObject.name;

console.log(largestKeyName);

// 10) terkibinde 2 'l' (el) herfi olan obyekt(ler)i tapin.

const objectsWithTwoL = arr.filter(item => {

    return item.name.split('l').length - 1 === 2; 
});

console.log(objectsWithTwoL);

// 11) terkibinde ən az 2 't' herfi olan obyekt(ler)i tapın.
const objectsWithAtLeastTwoT = arr.filter(item => {
    return item.name.split('t').length - 1 >= 2;
});

console.log(objectsWithAtLeastTwoT);

// 12) key'leri 10'dan boyuk ve "name"-i 'l' herfi ile bashlayan obyektleri tapaq
const result = arr.filter(item => item.key > 10 && item.name.startsWith('l'));

console.log(result);