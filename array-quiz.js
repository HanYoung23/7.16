"use strict";

// Q1. make a string out of an array
{
  const fruits = ["apple", "banana", "orange"];
  fruits.forEach(function (item) {
    console.log(item);
  });
}

// Q2. make an array out of a string
{
  const fruits = "🍎, 🥝, 🍌, 🍒";
  console.log(fruits);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const newArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  console.log(array);
  console.log(newArray);
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  console.log(array);
  // array.splice(0, 2); -> index를 추출한 값이 됨
  console.log(array.splice(0, 2));
  console.log(array);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// Q5. find a student with the score 90
{
  function findScore(score) {
    const theone = [];
    for (let i = 0; i < students.length; i++) {
      theone[i] = students[i].score;
    }
    const found = (element) => element === score;
    console.log(students[theone.findIndex(found)].name);
  }
  findScore(90);
}

// Q6. make an array of enrolled students
{
  const theone = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i].enrolled === true) {
      theone[i] = students[i].name;
    }
  }
  const filtered = theone.filter(function (el) {
    return el != null;
  });
  console.log(filtered);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const theone = [];
  for (let i = 0; i < students.length; i++) {
    theone[i] = students[i].score;
  }
  console.log(theone);
}

// Q8. check if there is a student with the score lower than 50
{
  function findScore(score) {
    for (let i = 0; i < students.length; i++) {
      if (students[i].score < score) {
        console.log(students[i].name);
      }
    }
  }
  findScore(50);
}

// Q9. compute students' average score
{
  var average = 0;
  for (let i = 0; i < students.length; i++) {
    average = average + students[i].score;
  }
  console.log(average / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  let string = "";
  for (let i = 0; i < students.length; i++) {
    string = `${string} ${students[i].score}`;
  }
  console.log(string);
}
