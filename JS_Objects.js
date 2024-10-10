// JavaScript Objects
// Objects are variables too. But objects can contain many values.

Objects are containers for Properties and Methods.

const car = {
    type: "Fiat",
    model: "500", 
    color: "white"
};


/*How to Define a JavaScript Object
• 01 Using an Object Literal
• 02 Using the new Keyword
• 03 Using an Object Constructor*/


// 01 Using an Object Literal ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// An object literal is a list of name:value pairs inside curly braces {}.
// ex:
{firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}



// Create an Object
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };


// Example below creates an empty JavaScript object, and then adds 4 properties:

// Create an Object
const person = {};

// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";



// 02 Using the new Keyword ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// JavaScript object using new Object()

// Create an Object
const person = new Object();

// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";





// Accessing Object Properties ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// The named values, in JavaScript objects, are called properties.


   1) objectName.propertyName
   2) objectName["propertyName"]


//    JavaScript Object Methods ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Methods are actions that can be performed on objects.

Methods are function definitions stored as property values.


// ex
const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };



//   In JavaScript, almost "everything" is an object.

// Objects are objects
// Maths are objects
// Functions are objects
// Dates are objects
// Arrays are objects
// Maps are objects
// Sets are objects
// All JavaScript values, except primitives, are objects.



JavaScript Primitives
// A primitive value is a value that has no properties or methods.

// A primitive data type is data that has a primitive value.

// JavaScript defines 7 types of primitive data types:

// • string
// • number
// • boolean
// • null
// • undefined
// • symbol
// • bigint


JavaScript Objects are Mutable


//Create an Object
const person = {
    firstName:"John",
    lastName:"Doe",
    age:50, eyeColor:"blue"
  }
  
  // Create a copy
  const x = person;
  
  // Change Age in both
  x.age = 10;

// NOTE:
// The object x is not a copy of person. The object x is person.
// The object x and the object person share the same memory address.


Adding New Properties ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// You can add new properties to an existing object by simply giving it a value:

person.nationality = "English";


Deleting Properties ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// The delete keyword deletes a property from an object:

delete person.age;



JavaScript Object Methods ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };


  Accessing Object Methods

//   You access an object method with the following syntax:
objectName.methodName()

// ex
name = person.fullName();
// If you invoke the fullName property with (), it will execute as a function:
// If you access the fullName property without (), it will return the function definition



How to Display JavaScript Objects? ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// Some solutions to display JavaScript objects are:

// • Displaying the Object Properties by name ---------------------------------------------------------

person.name + "," + person.age + "," + person.city;


// • Displaying the Object Properties in a Loop --------------------------------------------------------

// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
//   };
  

  let text = "";
  for (let x in person) {
    text += person[x] + " ";
  };


//   Note:
// You must use person[x] in the loop.
// person.x will not work (Because x is the loop variable).



// • Displaying the Object using Object.values() -------------------------------------------------------

Object.values() creates an array from the property values

// Create an Object
const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  // Create an Array
  const myArray = Object.values(person);

//   o/p
[ 'John', 30, 'New York' ]

//   ---------------------------------------------------------------------------------------

  Displaying the Object using Object.entries()

// Object.entries creates array of array which includes [key,vlue]


// ex
const person = { name: "John", age: 30, city: "New York" };
console.log(Object.entries(person));

// o/p

[ [ 'name', 'John' ], [ 'age', 30 ], [ 'city', 'New York' ] ]



// exMPLE

const fruits = {Bananas:300, Oranges:200, Apples:500};

let text = "";
for (let [fruit, value] of Object.entries(fruits)) {
  text += fruit + ": " + value + "<br>";
}





// for of loops

// Syntax:
for (variable of iterable) {
    // code block to be executed
  }

• variable: Holds the current value from the iterable 
// (e.g., an element in an array or a character in a string).

• iterable: The object that can be looped over, such as an array, string, map, or set.


// eXAMPLE
// const fruits = ["Banana", "Orange", "Apple"];
// for (let fruit of fruits) {
//   console.log(fruit);
// }

// O/P
// Banana
// Orange
// Apple


// • Displaying the Object using JSON.stringify()


JavaScript objects can be converted to a string with JSON method JSON.stringify().

  // Stringify Object
  let myString = JSON.stringify(person);

// The result will be a string written in JSON notation:
// {"name":"John","age":50,"city":"New York"}


--------------------------------------------------------------------------------------------------------




Object Constructor Functions

// Sometimes we need to create many objects of the same type.
// To create an object type we use an object constructor function


// example
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }

//   Note:
// In the constructor function, this has no value.
// The value of this will become the new object when a new object is created.

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
const mySister = new Person("Anna", "Rally", 18, "green");


// Adding a Property to an Object

myFather.nationality = "English";

// Note:
// The new property will be added to myFather. Not to any other Person Objects.


Adding a Property to a Constructor

// To add a new property, you must add it to the constructor function prototype:

// Example
Person.prototype.nationality = "English";




Built-in JavaScript Constructors

// JavaScript has built-in constructors for all native objects:

// new Object()   // A new Object object
// new Array()    // A new Array object
// new Map()      // A new Map object
// new Set()      // A new Set object
// new Date()     // A new Date object
// new RegExp()   // A new RegExp object
// new Function() // A new Function object




