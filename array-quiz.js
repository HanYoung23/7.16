"use strict";

// Q1. make a string out of an array
{
  const fruits = ["apple", "banana", "orange"];
  fruits.forEach(function (item) {
    console.log(item);
  });
}

// Q2. make an array out of a string ----------------------------
{
  const fruits = "🍎, 🥝, 🍌, 🍒";
  const array = [fruits];
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

console.clear();

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
  new Student("C", 30, true, 90), ///////////
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// Q5. find a student with the score 90 -------------------------
{
  console.log(students);
}

// Q6. make an array of enrolled students
{
  // students.forEach((element) => console.log(element));
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
}
