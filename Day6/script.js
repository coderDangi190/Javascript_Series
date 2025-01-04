// console.log("Hello")
// window.alert ("Alert!!!");

/*
Window object
    The window object represents and open window in a browser. It is browser's object(not Javascript's)
    and is autonatically created browser.

    It is a global object with lots of properties & methods.

    What is DOM? 
    When a web page is loaded, the browser creates a Documnet Object Model(DOM) of the page.

    console.dir -> document

    console.dir(document.body.childNodes[1]);
    Selecting with id
        document.getElementById("myId");
    Selecting with class
        document.getElementsByClassName("myClass");
    Selecting with tag
        document.getElementsByTagName("p");


// let heading = document.getElementById("heading");

let heading = (document.getElementByClassName = "heading");
let parah = document.getElementsByTagName("p");
// console.log("sandip");
console.log(heading);
console.dir(parah);

let elements = document.querySelector("p");
console.dir(elements);
let Allelements = document.querySelectorAll(".heading");
console.dir(Allelements);


tagName
innerText
innerHtml
textContent

QS. Create a H2 heading element with text - "Hello JavaScript." Append "from Apna Collage
Students" to this text using Js

let h2 = document.querySelector("h2");

h2.innerText += " from Apna Collage Student.";
console.dir(h2.innerText);


QS. Create 3 divs with common class name - "box". 
Access them & add some unique text to each of them
*/

let div = document.querySelectorAll(".box");
console.log(div[0]);
div[0].innerText = "New Unique value1";
div[1].innerText = "New Unique value2";
div[2].innerText = "New Unique value3";
