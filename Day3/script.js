// Loops in JS
/*
Loops are used to execute a piece of code again and again
for(let i=1; i<=5; i++){
    console.log("Coding");
}



//Calculate sum of 1 to 5
let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum += i;
}
console.log(sum);

let i = 20;
do {
  console.log("Sandip");
  i++;
} while (i <= 10);


//For of Loop
let str = "Sandip";
let size = 0;
for (let i of str) {
  console.log(`i= ${i}`);
  size++;
}
console.log("string size =", size);

//for in Loop
let student = {
  name: "Sandip Dangi.",
  age: 21,
  cgpa: 7.8,
  isPass: true,
};
for (let key in student) {
  console.log("key=", key, "value =", student[key]);
}

//QS!.Print all even numbers from 0 to 100.

for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

Qs.2 Create a game where you start with any random game number. Ask the user to keep guessing the game number 
until the user enters corrects value.


    const gameNum =25;

    let User = prompt("Enter a Guessing Number.");
    while(gameNum !== User){
        console.log("Congratulation.");
    }

   // String is a sequence of characters used to represent text.
   let str = "Javascript"
   str.length
   str[1]....

   

let obj = {
  item: "pen",
  price: 10,
};
console.log(`The cost of ${obj.item} is ${obj.price}`);

// String Methods in JS
These are built-in functions to manipulate a string.

-str.toUpperCase()
-str.toLowerCase()
-str.trim() // removes whitespaces
-str.slice(stat,end?)//returns part of string
-str1.concat(str2)//joins str2 with str1
-str.replace(serachVal,newVal)
-str.charAt(idx)


const str = "JavaScript ";
const str1 = "Project";
let newStr = str.toUpperCase();
console.log(newStr);
newStr = str1.toLowerCase();
console.log(newStr);
newStr = str.slice(2, 5);
console.log(newStr);
newStr = str.trim();
newStr = str.concat(str1);
console.log(newStr);
newStr = str.replace(str, str1);
console.log(newStr);
newStr = str.charAt(3);

console.log(newStr);

Qs1. Prompt the user to enter their full name. Generate a username for them based on the input. 
start username with @, followed by their full name and ending with the fullname length.
 */

let fullName = prompt("Enter your Full name??");

let userName = `@${fullName}${fullName.length}`;
console.log(userName);
