/*
    DOM Manipulation
    -Attributes
        #getAttribute(attr) // to get the attribute value
        #setAttribute(attr) // to set the attribute valut

    -style
        #node.style


let para = document.querySelector("p");
// console.log(para.getAttribute("Class"));
console.log(para.setAttribute("Class", "newclass"));

let div = document.querySelector("div");
div.style.backgroundColor = "green";
div.style.visibility = "hidden";

div.style.fontsize = "26px";


#Insert Element
    # node.append(el)
    # node.prepend(el)
    # node.before(el)
    # node.after(el)

# Delete Element
node.remove()

let newBtn = document.createElement("button");
newBtn.innerText = "clickMe";
let div = document.querySelector("p");
// div.append(newBtn);
// div.prepend(newBtn);
// div.before(newBtn);
div.after(newBtn);


let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>Hi, I am new!</i>";

document.querySelector("body").prepend(newHeading);

let para = document.querySelector("p");
para.remove();

Qs. Create a new button element. Give it a text "click me", background color of red & text color of white.
Insert the button as the first element inside the body tag.


let newbtn = document.createElement("button");
newbtn.innertext = "click me!";

newbtn.style.color = "white";
newbtn.style.backgroundColor = "red";

document.querySelector("body").prepend(newbtn);

Create a <p> tag in html, give it a class & some styling. Now create a new class in Css and try to 
append this class to the <p> else,
 Did you notice, how you overwrite the class name when you add a new one?
 solve this problem using class list

*/

let pra = document.querySelector("p");
par.getAttribute("class");

par.classList.add("newClass");
