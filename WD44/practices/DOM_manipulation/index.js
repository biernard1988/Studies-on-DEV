//DOM - On Click

//  EXAMPLE:

/* let eventTarget = document.getElementById('targetElement');

eventTarget.addEventListener('click', function() {
  // this block of code will run when click event happens on eventTarget element
});

Let’s break this down!

We selected our event target from the DOM using document.getElementById('targetElement').
We used the .addEventListener() method on the eventTarget DOM element.
The .addEventListener() method takes two arguments: an event name in string format and an event handler function. We will learn about different values we can use as event names in a later lesson.
In this example, we used the 'click' event, which fires when the user clicks on eventTarget.
The code block in the event handler function will execute when the 'click' event is detected.
Instead of using an anonymous function as the event handler, it’s best practice to create a named event handler function. Your code will remain organized and reusable this way, even if your code gets complex. Check out the syntax:

function eventHandlerFunction() {
  // this block of code will run when click event happens
}

eventTarget.addEventListener('click', eventHandlerFunction);

The named function eventHandlerFunction is passed as the second argument of the .addEventListener() method instead of defining an anonymous function within the method! */

/* document.(".block").addEventListener('click', () => {
    document.location.href = 'https://getbootstrap.com'
  }) */
  
//DOM - Conditional On Click
/* 
document.querySelector(".block .redirect").addEventListener('click', () => {
    document.location.href = 'https://getbootstrap.com'
  }) */

//DOM - On Key Up

/* document.querySelector(".block input").addEventListener('keyup', () => {
    console.log(document.querySelector(".block input").value)
}) */

//DOM - On Submit

/* document.querySelector(".block form").addEventListener('submit', () => {
    alert("You don't submitted the form")
}) */


//DOM - CSS with JS

/* const logoElement = document.getElementById('logo');
const screenElement = document.querySelector('.screen');
const h1Element = document.querySelector('h1'); */

/* logoElement.addEventListener("click", () => {
  alert("System On");
  screenElement.style.backgroundColor = "#444";
  h1Element.innerHTML = "Hello World";
});
 */

//DOM - HTML with JS

/* DEFER TAG:

<script src="example.js" defer></script> 

When is defer useful?

When a script contains functionality that requires interaction with the DOM, the defer attribute is the way to go. This way, it ensures that the entire HTML file has been parsed before the script is executed. */

/* ASYNC TAG:

<script src="example.js" async></script>

When is it useful?

async is useful for scripts that are independent of other scripts in order to function accordingly. Thus, if it does not matter exactly at which point the script file is executed, asynchronous loading is the most suitable option as it optimizes web page load time. */

//DOM - Events


//FIRST EXERCISE:

/* let readMore = document.getElementById('read-more');
let moreInfo = document.getElementById('more-info');

// Write your code here:  
function showInfo(){
  moreInfo.style.display = 'block';
}

readMore.addEventListener('click', showInfo); */

//SECOND EXERCISE:

/* let view = document.getElementById('view-button');
let close = document.getElementById('close-button');
let codey = document.getElementById('codey');

let open = function() {
  codey.style.display = 'block';
  close.style.display = 'block';
};

let hide = function() {
  codey.style.display = 'none';
  close.style.display = 'none';
};

view.addEventListener('click', open);
close.addEventListener('click', hide);

// Write your code here

let textChange = function() {
  view.innerHTML = 'Hello, World!'
}

let textReturn = function() {
  view.innerHTML = 'View'
}

view.onclick = textChange
close.onclick = textReturn */







