Java Script Arrays

const cars = ["Saab", "Volvo", "BMW"];



• Converting an Array to a String

// The JavaScript method toString() converts an array to a string of (comma separated) array values.

// eg
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let str = fruits.toString();





Arrays are Objects
Arrays are a special type of objects.
 The typeof operator in JavaScript returns "object" for arrays.




• The length Property

// The length property of an array returns the length of an array (the number of array elements).

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.length;


• Array.forEach()----------

    The Array.forEach() method in JavaScript is used to execute a provided function once for each element in an array.




// Example 1: Basic Usage
// const array = [1, 2, 3, 4];

// array.forEach((element) => {
//   console.log(element);
// });

// Output:
// 1
// 2
// 3
// 4




The Difference Between Arrays and Objects ????????????

    In JavaScript, arrays use numbered indexes.  
In JavaScript, objects use named indexes.




----------------------------------------------------JavaScript Array Methods---------------------------------------------------------------------





    Array.length
Array.toString()
Array.at()
Array.join()
Array.pop()
Array.push()
Array.shift()
Array.unshift()
Array.delete()
Array.concat()
Array.copyWithin()
Array.flat()
Array.splice()
Array.toSpliced()
Array.slice()


• JavaScript Array length

// The length property returns the length (size) of an array:



• JavaScript Array toString()

// The JavaScript method toString() converts an array to a string of (comma separated) array values.

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
let temp = fruits.toString();





• JavaScript Array at()

// The at() method returns an indexed element from an array.

// The at() method returns the same as [].



• JavaScript Array join()

// The join() method also joins all array elements into a string.

It behaves just like toString(), but in addition you can specify the separator

// Example
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.join(" * ");
// Banana * Orange * Apple * Mango


// *******************************************************************************


Popping and Pushing

    => Popping items out of an array, or pushing items into an array.



• JavaScript Array pop()

The pop() method removes the last element from an array

// Example
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();

// note : The pop() method returns the value that was "popped out":




• JavaScript Array push()

The push() method adds a new element to an array(at the end)


// Example
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");


// note : The push() method returns the new array length



Shifting Elements

    => Shifting is equivalent to popping, but working on the first element instead of the last.



• JavaScript Array shift()

The shift() method removes the first array element and "shifts" all other elements to a lower index.

    // Example
    // const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.shift();


    // note: The shift() method returns the value that was "shifted out"




• JavaScript Array unshift()

The unshift() method adds a new element to an array(at the beginning), and "unshifts" older elements:

// Example
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");

// note : The unshift() method returns the new array length



***************************************************



• JavaScript Array delete ()


// Warning !
// Using delete() leaves undefined holes in the array.
// Use pop() or shift() instead.

Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0];




• JavaScript Array concat()


The concat() method creates a new array by merging(concatenating) existing arrays:


// Example (Merging Two Arrays)
// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys);


Note
    => The concat() method does not change the existing arrays.It always returns a new array.
    => The concat() method can take any number of array arguments.






• Array copyWithin()

The copyWithin() method copies array elements to another position in an array:


// Example
Copy to index 2, all elements from index 0:
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.copyWithin(2, 0);
// o/p Banana,Orange,Banana,Orange

// Example
Copy to index 2, the elements from index 0 to 2:
// const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Papaya"];
fruits.copyWithin(2, 0, 2);
// o/p Banana,Orange,Banana,Orange,Kiwi,Papaya


// Note
//     => The copyWithin() method overwrites the existing values.
//     =>The copyWithin() method does not add items to the array.
//     =>The copyWithin() method does not change the length of the array.



• JavaScript Array flat()

const myArr = [[1, 2], [3, 4], [5, 6]];
const newArr = myArr.flat();
// o/p 1,2,3,4,5,6



***********************************************************************


    Splicing and Slicing Arrays

        => The splice() method adds new items to an array.
        => The slice() method slices out a piece of an array.




• JavaScript Array splice()

The splice() method can be used to add new items to an array


// array.splice(start, deleteCount, item1, item2, ...)


// Example
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");

=> The first parameter(2) defines the position where new elements should be added(spliced in).
=> The second parameter(0) defines how many elements should be removed.
=> The rest of the parameters("Lemon", "Kiwi") define the new elements to be added.





1. Remove elements:
You can remove elements by specifying the start index and the number of elements to remove(deleteCount).

let fruits = ['Apple', 'Banana', 'Mango', 'Orange'];
fruits.splice(1, 2);  // Removes 2 elements starting at index 1 ('Banana' and 'Mango')
console.log(fruits);  // Output: ['Apple', 'Orange']


2. Add elements:
You can add elements by specifying the start index, deleteCount as 0, and then the elements to add.

let fruits = ['Apple', 'Banana', 'Orange'];
fruits.splice(2, 0, 'Mango', 'Grapes');  // Adds 'Mango' and 'Grapes' at index 2
console.log(fruits);  // Output: ['Apple', 'Banana', 'Mango', 'Grapes', 'Orange']





• JavaScript Array slice()
// The slice() method slices out a piece of an array into a new array:

// Example
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1);
// o/p Orange,Lemon,Apple,Mango

Note
The slice() method creates a new array.

The slice() method does not remove any elements from the source array.


*****

    The slice() method can take two arguments like slice(1, 3).
The method then selects elements from the start argument, and up to(but not including) the end argument.



*****************************************************************



• JavaScript Array find()


The find() method in JavaScript is used to search an array and return the first element
that satisfies a provided condition(callback function).
 
If no element satisfies the condition, it returns undefined.


    // Syntax:
    // array.find(callback(element, index, array), thisArg)

    Parameters:

callback: A function that is executed on each element of the array. 

It takes three arguments:
• element: The current element being processed.
• index(optional): The index of the current element.
• array(optional): The array on which find() was called.
• thisArg(optional): Value to use as this when executing the callback.


Return value:
Returns the first element in the array that satisfies the provided testing function. 
If no elements satisfy the condition, it returns undefined.


// Example

// const numbers = [4, 9, 16, 25, 29];
// let first = numbers.find(myFunction);

// function myFunction(value, index, array) {
//   return value > 18;
// }


// This applies the myFunction() to each element of the array. 
// The method will stop once it finds the first number greater than 18, 
// and store that number in the variable first.



// Example 1: Finding an element

const numbers = [5, 12, 8, 130, 44];

const found = numbers.find(num => num > 10);
console.log(found);  // Output: 12




// Example 2: Finding an object in an array

const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];

const user = users.find(user => user.name === 'Bob');
console.log(user);  // Output: { name: 'Bob', age: 30 }






• JavaScript Array findIndex()

The findIndex() method returns the index of the first array element that passes a test function.

This example finds the index of the first element that is larger than 18:



// Example
// const numbers = [4, 9, 16, 25, 29];
// let first = numbers.findIndex(myFunction);

// function myFunction(value, index, array) {
//   return value > 18;
// }



• JavaScript Array findLast() Method

findLast() method that will start from the end of an array and return the value of the first element that satisfies a condition.

// Example
// const temp = [27, 28, 30, 40, 42, 35, 30];
// let high = temp.findLast(x => x > 40);

• JavaScript Array findLastIndex() Method

The findLastIndex() method finds the index of the last element that satisfies a condition.

// Example
// const temp = [27, 28, 30, 40, 42, 35, 30];
// let pos = temp.findLastIndex(x => x > 40);


--***********************************************************************************************************************************

Topics Leftout

array sort
array iteration
array const























































