// Function in JS
/*
Block of code that performs a specific task, can be invoked wherever needed

function functionName(){
    //do some work
}

functionName(); //function call

function sum(x,y){
    s = x+y;
    return s;
}

let val = sum(4,6);
console.log(val);

Arrow Functions
Compact way of writing a function

const functionName = ()=>{
    //do some thing
}

Qs. Create a function using the "Function" keyword that takes a String as an argument & returns the numbers of vowels in the string.
const findVowel = (str) => {
  let n = 0;

  for (const val of str) {
    if (
      val === "a" ||
      val === "e" ||
      val === "i" ||
      val === "o" ||
      val === "u"
    ) {
      n = n + 1;
    }
  }
  return n;
};

forEach Loop in Arrays

arr.forEach(callBackFunction)

callbackFunction: Here, it is a function to execute for each element in the array

A callback is a function passed as an argument to another function.
forEach - only used for Array not a string.

arr.forEach((val, idx, arr)=>{ 
    console.log(val, idx, arr);
})

Higher order function :- where Callback function include [parameter, return]


let address = ["Ramana", "Narayanpur", "Mumbai"];

address.forEach((value) => {
  console.log(value.toUpperCase());
});

// for a given number of array and print the square value of these number.


let setnum = [3, 6, 7, 4, 8];

setnum.forEach((val) => {
  console.log(val * val);
});


let num = [9, 4, 6, 2, 1];

let result = num.map((val) => {
  return val * val;
});

console.log(result);


let array = [4, 3, 6, 5, 1, 8];

let even = array.filter((val) => {
  return val % 2 == 0;
});

console.log(even);


let array = [4, 7, 5, 2, 1];
let sum = 0;
let avrage = array.reduce((res, val) => {
  return res+val;

  return (avg = sum / array.length);
});
console.log(avg);

Qs. We are given array of marks of students. Filter out of the marks of students that scored 90+


let marks = [70, 77, 80, 92, 94, 88];

let Agrade = marks.filter((val) => {
  if (val > 90) {
    return val;
  }
});
console.log(Agrade);

QS. Take a number n as input from user. Create an array of numbers from 1 to n.
Use the reduce method to calculate sum of all numbers in the array
Use the reduce method to calculate product of all numbers in the array.

*/
let n = prompt("Enter the value of n");
let arr = [];
for (let i = 1; i <= n; i++) {
  arr[i - 1] = i;
}
console.log(arr);
let sum = 0;
let product = 1;
let sNum = arr.reduce((res, val) => {
  return res + val;
});
let PNum = arr.reduce((res, val) => {
  return res * val;
});

console.log(`Total sum = ${sNum} and Product ${PNum}`);
