// Change the title of the page to Hello AltCampus!
document.title = "Hello AltCampus!";
1 // Select the element using the children property:
// Select the h1 element and change the value to Learning DOM
let h1 = document.querySelector("h1");
h1.innerText = "Learning DOM";
// Select the first li element inside the ul with class topics and change the innerText to all about document
let li = document.querySelector("Li");
li.innerText = "all about document"
// Select the input element with name email
let emailElm = document.body.children[6].children[2]
// Log the number (using console.log) of children of all the li element inside the ul with class topics
let ul = document.body.children[5]
console.log(ul.children.length)
// let ul = document.querySelectorAll("li")
// console.log(ul.length)

// Select the first input using the type selector and store them in variable named emailInput
let emailInput = document.querySelector("input")
// Select the ul element using class selector and store in topics
let topics = document.querySelector(".topics")
// Select the first label element and store in label
let label = document.querySelector("label")
// Select the input of type checkbox with the id selector and store in inputCheckbox
let inputCheckbox = document.getElementById("remember");
console.log(inputCheckbox)
// Select the input of type password using Attribute selectors. (eg: input[type="text"]) and store in password
let password =document.querySelector('input[type="password"]')
// Select the input using the placeholder attribute selector with value password and store in attrPassword
let attrPassword = document.querySelector('input[placeholder="password"]')
// Select all the li element and store in allTopics
let allTopics = document.querySelectorAll("li")
// Select all the input element of any type and store in allInput
let allInput = document.querySelectorAll("input")
// Use forEach to console the innerText property of all the li element in allTopics variable.
allTopics.forEach((ele)=>console.log(ele.innerText))
// Select all the elements with class list and store in variable listOfSelectedTopics
let listOfSelectedTopics = document.querySelectorAll(".list")
// Select the first li element inside the ul element using > (direct child) and store in firstLi
let firstLi = document.querySelector("ul>li")
// Select all the img element and log the number of element saying The total number of img element is ---
let allImg = document.querySelectorAll("img") 
console.log(allImg.length)
// Select all the p element and store in allPElement
let allPElement = document.querySelectorAll("p");
// Select all the buttons and log the count of buttons.
let buttons = document.querySelectorAll("button")
console.log(buttons.length)
// Select all the label element and log the count.
let labels = document.querySelectorAll("label")
console.log(labels.length)
// Select all the elements with id of test
let texts = document.querySelectorAll("#test")
console.log(texts.length)
// Select the first element with id test using getElementById
let irstElement = document.getElementById("test")
console.log(irstElement)
// Select the parent element of the element stored in topics variable (#5) and log the element.
console.log(topics.parentElement)
// Select the next element sibling of the element stored in topics variable (#5) and log the element.
console.log(topics.nextElementSibling)
// Select the previous element sibling of the element stored in topics variable (#5) and change the innerText property to Learning About Walking the DOM.
let changeInnerText =  topics.previousElementSibling;
changeInnerText = " Learning About Walking the DOM"
// Select the first element child of the element stored in topics variable (#5) and change the innerText property of the element to This is the first child element.
let changeInner =  topics.firstElementChild;
 changeInner  = "the element to This is the first child element"
// Select the last element child of the element stored in topics variable (#5) and log the typeof the element.
console.log(typeof topics.lastElementChild)
// Select the element with type fieldset and store in a variable named fieldsetElm.
let fieldsetElms =document.querySelector("fieldset")
console.log(typeof fieldsetElms)
// Select the parent element of the element stored in fieldsetElm variable (#5) and log the typeof the element.
let fieldsetElm = document.querySelector("fieldset");
console.log(typeof (fieldsetElm.parentElement))
