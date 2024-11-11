• Arrow functions in JavaScript are a concise way of writing functions

• They provide a shorter syntax and have different behavior for the "this" keyword compared to regular functions.



// Basic Syntax
const functionName = (parameters) => {
    // function body
    return expression;
};



// Example
const add = (a, b) => {
    return a + b;
};
console.log(add(2, 3)); // Output: 5


//  => Shorthand for Single Expressions
//  If the function body has only a single expression,
// we can omit both the return keyword and the curly braces
// ex : const add = (a, b) => a + b;

------------------------------

    2. Parameters in Arrow Functions

• Single Parameter: If there’s only one parameter, the parentheses around the parameter are optional.

const square = x => x * x;
console.log(square(5)); // Output: 25


• Multiple Parameters: If there are multiple parameters, parentheses are required.

const multiply = (a, b) => a * b;

• No Parameters: If there are no parameters, empty parentheses are required.

const greet = () => console.log("Hello!");
greet(); // Output: Hello!

---------------------------------

    3. this Behavior in Arrow Functions

        => One of the most important differences between arrow functions and regular functions is how they handle the this keyword.

• In Regular Functions
this refers to the object that called the function. If used inside an object method, this refers to the object itself.


    Example :

const person = {
    name: "Alice",
    sayHello: function () {
        console.log("Hello, my name is " + this.name);
    }
};

person.sayHello(); // Output: Hello, my name is Alice
        

• In Arrow Functions
In arrow functions, this does not refer to the object that called the function.

Instead, this in an arrow function refers to the this value of the surrounding
lexical scope(where the function was created).This is known as lexical scoping.

=> No this Binding: Unlike regular functions, arrow functions do not have their own this context.
    Instead, they lexically inherit this from the scope they’re defined in.


    

