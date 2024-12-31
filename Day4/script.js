// Arrays in Js

/*
collection of Items

let marks = [98,34,64,77]
let info = ["rahul", 89, ""]

console.log(marks.length);


let heroes = ["ironman", "hulk", "thor", "batman"];

// for (let i = 0; i < heroes.length; i++) {
//   console.log(heroes[i]);
// }

for (let hero of heroes) {
  //   console.log(hero);
  console.log(hero.toUpperCase());
}
Qs.For a given array with marks of students => [98,76,71, 63,]. Find the average marks of the entire class.

let marks = [85, 97, 44, 37, 76, 60];

let sum = 0;
for (let val of marks) {
  sum += val;
}
let avg = sum / marks.length;

console.log(`Average marks of student is ${avg}`);
// QS. For a given array with prices of 5 items->[250, 645, 300, 900, 50] 
All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.



let Items = [250, 645, 300, 900, 50];
let getOffer = 0.1;

let i = 0;
for (let price of Items) {
  // price = getOffer * price;
  Items[i] -= getOffer * price;
  console.log(`${Items[i]}`);
  i++;
}
Arrays in JS
push(): add to end
pop(): delete from end & return
toString(): converts array to string
Concat(): joins multiple arrays & returns result
unshift(): add to start
shift():delete from start & return
slice():- returns a price of the array slice(sindex, eindex)
splice():- change original array(add, remove, replace); splice(sindex, delCount, newEli)

let foodItems = ["potato", "apple", "litchi", "tomato"];

foodItems.push("chips", "burger");

console.log(foodItems);
foodItems.pop();
foodItems.pop();
console.log(foodItems);

console.log(foodItems.toString());

let foodItems = ["potato", "apple", "litchi", "tomato"];
let Items = ["Rice", "Meat"];

let showItems = foodItems.concat(Items);
showItems = foodItems.shift();
showItems = foodItems.slice(1, 3);
foodItems.splice(1, 2, "yak", "bread");
// console.log(showItems);

Qs. Create an array to store companies -> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"

a. Remove the first company from the array
b. Remove Uber & Add Ola in its place
c. Add Amazon at the end
*/

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "NetFlix"];
companies.shift();
companies.splice(1, 1, "Ola");
companies.push("Amazon");
console.log(companies);
