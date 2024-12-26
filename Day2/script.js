//Comments
//Single Line Comments.
console.log("Hello");
/*  This is a multi-line 
    comments.
*/

//  Operators in JS
// Used to perform some operation on data
/* 
    Arithmetic Operation (+,-,*,/)
     Modulus
     Exponentiation
     Increment
     Decrement
*/
/*
let a = 5;
let b = 2;
//Arithmetic Operation
console.log(`a*b is ${a * b}`);
console.log(`a+b is ${a + b}`);
console.log(`a/b is ${a / b}`);
console.log(`a-b is ${a - b}`);

//Modulus and Exponentiation
console.log(`a%b is ${a % b}`);
console.log(`a**b is ${a ** b}`);

//Unary Operation
console.log(`b++ is ${b++}`); //post increment
console.log(`b is ${b}`); // Change value
console.log(`++b is ${++b}`); //pre increment
console.log(`a-- is ${a--}`);


/*
    Assignment Operators
    =, +=,-=, *=, %= **=



let a = 5;
let b = 2;

console.log(`a+=4 is ${(a += 4)}`);
console.log(`a-=4 is ${(a -= 4)}`);
console.log(`a*=4 is ${(a *= 4)}`);
console.log(`a/=4 is ${(a /= 4)}`);
console.log(`a**=4 is ${(a **= 4)}`);


// Comparsion Operators
let a = 5;
let b = 2;

console.log(`a==b is ${a == b}`);
console.log(`a!=b is ${a != b}`);
console.log(`a===b is ${a === b}`);
console.log(`a!==b is ${a !== b}`);

console.log(`a>=b is ${a >= b}`);
console.log(`a<=b is ${a <= b}`);

//Logical Operators
let x = a > b;
let y = a === b;

console.log(`x&&y is ${x && y}`);
console.log(`x||y is ${x || y}`);
console.log(`!y is ${!y}`);



//Conditional Statements
// TO implement some condition in the code

let color;
let mode = "dark-mode";
if (mode === "dark-mode") {
  color = "black";
} else if (mode === "white-mode") {
  color = "White";
} else {
  color = "blue";
}
console.log(color);

//Ternary Operators

// condition ? true output:false output

let age = 32;

let result = age >= 18 ? "adult" : "not adult";
console.log(result);

let name = prompt("Enter your name? ");
console.log(`your name is ${name}`);

// Qs1. Get user to input a number using prompt("Enter a number"). Check if the number is a multiple of 5 or not.
let num = prompt("Enter a number.");

let check = num % 5 == 0 ? "multiple" : "not multiple";
console.log(check);
*/

//Qs2. Write a code which can give grades to students according to their scores:

let mark = prompt("Enter your Score.");
if (mark >= 90 && mark <= 100) {
  console.log("A");
} else if (mark >= 70 && mark <= 89) {
  console.log("B");
} else if (mark >= 60 && mark <= 69) {
  console.log("C");
} else if (mark >= 50 && mark <= 59) {
  console.log("D");
} else {
  console.log("F");
}
