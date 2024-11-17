

• reduce() method is used when you want to perform some operation 
on the elements of an array and return a single value as a result

• The "single value" refers to the accumulated result of repeatedly
 applying a function to the elements of a sequence.

• Returns Single Value


// Syntax

array.reduce((accumulator, currentValue, index, array) => {
    // Function body
}, initialValue);

// • accumulator: The value that accumulates the results of the function.
// • currentValue: The current element being processed in the array.
// • index: (Optional) The index of the current element.
// • array: (Optional) The array that reduce() is being called on.
// • initialValue: The initial value for the accumulator. 
// If omitted,
//         reduce() will use the first element of the array as the initial value,
//         and start the loop from the second element.



//  Example 1: Using reduce() to sum up all the elements in an array:

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((total, currentValue) => {
    return total + currentValue;
}, 0)

console.log(sum); 
