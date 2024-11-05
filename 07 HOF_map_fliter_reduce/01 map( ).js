


// https://www.freecodecamp.org/news/higher-order-functions-in-javascript-explained/

Map()

• The map() function takes an array of values and applies a transformation to each value in the array.

•It does not mutate the original array. 

• Returns new array

// Examples

// 01) add 10 to every element in a array

const arr = [1, 2, 3, 4, 5];
const output = arr.map((num) => num += 10)
console.log(arr); // [1, 2, 3, 4, 5]
console.log(output); // [11, 12, 13, 14, 15]


// for reference (without arrow function)
const arr = [1, 2, 3, 4, 5];
const output = arr.map(function(num) {
    return num += 10;
});





// 02) We have an array of users. Suppose we only want their first and last name

const users = [
    {firstName: 'John', lastName: 'Doe', age: 25},
    {firstName: 'Jane', lastName: 'Doe', age: 30},
    {firstName: 'Jack', lastName: 'Doe', age: 35},
    {firstName: 'Jill', lastName: 'Doe', age: 40},
    {firstName: 'Joe', lastName: 'Doe', age: 45},
]

const result = users.map((user) => user.firstName + ' ' + user.lastName)
console.log(result); // ['John Doe', 'Jane Doe', 'Jack Doe', 'Jill Doe', 'Joe Doe']



// 03 Using map with Destructuring

const users = [
    { firstName: 'John', lastName: 'Doe', age: 25 },
    { firstName: 'Jane', lastName: 'Doe', age: 30 },
    { firstName: 'Jack', lastName: 'Smith', age: 35 }
];

const fullNames = users.map(({ firstName, lastName }) => `${firstName} ${lastName}`);
console.log(fullNames); // Output: ['John Doe', 'Jane Doe', 'Jack Smith']
