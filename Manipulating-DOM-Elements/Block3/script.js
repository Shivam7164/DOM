let para1 = `<p>Hello World!</p>`;
body.innerHTML = para1;
let para2 = `<p>Hello World!</p>`;
body.innerText = para2;
// What is the difference between 1 and 2 (innerHTML and innerText) in above code example.

innerHTML = whenever  is used ocode element in Html.you give see the font of the text get converted small font size . and innerText is provide same contant

// Explain the following with 2 examples:

querySelector is used select only one element 
querySelectorAll is used find the all element same name.

// What is the difference between Node and element explain with example.
node is accept space and comment and everythings but element only accept  element.

// Explain different methods of classList property (add, remove, toggle)
classList is used add className and remove className and  chexk ClassName.

// Difference between DOM property and DOM attributes explain.

Dom property is a value that you can get or set.
like = changing the content of an HTML element
A method is an action you can do 
like = add or deleting an HTML element.

6) Create the below HTML using JavaScript document methods createElement, createTextElement and createComment

<div class="container">
  <!-- unordered list -->
  <ul>
    <li>One</li>
    <li>Two</li>
  </ul>
</div>

innerText property sets or returns the text content as plain text of the specified node, and innerHTML property gets and sets the plain text or HTML contents in the elements.

The call to elem.querySelector(css) returns the first element for the given CSS selector. elem.querySelectorAll(css) returns all elements inside elem matching the given CSS selector. example:-

<ul> <li>apple</li> <li>Banana</li> </ul>
console.log(document.querySelector('li').length) // 1
console.log(document.querySelectorAll('li').length) // 2
Node is a hole think of page layout like it includes all elements and enters space and comment element as well as but the element is only a particular element is a part of the node.
DOM property:- They can have any value. They are case-sensitive DOM attributes:- it is case-insensitive. it is value always strings.

6.

let div = document.createElement('div');
let ul = document.createElement('ul');
let comment = document.createComment("unordered list");
let li1 = document.createElement('li');
let li2 = document.createElement('li');
let text1 = document.createTextNode('one')
let text2 = document.createTextNode('two');
li1.append(text1)
li2.append(text2);
ul.append(li1,li2);
div.append(comment,ul)