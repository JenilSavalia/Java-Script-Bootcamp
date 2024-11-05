
// https://www.freecodecamp.org/news/higher-order-functions-in-javascript-explained/

fliter()

• The filter() function takes an array and returns a new array 
with only the values that meet certain criteria. 

• It also does not mutate the original array

• Returns new array


// Examples



// 01) return only the odd numbers from an array of numbers.
const arr = [1, 2, 3, 4, 5];
const output = arr.filter((num) => num % 2) // filter out odd numbers
console.log(arr); // [1, 2, 3, 4, 5]
console.log(output); // [1, 3, 5]



// Example 2: Using filter with Destructuring

const users = [
    {firstName: 'John', lastName: 'Doe', age: 25},
    {firstName: 'Jane', lastName: 'Doe', age: 30},
    {firstName: 'Jack', lastName: 'Doe', age: 35},
    {firstName: 'Jill', lastName: 'Doe', age: 40},
    {firstName: 'Joe', lastName: 'Doe', age: 45},
]

// Find the users with age greater than 30
const output = users.filter(({age}) => age > 30)
console.log(output); 
// [{firstName: 'Jack', lastName: 'Doe', age: 35}, {firstName: 'Jill', lastName: 'Doe', age: 40}, {firstName: 'Joe', lastName: 'Doe', age: 45}]


// NOTE : for object destructuring refer 
//  D:\02 CodingGita\00 Java Script Bootcamp\JS_Objects  