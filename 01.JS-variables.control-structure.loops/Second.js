// Task 1 

let number = +window.prompt("ededi daxil edin : ");
let arr = [1, 2, 3, 4, 323, 62, 24, 52, 15];
let istrue = false;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === number) {
        istrue = true;
        break;
    }
}

if (istrue === true) {
    console.log("var");
} else {
    console.log("yoxdu");
}

// Task 2

const students = [
    { name: "Ali", scores: [90, 85, 92] },
    { name: "Mammal", scores: [75, 80, 85] },
    { name: "Camil", scores: [90, 95, 85] },
    { name: "Davud", scores: [100, 100, 100] }
  ];
  
  let highestAverageStudent = null;
  const studentsAbove90 = [];
  
  for (let i = 0; i < students.length; i++) {
    let sum = 0;
    for (let j = 0; j < students[i].scores.length; j++) {
      sum += students[i].scores[j];
    }
    const average = sum / students[i].scores.length;
  
    if (!highestAverageStudent) {
      highestAverageStudent = students[i];
    } else {
      let highestSum = 0;
      for (let k = 0; k < highestAverageStudent.scores.length; k++) {
        highestSum += highestAverageStudent.scores[k];
      }
      const highestAverage = highestSum / highestAverageStudent.scores.length;
      if (average > highestAverage) {
        highestAverageStudent = students[i];
      }
    }
  
    if (average > 90) {
      studentsAbove90.push(students[i]);
    }
  }
  
  console.log("Ortalamasi en yuxari olan telebe", highestAverageStudent);
  console.log("Ortalamasi 90dan yuxari olan telebeler", studentsAbove90);

  // Task 3

const str = "racecar";
let isPalindrome = true;
const len = str.length;

for (let i = 0; i < len / 2; i++) {
  if (str[i] !== str[len - 1 - i]) {
    isPalindrome = false;
    break;
  }
}

console.log(isPalindrome ? "Polidromdur" : "Polidrom deyil");