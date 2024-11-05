

• Object destructuring is a concise way to extract values from an object and assign them to variables.

• Instead of accessing each property individually,
destructuring lets you directly pull specific properties into variables with a single line of code.



// Suppose you have an object:
const user = { firstName: 'John', lastName: 'Doe', age: 25 };


// Using destructuring, you can extract values like this:
const { firstName, age } = user;
console.log(firstName); // Output: 'John'
console.log(age);       // Output: 25


//  { firstName, age } is the destructuring syntax.
//  It pulls the firstName and age properties directly from user.
//  You don't need to write user.firstName or user.age; it’s done automatically.