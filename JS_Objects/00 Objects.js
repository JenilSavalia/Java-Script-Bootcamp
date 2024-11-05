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
{ firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" }



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
  lastName: "Doe",
  id: 5566,
  fullName: function () {
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
  firstName: "John",
  lastName: "Doe",
  age: 50, eyeColor: "blue"
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
  fullName: function () {
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



How to Display JavaScript Objects ? ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


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
['John', 30, 'New York']

//   ---------------------------------------------------------------------------------------

  Displaying the Object using Object.entries()

// Object.entries creates array of array which includes [key,vlue]


// ex
const person = { name: "John", age: 30, city: "New York" };
console.log(Object.entries(person));

// o/p

[['name', 'John'], ['age', 30], ['city', 'New York']]



// exMPLE

const fruits = { Bananas: 300, Oranges: 200, Apples: 500 };

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




Built -in JavaScript Constructors

// JavaScript has built-in constructors for all native objects:

// new Object()   // A new Object object
// new Array()    // A new Array object
// new Map()      // A new Map object
// new Set()      // A new Set object
// new Date()     // A new Date object
// new RegExp()   // A new RegExp object
// new Function() // A new Function object




__________________________________________________________________________________________________________________________________________________________________________________________________________________



Basic Questions on JS Objects

// 1. **Create a Simple Object**
//    - Task: Create an object representing a person with properties `name`, `age`, and `city`.
//    - Test:
//      ```javascript
//      const person = createPerson("John", 25, "New York");
//      console.log(person);
//      ```
//    - Expected Output: `{ name: 'John', age: 25, city: 'New York' }`



function createPerson(name, age, city) {

  this.name = name,
    this.Age = age,
    this.City = city

}

const Person = new createPerson("Jenil", 18, "BDQ");
console.log(Person)



// 2. **Access Object Properties**
//    - Task: Write a function that returns the value of a given property from an object.
//    - Test:
//      ```javascript
//      const obj = { name: 'Alice', age: 30 };
//      console.log(getProperty(obj, 'name'));
//      ```
//    - Expected Output: `'Alice'`




function getProperty(obj, name) {
  return obj[name];
}

const obj = { name: 'Alice', age: 30 };

console.log(getProperty(obj, 'name'));


// 3. **Add a New Property to an Object**
//    - Task: Write a function that adds a new property to an object.
//    - Test:
//      ```javascript
//      const car = { brand: 'Toyota', model: 'Corolla' };
//      addProperty(car, 'year', 2020);
//      console.log(car);
//      ```
//    - Expected Output: `{ brand: 'Toyota', model: 'Corolla', year: 2020 }`



function addProperty(obj, property, value) {
  obj[property] = value;
}

const car = { brand: 'Toyota', model: 'Corolla' };

addProperty(car, 'year', 2020);
console.log(car);


// 4. **Delete a Property from an Object**
//    - Task: Write a function that deletes a property from an object.
//    - Test:
//      ```javascript
//      const user = { username: 'john_doe', password: '12345' };
//      deleteProperty(user, 'password');
//      console.log(user);
//      ```
//    - Expected Output: `{ username: 'john_doe' }`


function deleteProperty(obj, property) {
  delete obj[property];
}

const user = { username: 'john_doe', password: '12345' };

deleteProperty(user, 'password');
console.log(user);



// Note diff b/w obj.prop and obj[prop]

// • delete obj.prop uses dot notation, which means it will delete the property named prop (literally "prop") from the object.
// • delete obj[prop] uses bracket notation, which means it will delete the property whose name is stored in the variable prop.




// 5. **Check if an Object has a Property**
//    - Task: Write a function that checks if an object has a specific property.
//    - Test:
//      ```javascript
//      const obj = { name: 'Alice', age: 30 };
//      console.log(hasProperty(obj, 'age'));
//      ```
//    - Expected Output: `true`



function hasProperty(obj, prop) {

  for (let x in obj) {
    if (x == prop) {
      return true;
      count = 1;
      break;
    }
  }

  if (count != 1) {
    return false;
  }
}

const obj = { name: 'Alice', age: 30 };
console.log(hasProperty(obj, 'age'));



// or (with inbuilt function)

function hasProperty(obj, prop) {
  return obj.hasOwnProperty(prop);
}

const obj = { name: 'Alice', age: 30 };
console.log(hasProperty(obj, 'age'));


// 6. **Merge Two Objects**
//  - Task: Write a function that merges two objects into one.
//  - Test:
//    ```javascript
//    const obj1 = { a: 1, b: 2 };
//    const obj2 = { b: 3, c: 4 };
//    console.log(mergeObjects(obj1, obj2));
//    ```
//  - Expected Output: `{ a: 1, b: 3, c: 4 }`


function mergeObjects(obj1, obj2) {

  for (let [key, value] of Object.entries(obj2)) {

    obj1[key] = value;

  }
  return obj1;
}

var obj1 = { a: 1, b: 2 };
var obj2 = { b: 3, c: 4 };

console.log(mergeObjects(obj1, obj2));


// 7. **Clone an Object**
//    - Task: Write a function that creates a deep clone of an object.
//    - Test:
//      ```javascript
//      const original = { name: 'Alice', details: { age: 30, city: 'NYC' } };
//      const clone = cloneObject(original);
//      clone.details.city = 'LA';
//      console.log(original.details.city);
//      console.log(clone.details.city);
//      ```
//    - Expected Output:
//      ```
//      'NYC'
//      'LA'
//      ```




function cloneObject(obj) {
  return structuredClone(obj);
}

const original = { name: 'Alice', details: { age: 30, city: 'NYC' } };

const clone = cloneObject(original);

clone.details.city = 'LA';
console.log(original.details.city);
console.log(clone.details.city);



// 8. **Loop Through Object Properties**
//    - Task: Write a function that loops through all the properties of an object and prints them.
//    - Test:
//      ```javascript
//      const user = { name: 'John', age: 30, city: 'New York' };
//      printProperties(user);
//      ```
//    - Expected Output:
//      ```
//      name: John
//      age: 30
//      city: New York
//      ```


function printProperties(obj) {
  let result = "";

  for (let [key, value] of Object.entries(obj)) {

    result += key + " : " + value + "\n";
  }
  return result;
}


// const user = { name: 'John', age: 30, city: 'New York' };
//      console.log(printProperties(user));


//      9. **Count the Number of Properties in an Object**
//      - Task: Write a function that counts the number of properties in an object.
//      - Test:
//        ```javascript
//        const obj = { name: 'Alice', age: 30, city: 'NYC' };
//        console.log(countProperties(obj));
//        ```
//      - Expected Output: `3`


function countProperties(object) {
  let count = 0;

  for (let [key, value] of Object.entries(obj)) {

    count++;
  }
  return count;
}

const obj = { name: 'Alice', age: 30, city: 'NYC' };
console.log(countProperties(obj));



//  10. **Convert Object to Array of Keys**
//  - Task: Write a function that converts an object to an array of its keys.
//  - Test:
//    ```javascript
//    const obj = { name: 'Alice', age: 30, city: 'NYC' };
//    console.log(objectKeysToArray(obj));
//    ```
//  - Expected Output: `['name', 'age', 'city']`


function objectKeysToArray(object) {
  let array = [];

  for (let [key, value] of Object.entries(obj)) {

    array.push(key);
  }
  return array;
}

const obj = { name: 'Alice', age: 30, city: 'NYC' };
console.log(objectKeysToArray(obj));



// 11. **Convert Object to Array of Values**
//     - Task: Write a function that converts an object to an array of its values.
//     - Test:
//       ```javascript
//       const obj = { name: 'Alice', age: 30, city: 'NYC' };
//       console.log(objectValuesToArray(obj));
//       ```
//     - Expected Output: `['Alice', 30, 'NYC']`




function objectValuesToArray(object) {
  let array = [];

  for (let [key, value] of Object.entries(obj)) {

    array.push(value);
  }
  return array;
}

const obj = { name: 'Alice', age: 30, city: 'NYC' };
console.log(objectValuesToArray(obj));





// 12. **Convert an Array of Objects to a Single Object**
//     - Task: Write a function that converts an array of objects into a single object.
//      Assume each object in the array has a unique `key` property.
//     - Test:
//       ```javascript
//       const arr = [{ key: 'a', value: 1 }, { key: 'b', value: 2 }];
//       console.log(arrayToObject(arr));
//       ```
//     - Expected Output: `{ a: 1, b: 2 }`


function arrayToObject(array) {
  const object = {};
  for (i = 0; i < array.length; i++) {

    object[array[i].key] = array[i].value;

  }

  return object;
}

const arr = [{ key: 'a', value: 1 }, { key: 'b', value: 2 }];
console.log(arrayToObject(arr));



// 13. **Group Objects by a Property**
// - Task: Write a function that groups an array of objects by a specific property.
// - Test:
//   ```javascript
//   const users = [
//     { name: 'Alice', age: 30 },
//     { name: 'Bob', age: 20 },
//     { name: 'Charlie', age: 30 }
//   ];
//   console.log(groupBy(users, 'age'));
//   ```
// - Expected Output:
//   ```javascript
//   {
//     20: [{ name: 'Bob', age: 20 }],
//     30: [{ name: 'Alice', age: 30 }, { name: 'Charlie', age: 30 }]
//   }
//   ```



















// 14. **Find the Object with the Maximum Value of a Property**
//     - Task: Write a function that finds the object with the maximum value of a given property in an array of objects.
//     - Test:
//       ```javascript
//       const users = [
//         { name: 'Alice', age: 30 },
//         { name: 'Bob', age: 20 },
//         { name: 'Charlie', age: 35 }
//       ];
//       console.log(findMax(users, 'age'));
//       ```
//     - Expected Output: `{ name: 'Charlie', age: 35 }`



function findMax(array, prop) {


  let max = array[0][prop];
  let output;
  for (i = 0; i < array.length; i++) {

    if (array[i][prop] > max) {
      max = array[i][prop];
      output = array[i];
    }

  }
  return output;
}

const users = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 20 },
  { name: 'Charlie', age: 35 }
];


console.log(findMax(users, 'age'));


// 15. **Sum the Values of a Specific Property in an Array of Objects**
//     - Task: Write a function that sums the values of a specific property in an array of objects.
//     - Test:
//       ```javascript
//       const items = [
//         { name: 'item1', price: 10 },
//         { name: 'item2', price: 15 },
//         { name: 'item3', price: 20 }
//       ];
//       console.log(sumProperty(items, 'price'));
//       ```
//     - Expected Output: `45`


function sumProperty(array, prop) {


  let max = 0;
  for (i = 0; i < array.length; i++) {
    max += array[i][prop];
  }
  return max;
}


const items = [
  { name: 'item1', price: 10 },
  { name: 'item2', price: 15 },
  { name: 'item3', price: 20 }
];
console.log(sumProperty(items, 'price'));