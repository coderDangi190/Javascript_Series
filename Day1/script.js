console.log("Welcome my Day1 class");

//Variable in JS
/*
    Variables are containers for data.

    ** Variable rule

    # Variable names are case sensitive; "a" & "A" is different.
    # Only letters, digits, underScore(_) and $ is allowed. (not even space)
    # Only a letter, underscore(_) or $ should be 1st character.
    # Reserved words cannot be variable names.

    ** let var and const 

    # var:- Variable can be re-declared and update. A global scope variable.
    # let:- Variable cannot be re-declared but can be updated. A block scope variable.
    # const :- Variable cannot be re-declared or update. A block scope variable.
*/

/*
    * Data Type
        Number, String, Boolean, Undefined, Null, BigInt, Symbol  
*/
const name = "sandip";
let mark = 32.2;
console.log(mark);

let a;
//const a
console.log(a);

{
  let a = 5;
  console.log(a);
}

let x = BigInt("124");
let y = Symbol("Hello!");

//Create object

const student = {
  fullName: "Sandip Dangi",
  age: 21,
  mark: 90,
  isPass: true,
};

student["age"] = student["age"] + 1;

console.log(student["age"]);

// Qs.1 Create a const object called "product" to store information shown in the picture. let Assume Img

const product = {
  name: "Parket Jotter Standard",
  rating: 72,
  isDeal: true,
  price: 270,
  offer: 5,
};

console.log(product);

// Qs2. Create a const object called "profile" to store information shown in the picture.

const Profile = {
  name: "Shradhakhapra",
  noOfPost: 195,
  noOfFollowers: 569,
  noOfFollowing: 4,
  isFollow: true,
};
console.log(Profile);
console.log(typeof Profile["name"]);
