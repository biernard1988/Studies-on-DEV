// VARIABLES
/* const name = "Bernard";
let age = 35;

console.log(name, age);
age = 49;
console.log(name, age);
console.log("Hi, my name is " + name + " and I am " + age + " years old.");
 */

//CONDITIONALS

/* let name = "Bernard";

if (typeof name === "string") {
  console.log("I am a string and my name is " + name);
} else if (typeof name === "number") {
  console.log("I am a number");
}

let age = 35;
typeof age === "string"
  ? console.log("I am a string")
  : typeof age === "number"
  ? console.log("I am a number and my age is " + age)
  : null;
 */

//BONUS
/* 
let names = [
  "Marlon Brando",
  "Robert DeNiro",
  "Charles Chaplin",
  "Jack Nicholson",
];

let ages = [85, 80, 125, 70];

if (names && ages) {
  console.log(names[0] + " is " + ages[0] + " years old.");
  console.log(names[1] + " is " + ages[1] + " years old.");
  console.log(names[2] + " is " + ages[2] + " years old.");
  console.log(names[3] + " is " + ages[3] + " years old.");
} else {
  console.log("Error");
}

const actor1 = names[0];
const actor2 = names[1];
const actor3 = names[2];
const actor4 = names[3];

if (ages[0] > ages[3]) {
  console.log(actor1 + " is older than " + actor3);
} else if (ages[0] < ages[3]) {
  console.log(actor3 + " is older than " + actor1);
} else {
  console.log(actor3 + " is older than " + actor1);
} */

//LOOP - FOR

/* for (let i = 20; i >= 0; i--) {
  console.log(i);
} */

//LOOP - WHILE

/* let i = 1;
while (i <= 100) {
  console.log(`${i} anos`);
  i++;
} */

//LOOP - DO WHILE

/* let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 20);
 */

//BONUS

/* const yearOfBirth = 1988;
// const currentYear = 2023;

for (let currentYear = 1988; currentYear <= 2023; currentYear++) {
  console.log(
    `I was born in ${yearOfBirth}. We are now in ${currentYear} and I am ${
      currentYear - yearOfBirth
    }
    } years old.`
  );
} */

//ARRAYS
//Create arrays 1. Manipulate arrays with push, pop, slice and more 2. Iterate over arrays with methods like: forEach, map and filter

/* let names = ["Bernard", "Marlon", "Robert", "Jack"];

names.push("Charles");
console.log(names);

let ages = [85, 80, 125, 70];
ages.pop();
console.log(ages);

let fruits = ["Apple", "Banana", "Orange", "Kiwi", "Melon"];
fruits.shift();
console.log(fruits); */

/* let lastNames = ["Brando", "DeNiro", "Chaplin", "Nicholson"];
lastNames.slice(0, 3);
console.log(lastNames); */

//FUNCTIONS

/* function hello() {
  console.log("Hello from the function");
}
hello();

const helloAgain = () => {
  console.log("Hello from the function");
};
helloAgain();

function townCrier(paramater1 = "Bernard") {
  if (typeof paramater1 === "string") {
    console.log(`This is a public announcement: ${paramater1}`);
  } else if (typeof paramater1 === "number") {
    console.log("This will make the people angry, boss!");
  } else if (typeof paramater1 === "boolean") {
    console.log("This will make the people scary, boss!");
  }
}
townCrier();

townCrier("Important news!");
townCrier(35);
townCrier(true);
 */

//BONUS

/* function call() {
  return "A coding kata a day keeps the bugs more!";
  console.log("I come after the return");
}

call();

let message = call();
console.log(message); */

//WORKSHOP-----------------------------------------------

/* 
//IF/ELSE
function greaterNum(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

let firstPairResult = greaterNum(1, 10);
console.log(`The greater number of 1 and 10 is ${firstPairResult}.`);

let secondPairResult = greaterNum(0, -1);
console.log(`The greater number of -1 and 0 is ${secondPairResult}.`);

let thirdPairResult = greaterNum(5, 1);
console.log(`The greater number of 5 and 1 is ${thirdPairResult}.`);
 */

//SWITCH
/* const colour = "black";
switch (colour) {
  case "blue": {
    console.log("The colour is blue");
    break;
  }
  case "red": {
    console.log("The colour is red");
    break;
  }
  case "black": {
    console.log("It's not a color that I know");
  }
}
 */

//TIME and DATE

/* let time = new Date();
console.log(time.getHours() + ":" + time.getMinutes());

let day = new Date();
console.log(day.getMonth() + " " + day.getDay()); */

//ARRAY
/* 
let numbers = [4, 3, 5, 8];
console.log("the values are: " + numbers);
console.log("the first value is " + numbers[0]);
console.log("the length is " + numbers.length);
 */

//ARRAY sort()

/* let numbers = [4, 3, 5, 8];
numbers.sort();
console.log(numbers); */

//LOOPS - FOR

/* let numbers = ["one", "two", "three"];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
} */

//LOOPS - ForEach

/* let numbers = ["one", "two", "three"];
numbers.forEach((element) => {
  console.log(element);
});
 */

//MIN, MAX

console.log(Math.min(9, 11, 55, 22));
console.log(Math.max(9, 11, 55, 22));
