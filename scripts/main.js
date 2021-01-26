console.log("Arrays-Loops");
// ******* ARRAYS METHODS **********

const array1 = ['cow', 'dog', 'cat'];
const string1 = array1.join();
const string1ToArray = string1.split(',');
// console.log(string1);
// console.log(string1ToArray);

// .push() & .pop()
// array1.pop();
// console.log(array1);
// array1.push('cat');
// console.log(array1);

// .unshift() & .shift()
array1.unshift('cow');
console.log(array1);
array1.shift();
console.log(array1);

//  ****** ARRAY LENGTH *********
const students = ['Mike', 'June', 'Chase', 'Greg'];
// console.log(students.length);

// ******* ACCESSING ITEMS IN ARRAY  ********
// console.log(students[1]); // Jackie
// console.log(students[students.length - 1]); // Nathan

// *********** ASSIGNMENT ***********
// students[0] = 'Matthew';
// console.log(students);


// *********** ARRAYS AND FUNCTIONS *******
// valuePrinter accepts an array and a number
const valueP = (array, index) => {
  return array[index];
}

console.log(valueP(students, 2));
console.log(valuePrinter([1, 2, 3, 4, 5], 2));

// Write a function that takes an array of something and tells you if the name 'Greg' is in that array

const nameA = (array) => {
  if (students[3] === 'Greg') {
    alert("It's Greg");
  } else {
    alert("Greg is not found");
    return array.includes('Greg');
  }
};
// console.log(nameA(students));

// findStudent accepts an array and a string
const findStudent = (array, student) => {
  return array.includes(student);
}

console.log(findStudent(students, 'Greg')); // false
console.log(findStudent(students, 'Dr. T')); // false
console.log(findStudent(students, 'Nathan')); // true

// *********** FOR LOOPS *********
// for (let i = 0; i <= 15; i++) {
//   console.log(i);
// }

// const functionForTad = () => {
//   for (let i = 0; i <= 15; i++) {
//     console.log(i);
//   }
// }

// functionForTad();

// ******* ARRAYS WITH LOOPS
// const ec14Instructors = ['Aja', 'Trinity', 'Dr. T', 'Discussion Tickets'];

// for (let i = 0; i < ec14Instructors.length; i++) {
//   console.log(ec14Instructors[i]);
// }

// ********* ARRAYS, LOOPS, FUNCTIONS

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

const colorLoop = () => {
  let domString = '';

  for (let i = 0; i < colors.length; i++) {
    domString += `<h1>${colors[i]}</h1>`;
  }

  console.log(domString);
};

// colorLoop();

const instructors = [
  { first: 'Trinity', last: 'Christiana' },
  { first: 'Aja', last: 'Washington' },
  { first: 'Teresa', last: 'Vasquez' },
];

const nameLoop = () => {
  let domString = '';

  for (let i = 0; i < instructors.length; i++) {
    domString += `<h1>${instructors[i].first} ${instructors[i].last}</h1>`;
  }

  console.log(domString);
}
nameLoop();

// ************ FOR OF LOOPS ***************

let sharks = ["great white", "tiger", "hammerhead", "whale shark"];
for (let [index, shark] of sharks.entries()) {
  console.log(index, shark);
}

let birds = ["Robin", "Blue Jay", "Hawk", "Owl", "Crow"];
for (bird of birds) {
  console.log(bird);
}
