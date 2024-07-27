// This file will walk you through some JavaScript basics

// Variables and Operators // 

// What are three different ways to declare a variable?
// 1. var
// 2. let
// 3. const

// Which one should you use when?
// - var: Older way, function-scoped. Generally avoid using it in modern code.
// - let: Block-scoped, can be reassigned. Use when you expect the value to change.
// - const: Block-scoped, cannot be reassigned. Use when you want to declare a constant value.

var x = 10;
let y = 20;
const z = 30;

// What are the rules for naming variables?
// - Must start with a letter, underscore (_), or dollar sign ($)
// - Can contain letters, numbers, underscores, or dollar signs
// - Cannot use reserved keywords (e.g., let, const, function)

let userName;
let $amount;
let _value;

// What is concatenation and what happens when you add numbers and strings together?
// Concatenation is combining strings together using the + operator. 
// Adding a number and a string results in a string.

let firstName = 'John';
let lastName = 'Doe';
let fullName = firstName + ' ' + lastName;
console.log(fullName); // Output: John Doe

let number = 100;
let text = '50';
let result = number + text;
console.log(result); // Output: 10050

// What are the different types of operators in JavaScript? (+, -, *, /, %, **)
// - Arithmetic operators: +, -, *, /, %, **
let sum = 5 + 3; // 8
let difference = 5 - 3; // 2
let product = 5 * 3; // 15
let quotient = 5 / 3; // 1.66667
let remainder = 5 % 3; // 2
let power = 5 ** 3; // 125

// What are the increment/decrement operators? ( ++, --)
let counter = 0;
counter++; // Increment by 1
counter--; // Decrement by 1
console.log(counter); // Output: 0

// Datatypes and Conditionals //

// Name the eight data types in JavaScript.
// 1. Number
// 2. String
// 3. Boolean
// 4. Object
// 5. Undefined
// 6. Null
// 7. Symbol
// 8. BigInt

// Understand the difference between single, double, and backtick quotes.
// - Single quotes: 'Hello'
// - Double quotes: "Hello"
// - Backtick quotes: `Hello` (used for template literals, allowing embedded expressions)

let singleQuote = 'Hello';
let doubleQuote = "Hello";
let backtickQuote = `Hello, ${singleQuote}!`;

// Understand what a method is. (length, toUpperCase(), toLowerCase(), replaceAll())
// A method is a function associated with an object or data type.

let str = "JavaScript is awesome!";
console.log(str.length); // 22
console.log(str.toUpperCase()); // "JAVASCRIPT IS AWESOME!"
console.log(str.toLowerCase()); // "javascript is awesome!"
console.log(str.replaceAll('awesome', 'amazing')); // "JavaScript is amazing!"

// Name the three logical operators.
// 1. AND (&&)
// 2. OR (||)
// 3. NOT (!)

let isAdult = true;
let hasPermission = false;
console.log(isAdult && hasPermission); // false
console.log(isAdult || hasPermission); // true
console.log(!isAdult); // false

// Understand what the comparison operators are. (<, >, ==, ===)
console.log(5 > 3); // true
console.log(5 < 3); // false
console.log(5 == '5'); // true (loose equality, only compares values)
console.log(5 === '5'); // false (strict equality, compares values and types)

// What is the difference between == and ===?
// - ==: Loose equality, compares values without considering types.
// - ===: Strict equality, compares both values and types.

const a = 100;
const b = '100';
console.log(a == b); // true
console.log(a === b); // false

// Understand what conditionals are.
// Conditionals allow you to perform different actions based on different conditions.

if (a === 100) {
  console.log('a is 100');
} else {
  console.log('a is not 100');
}

// Understand what nesting is.
// Nesting is placing one control structure inside another.

if (isAdult) {
  if (hasPermission) {
    console.log('Access granted');
  } else {
    console.log('Access denied');
  }
} else {
  console.log('Not an adult');
}

// Creating a simple object
let car = {
  // Properties of the object (key-value pairs)
  make: 'Toyota',      // 'make' is the key, 'Toyota' is the value
  model: 'Camry',      // 'model' is the key, 'Camry' is the value
  year: 2021,          // 'year' is the key, 2021 is the value
  color: 'blue',       // 'color' is the key, 'blue' is the value
  
  // Method (function) inside the object
  start: function() {
      console.log('The car has started.');
  },

  // Another method
  stop: function() {
      console.log('The car has stopped.');
  }
};

// Accessing properties of the object
console.log('Car Make:', car.make);    // Output: Car Make: Toyota
console.log('Car Model:', car.model);  // Output: Car Model: Camry
console.log('Car Year:', car.year);    // Output: Car Year: 2021
console.log('Car Color:', car.color);  // Output: Car Color: blue

// Calling methods of the object
car.start(); // Output: The car has started.
car.stop();  // Output: The car has stopped.

// Function basics //

// How to define and invoke different kinds of functions.

// Function Declaration
function greet() {
  console.log('Hello, world!');
}
greet(); // Invoke the function

// Function with arguments
function greet(person) {
  console.log(`Hello, ${person}!`)
}
greet("Kimber") // "Hello, Kimber!" will be logged

// Function Expression
const greetUser = function(name) {
  console.log(`Hello, ${name}!`);
};
greetUser('Alice');


// How to use the return value.
function multiply(a, b) {
  return a * b;
}

let product2 = multiply(4, 5);
console.log(product); // 20

function addFish(name) {
  return name + " fish"
}
let newName = addFish("Kimber")
console.log(newName) // Kimber fish

// What function scope is.
// Scope determines the visibility of variables. 
// Variables defined inside a function are not accessible outside of it (local scope).

function scopeExample() {
  let localVar = 'I am local';
  console.log(localVar);
}
scopeExample();
// console.log(localVar); // Error: localVar is not defined

// Arrays and Loops // 

// Using arrays.

console.log(fruits[0]); // Apple

// Using built-in array methods.
fruits.push('Date'); // Add an item to the end
console.log(fruits); // ["Apple", "Banana", "Cherry", "Date"]
fruits.pop(); // Remove the last item
console.log(fruits); // ["Apple", "Banana", "Cherry"]
fruits.shift(); // Remove the first item
console.log(fruits); // ["Banana", "Cherry"]
fruits.unshift('Apricot'); // Add an item to the beginning
console.log(fruits); // ["Apricot", "Banana", "Cherry"]

let fruits = ['Apple', 'Banana', 'Cherry'];

// For loop
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// For-of loop
for (let fruit of fruits) {
  console.log(fruit);
}

// While loop
let count = 0;
while (count < 3) {
  console.log(count);
  count++;
}


// Getting your hands dirty with TDD exercises.
// Example: Write a function to reverse an array.
function reverseArray(arr) {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

let numbers = [1, 2, 3, 4, 5];
console.log(reverseArray(numbers)); // [5, 4, 3, 2, 1]

// DOM Manipulation and Events //

// Explain what the DOM is in relation to a webpage.
// The DOM (Document Object Model) is a programming interface for web documents. 
// It represents the page as a tree structure where each node is an object representing a part of the document (such as an element, attribute, or piece of text).
// This allows programming languages (like JavaScript) to manipulate the structure, style, and content of the web page dynamically.

let element = document.getElementById('example');

// Explain the difference between a “node” and an “element”.
// - Node: Any point in the DOM tree. It can be an element node, text node, comment node, etc.
// - Element: A specific type of node that represents an HTML element. It can have attributes and can contain other nodes (like text or child elements).

let textNode = document.createTextNode('This is a text node');
document.body.appendChild(textNode);

// Explain how to target nodes with “selectors”.

// By ID
let header = document.getElementById('header');

// By class name
let items = document.getElementsByClassName('item');

// By tag name
let paragraphs = document.getElementsByTagName('p');

// Using querySelector and querySelectorAll
let main = document.querySelector('#main');
let listItems = document.querySelectorAll('.list-item');

// Explain the basic methods for finding, adding, removing, and altering DOM nodes.

// Finding elements
let container = document.querySelector('.container');

// Adding elements
let newDiv = document.createElement('div');
newDiv.textContent = 'New Div';
document.body.appendChild(newDiv);

// Removing elements
let removeMe = document.getElementById('removeMe');
removeMe.remove();

// Altering elements
newDiv.style.color = 'blue';
newDiv.setAttribute('data-info', 'example');

// Explain the difference between a “NodeList” and an “array of nodes”.
// NodeList: A collection of nodes returned by methods like querySelectorAll. It is array-like but not a true array. It has a length property and can be iterated with forEach, but does not have all array methods.
// Array of nodes: A true JavaScript array containing nodes, which has access to all array methods (like map, filter, reduce, etc.).

// Example of converting a NodeList to an array
let nodeList = document.querySelectorAll('p');
let nodeArray = Array.from(nodeList);
nodeArray.forEach(node => console.log(node.textContent));

// Event Handlers //

// Explain what an event is.
// An event is an action or occurrence detected by the browser (e.g., clicking a button, loading a page, typing in a field). 
// JavaScript can listen for these events and execute code in response.

// Adding event listeners to elements.

// Click event
let button = document.getElementById('myButton');
button.addEventListener('click', function() {
  console.log('Button clicked!');
});

// Mouseover event
let hoverDiv = document.getElementById('hoverDiv');
hoverDiv.addEventListener('mouseover', function() {
  hoverDiv.style.backgroundColor = 'lightblue';
});

// Keyboard event
document.addEventListener('keydown', function(event) {
  console.log(`Key pressed: ${event.key}`);
});

// Form submission event
let form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevents the form from submitting
  console.log('Form submitted!');
});

// Explain event propagation (bubbling and capturing).
// Event propagation is the way events travel through the DOM tree. 
// - Bubbling: The event starts from the target element and bubbles up to the root (document).
// - Capturing: The event starts from the root and captures down to the target element.

let outerDiv = document.getElementById('outerDiv');
let innerDiv = document.getElementById('innerDiv');

outerDiv.addEventListener('click', function() {
  console.log('Outer div clicked!');
}, true); // Capturing phase

innerDiv.addEventListener('click', function() {
  console.log('Inner div clicked!');
}, false); // Bubbling phase

// Event delegation
// Event delegation involves attaching a single event listener to a parent element to manage events for multiple child elements.

let list = document.getElementById('myList');
list.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    console.log(`List item ${event.target.textContent} clicked!`);
  }
});

// Example HTML structure for event delegation:
// <ul id="myList">
//   <li>Item 1</li>
//   <li>Item 2</li>
//   <li>Item 3</li>
// </ul>

// Updating the screen with a counter when a button is clicked

// HTML structure:
// <button id="counterButton">Click me!</button>
// <p id="counterDisplay">Count: 0</p>

// JavaScript for the counter example
let count2 = 0;
const counterButton = document.getElementById('counterButton');
const counterDisplay = document.getElementById('counterDisplay');

counterButton.addEventListener('click', function() {
  count++;
  counterDisplay.textContent = `Count: ${count}`;
});

let firstParagraph = document.querySelector('p')
// Modifying Styles
firstParagraph.style.color = 'blue'; // Changes the text color to blue
firstParagraph.style.fontSize = '20px'; // Changes the font size to 20px

// Creating and Appending New Elements
let newParagraph = document.createElement('p'); // Creates a new <p> element
newParagraph.innerText = 'This is a new paragraph added by JavaScript.';
document.body.appendChild(newParagraph); // Appends the new paragraph to the body of the document

// Removing an Element
newParagraph.remove()
removeButton.addEventListener('click', function() {
    newParagraph.remove(); // Removes the new paragraph when the button is clicked
});


