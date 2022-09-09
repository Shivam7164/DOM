// Select the h1 element and store it in a variable named heading.
let heading = document.querySelector("h1")
// Check the typeof heading and log it.
console.log(typeof heading)
// Change the color of heading to black.
heading.style.color="black"
// Select all the hr elements and store it in a variable named allHrs using querySelectorAll
let allHrs = document.querySelectorAll("hr")
/* 
Convert the NodeList returned by querySelectorAll to Array using Array.from() or spread operator and store it in allHrsArray
Array.from converts an array kind of data into array so we can use methods like map, reduce
HINT:
let allHrsArray = Array.from(allHrs)
*/
let allHrsArray = Array.from(allHrs)
console.log(allHrsArray)
// Set the border of the all the hr elements to "1px solid tomato"
allHrs.forEach((ele)=>ele.style.border="2px solid tomato")
// Change the background of all the hr to "antiquewhite" using for of loop.
for(let bgColor of allHrs){
    bgColor.style.backgroundColor="antiquewhite"
}
// Change the 'border-radius' of all the hr to "5px" using array.
allHrs.forEach((ele)=>ele.style.borderRadius="5px")
// Change the alignment of the heading(h1) to center.
heading.style.textAlign="center"
// Change the font size of the heading to 3rem.
heading.style.fontSize="3rem"
// Change the border of hr with class 'image' to `2px solid purple`
let img = document.querySelector('.image')
img.style.border="2px solid purple"
// Hide the box number 17 (last box).
let lastBox = document.querySelector(".seventeen");
lastBox.style.display = "none"
// Change the border of all the hr element from solid to dashed type
allHrs.forEach((ele)=>ele.style.border="2px dashed")
// Create a pragraph element and store it in variable named 'para' using `createElement`
let para = document.createElement("p")
// Change the inner text of para to "querySelector returns an element you can maupulate but querySelectorAll returns the collection of elements in array kind of structure."
para.innerText='it is first box'
// Remove all the elements from box 1
let firstBox = document.querySelector(".one");
firstBox.innerHTML=""
// Replace all the elements inside box 1 with the para (you created above)
firstBox.append(para)
/* Walking the DOM
Do the following after selecting box 16 and storing in variable named box16
  - Access the parentNode
  - Access the childNodes
  - Access previousSibling
  - Access nextSibling
  - Access firstChild
  - Access lastChild
  - Access previousElementSibling
  - Access nextElementSibling
  - Access firstElementChild
  - Access lastElementChild
  - Focus on the difference between element and node
*/
let box16 = document.querySelector(".sixteen")
console.log(box16.parentNode)
console.log(box16.childNodes)
console.log(box16.previousSibling)
console.log(box16.nextSibling)
console.log(box16.firstChild)
console.log(box16.lastChild)
console.log(box16.previousElementSibling)
console.log(box16.nextElementSibling)
console.log(box16.firstElementChild)
console.log(box16.lastElementChild)
// Select box 2 and append a new paragraph element with content "Append inserts as last child" just after hr element.
let newPara1 = document.createElement("p")
let box2 = document.querySelector(".two");
newPara1.innerText="Append inserts as last child"
box2.append(newPara1)
// Select box 3 and prepend a new paragraph element with content "Prepend inserts as first child" just before hr element.
let newPara2 = document.createElement("p")
let box3 = document.querySelector(".three");
newPara2.innerText="Prepend inserts as first child"
box3.prepend(newPara2)
// Change the border of box 4 to '1px solid black'
let box4 = document.querySelector(".four");
box4.style.border="1px solid black"
// Change the border radius of box 5 to 10px.
let box5 = document.querySelector(".five");
box5.style.borderRadius="10px"
// Change the text color of box 6 to black.
let box6  = document.querySelector(".six");
box6.style.color="black"
// Change the font size of the para inside box 1 to 0.8rem.
para.style.fontSize="0.8rem"
// Change the background of all the alternate boxes (1, 3, 5, ....) to aliceblue
let Div = document.querySelectorAll(".box");
Div.forEach((ele,index)=>{
if((index + 1)%2 !== 0){
ele.style.backgroundColor="aliceblue";
}
});
// add a class named "awesome-box" to the box 6 using classList property of DOM element.
box6.classList.add("awesome-box");
// Using the toggle classList property toggle the class `awesome-box` from box 2
box2.classList.toggle("awesome-box");
// Using the remove classList proeprty remove the class `awesome-box` from box 4
box4.classList.remove("awesome-box");
// Change the background of the body to bisque
let body = document.body;
body.style.backgroundColor="bisque"
// Create a button and store it in a variable named 'btn'
let btn = document.createElement("button")
// textContent of the button should be 'Click Me'
btn.innerText='Click Me'
// Change the background of the btn to 'oldlace'
btn.style.backgroundColor='oldlace'
// Change the font size of the btn to 1rem
btn.style.fontSize='1rem'
// Change the border of the btn to '1px solid black'
btn.style.border='1px solid black'
// Add the padding of '0.5rem 1rem' to btn
btn.style.padding='0.5rem 1rem'
// Append the btn in box number 9
let box9 = document.querySelector(".nine")
box9.append(btn)
// Create a img element with src value `https://images.unsplash.com/photo-1592500595497-d1f52a40b207?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80` and store in a variable named imgElm
let Img = document.createElement("img")
Img.src = "data:image/png;base64,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"
// Select the box 7 using class seven
let box7 = document.querySelector(".seven")
// Remove all the elements form box seven
box7.innerHTML=""
// Append the imgElm to the box no 7
box7.append(Img)
// Change the width and height of the image to `100%`
Img.style.width="100%"
Img.style.height="100%"
// Create an input element
let Input = document.createElement("input")
// Change the placeholder property of the input element to "Enter you email!"
Input.placeholder="Enter you email!"
// Append the input element to the box 5 you selected above
box5.append(Input)
// Create two anchor (a) element with  the text of `AltCampus` and `Google`
let a1 = document.createElement("a")
let a2 = document.createElement("a")
a1.innerText="AltCampus"
a2.innerText="Google"
// Change the href property of the anchor elements to `https://altcampus.school` and `https://google.com`
a1.href="https://altcampus.school"
a2.href="https://google.com"
// Append both the elements to box 5 you selected above.
box5.append(a1)
box5.append(a2)
