// Beginner Friendly Questions



// Q20. **Flatten a Nested Array**  
//     - Task: Write a function that flattens a nested array (an array of arrays) into a single array.  

// let array = [1, [2, 3], [4, [5, 6]]];

// function flattenArray(array){
// console.log(array.flat(2))

// }flattenArray(array)


// Q21. **Generate a Random Number within a Range** 


// function getRndInteger(min, max) {
//     console.log(Math.floor(Math.random() * (max - min) ) + min)
//   }

//   getRndInteger(0, 100)




// Q22. **Check if a String is a Valid Email**  


// Test Method
// The test() method tests for a match in a string.
// If it finds a match, it returns true, otherwise it returns false.




// let string = 'jenil9642@mail.com'
// function isValidEmail(string) {
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     console.log(regex.test(string))


// }
// isValidEmail(string)


/*

Explanation: CHAT GPT
^[^\s@]+: Ensures the email starts with one or more characters that are not spaces or "@".
@[^\s@]+\.: Matches the "@" symbol followed by one or more characters that are not spaces or "@" and then a dot.
[^\s@]+$: Ensures the email ends with one or more characters that are not spaces or "@" (typically a domain extension like .com)

*/


// Q23. **Convert Celsius to Fahrenheit**
// let Celsius = 0;

// function celsiusToFahrenheit(Celsius){
//     let Fahrenheit = (Celsius*(9/5)) + 32
//     console.log(Fahrenheit)
// }celsiusToFahrenheit(Celsius)


// Q24. **Remove a Specific Element from an Array**  
//     - Task: Write a function that removes a specific element from an array.  
// let array = [1, 2, 3, 4, 5]
// let element = 3;
// function removeElement(array, element){

//     let index = array.indexOf(element)
//     array.splice(index, 1)
//     console.log(array)

// }removeElement(array, element)


// Q25. **Find the Second Largest Number in an Array**  
// let array = [1, 2, 333, 4, 5, 55, 44];
// function secondLargest(array) {
//     let max1 = 0;
//     let max2 = 0;



// }
// secondLargest(array)




// Q27. **Find the Missing Number in an Array**  
//     - Task: Write a function that finds the missing number in a sequence from 1 to n.  

// let array = [1, 2, 4, 5, 6,8];

// function findMissingNumber(array) {
//     for (i = array[0]; i <= array[array.length - 1]; i++) {
//         if (!array.includes(i)) {
//             console.log(i)

//         }

//     }

// } findMissingNumber(array)


// Q28. **Calculate the GCD of Two Numbers**  
// let num1 = 12;
// let num2 = 18;


// function gcd(num1, num2) {
//     let arr1 = [];
//     let arr2 = [];
//     for (i = 0; i <= num1; i++) {

//         if (num1 % i == 0) {
//             arr1.push(i)
//         }
//     }

//     for (i = 0; i <= num2; i++) {
//         if (num2 % i == 0) {
//             arr2.push(i)
//         }
//     }


//     let final_array = [];
//     for (i = 0; i < arr1.length; i++) {

//         if (arr1.includes(arr2[i])) {
//             final_array.push(arr2[i])
//         }

//     }
//     console.log(final_array[final_array.length - 1])

// }
// gcd(num1, num2)

// Q29. **Calculate the LCM of Two Numbers**
//     - Task: Write a function that calculates the least common multiple (LCM) of two numbers.






// Q30. **Check for Balanced Parentheses**  
// - Task: Write a function that checks if a string has balanced parentheses.



// let string = "((Hello))"
// function isBalanced(strings) {
//     let count = 0
//     for (i = 0; i < strings.length; i++) {

//         if (/[\{\[\(]/g.test(strings[i])) {
//             count = count + 1

//         }
//         if (/[\}\)\]]/g.test(strings[i])) {
//             count = count + (-1)
//         }
//     }

//     if (count == 0) {
//         console.log(true)
//     }
//     else { console.log(false) }
// }
// isBalanced(string)


// ~~ Above Code in not fully optimised
// Handling Mismatched Parentheses: The current logic checks the overall balance of parentheses but doesn’t handle mismatched closing parentheses that occur before opening ones. For instance, a string like ")(" would incorrectly be marked as balanced.


// 31. **Rotate an Array**  
//     - Task: Write a function that rotates an array by k steps.






















// String Questions


// Q1
// let reverseString = "hello"
// let temp = ""
// for(i=reverseString.length-1;i>=0;i--){
//    temp = temp + reverseString[i]
// }
// console.log(temp)


// Q2
// let palindrome = "nayan"
// let temp = ""
// for(i=palindrome.length-1;i>=0;i--){
//    temp = temp + palindrome[i]
// }
// if(temp==palindrome){
//     console.log(true)
// }
// else{
//     console.log(false)
// }


// Q3
// let string = "hello world"
// let count = 0

// for (i = string.length - 1; i >= 0; i--) {
//     if (string[i] == 'a' || string[i] == 'e' || string[i] == 'i' || string[i] == 'o' || string[i] == 'u')
//         count = count + 1
// }
// console.log(count)


// Q4
// let string = "swiss"

// for (i = 0; i < string.length - 1; i++) {

//     for (j = i + 1; j<string.length; j++) {
//         let temp = "";
//         if (string[i] == string[j]) {
//             j = string.length+2

//         }
//         else{
//             temp = false
//         }
//         if(temp==false){
//             console.log(string[i])
//         }
//     }


// }


// Q5
// countWords = "This is a test string jenil";
// let count = 0;
// for (i = 0; i < countWords.length; i++) {
//     if (countWords[i] == " ") {
//         count = count + 1
//     }
// }
// console.log("Total no of Character = ",count+1)


// Q6
// let str1 = "lisen"
// let str2 = "silent"
// let str1_arr = Array.from(str1).sort()
// let str2_arr = Array.from(str2).sort()
// let count = true;
// for(i=0;i<str1.length;i++){
//     if(str1_arr[i]==str2_arr[i]){

//     }
//     else{count = false}
// }
// console.log(count)

// Source : https://www.w3schools.com/js/js_array_sort.asp


// Q7

// Method_1
// hyphens = "This is a test string jenil";
// let str = ""
// for (i = 0; i < hyphens.length; i++) {
//     if (hyphens[i] == " ") {
//         str = str + "-"
//     }
//     else{
//         str = str + hyphens[i]
//     }
// }
// console.log(str)

// Method_2
// let hyphens = "This is a test string jenil";
// let x = hyphens.replace(/ /g,"-")
// console.log(x)

// Method 2 CHAT_GPT : Using the replace Method with a Regular Expression
// let hyphens = "This is a test string jenil";
// let newString = hyphens.replace(/t/g, "@");



// Q8


// There are 3 methods for extracting a part of a string:

// slice(start, end)
// substring(start, end)
// substr(start, length)


// let toTitleCase = "this is a test string jenil";
// let str = toTitleCase.split(" ")

// let temp = ""

// for (i = 0; i < str.length; i++) {

//     temp = temp + (str[i])[0].toUpperCase() + str[i].slice(1) + " "

// }

// console.log(temp)



// Q9
// Task: Write a function that checks if a string contains only numeric digits.
// let string = "123a5"
// if(string == string.replace(/[^1-9]/g,"")){
//     console.log(true)
// }
// else{console.log(false)}

// let result = string.replace(/[^1-9]/g,"")

// Take Reference for RegExp : https://www.w3schools.com/jsref/jsref_regexp_charset.asp


// Q10. **Remove Duplicates Characters from a String**


// Q11. **Find the Longest Word in a String**

// let string = "The quick brown fox jumped over the lazy dog"
// let ary = string.split(" ")
// let max = 0;
// function findLongestWord(ary) {
//     for (i = 0; i < ary.length; i++) {


//         if (ary[i].length > max) {
//             max = ary[i].length
//         }

//     }
//     for (i = 0; i < ary.length; i++) {

//         if (ary[i].length == max) {
//             console.log(ary[i])
//         }
//     }
// }findLongestWord(ary)




// Q12 Same as Q8



// Q13  **Repeat a String N Times**
// let temp = "";
// let n = 3;
// let string = "abc";
// function repeatString(temp,n,string){
//     for (i = 0; i < 3; i++) {
//         temp = temp + string
//     }
//     console.log(temp)
// }
// repeatString(temp,n,string)



// NOTE :  CONVERTING STRING TO ARRAY
// let stringToWords = "This is a test"
// let xxx = Array.from(stringToWords)
// console.log(xxx)

// let x1 = stringToWords.split("")
// console.log(x1)

// let x2 = stringToWords.split(" ")
// console.log(x2)




// Q14. **Check if a String Contains a Substring**

// My Method _ 1
// let string_ = "world hello";
// let sub_string_ = "world";

// let string = string_.split(" ")
// let sub_string = sub_string_.split(" ")
// let temp = "";


// for (i = 0; i < string.length; i++) {

//     if (string[i] == sub_string[0]) {
//         temp = true
//         break;
//     }
//     else(temp = false)

// }
// console.log(temp)



// Method_2

// let string_ = "hello world";
// let sub_string_ = "world";

// let temp = false;

// for (let i = 0; i < string_.length; i++) {

//     if (string_.substring(i, i + sub_string_.length) === sub_string_) {

//         temp = true;
//         break;
//     }
// }
// console.log(temp);



// Method_3

// let string_ = "hello world";
// let sub_string_ = "world";

// let temp = string_.includes(sub_string_);

// console.log(temp);


// Q15. **Convert a String to an Array of Words**


// Method_1
// let string = "This is a test";
// function stringToArray(string){

//     console.log(string.split())
// }stringToArray(string)



// Q16. **Truncate a String**
// Task: Write a function that truncates a string to a specified length and adds "..." at the end.
// let string = "This is a long string"
// let num = 10;
// let temp = ""
// function Truncate(string, num) {

//     for (i = 0; i < num; i++) {
//         temp = temp + string[i]
//     }
//     temp = temp + "..."
//     console.log(temp);

// }Truncate(string, num)


// Q18. **Check if a String Ends with a Specific Substring**
// let string ="hello world";
// function endsWith(string){
// console.log(string.endsWith("world"))
// }
// endsWith(string)

// Q19. **Insert a Substring at a Specific Position in a String**
// - Task: Write a function that inserts a substring at a specific position in a string.

// let string = "Hello World";
// let add = "Beautiful";
// let index = 6;
// let final = "";
// function insertSubstring(string, add, index) {

//     for (i = 0; i <index-1; i++) {
//         final = final + string[i]
//     }

//     final =  final +" " +  add + " "

//     for (i = index; i <string.length ; i++) {
//         final = final +  string[i]
//     }
//     console.log(final)
// }
// insertSubstring(string, add, index)



// --------------------------------------------------Array Questions-------------------------------------------------------------


// Q1. **Sum All Elements in an Array**

// let array = [1, 2, 3, 4, 5];
// let count = 0;
// function sumArray(array,count){
//     for(i=0;i<array.length;i++){
//         count = count + array[i]
//     }
//     console.log(count)
// }
// sumArray(array,count)


// Q2. **Find the Largest Number in an Array**

// let array = [1, 2, 3, 4, 5,100];
// let max = 0;
// function sumArray(array,max){
//     for(i=0;i<array.length;i++){
//         if(max<array[i]){
//             max = array[i]
//         }
//     }
//     console.log(max)
// }
// sumArray(array,max)


// Q3. **Find the Smallest Number in an Array**

// let array = [1, 2, 3, 4, 5,100,-2];
// let min = 0;
// function sumArray(array,min){
//     for(i=0;i<array.length;i++){
//         if(min>array[i]){
//             min = array[i]
//         }
//     }
//     console.log(min)
// }
// sumArray(array,min)


// Q4. **Sort an Array in Ascending Order** __  Ascending Order    .sort((a,b)=> a-b)

// let array = [1, 2, 3, 4, 5,100,-2];

// function sortArray(array){
//  array.sort((a,b)=> a-b)
// console.log(array)
// }
// sortArray(array)


// Q5. **Sort an Array in Descending Order**                   Descending Order    .sort((a,b)=> b-a)

// let array = [1, 2, 3, 4, 5,100,-2];

// function sortArray(array){
//  array.sort((a,b)=> b-a)
// console.log(array)
// }
// sortArray(array)



// Q6. **Reverse an Array**

// let array = [1, 2, 3, 4, 5,100,-2];
// let new_ar = [];
// function reverseArray(array){
// for(i=array.length-1;i>=0;i--){
// new_ar.push(array[i])
// }
// console.log(new_ar)
// }
// reverseArray(array)


// Q7. **Check if an Array Contains a Specific Element**

// let array = [1, 2, 3, 4, , 100, -2];
// let element = 5;
// function containsElement(array, element) {
//     let check = false
//     for (i = 0; i < array.length; i++) {
//         if (array[i] == element) {
//             check = true
//             console.log(check);
//             break;
//         }
//     }
//     if (check != true) { console.log(check); }

// }

// containsElement(array, element)


// Q8. **Find the Index of a Specific Element in an Array**

// let array = [1, 2, 3, 4,5 , 100, -2];
// let element = 5;
// function findIndex(array,element){
//     console.log(array.indexOf(element))
// }
// findIndex(array,element)

// Q9. **Remove Duplicates from an Array**

// let array = [1, 2, 2, 3, 4, 4, 5]
// let arr = [];


// // METHOD _1  (INCLUDE method)

// function removeDuplicates(array, arr) {

//     for (i = 0; i < array.length; i++) {

//         if (!arr.includes(array[i])) {
//             arr.push(array[i])
//         }

//     }
//     console.log(arr)

// } removeDuplicates(array, arr)


// // METHOD _2

// let array = [1, 2, 2, 3, 4, 4, 5];
// let arr = [];

// function removeDuplicates(array, arr) {
//     for (let i = 0; i < array.length; i++) {
//         let isDuplicate = false;

//         // Check if the element is already in arr
//         for (let j = 0; j < arr.length; j++) {
//             if (array[i] === arr[j]) {
//                 isDuplicate = true;
//                 break; // Exit the loop if a duplicate is found
//             }
//         }

//         // If no duplicate found, add the element to arr
//         if (!isDuplicate) {
//             arr.push(array[i]);
//         }
//     }

//     console.log(arr);
// }

// removeDuplicates(array, arr);



// Q10. **Merge Two Arrays**

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let array = [];

// function mergeArrays(arr1,arr2,array){
//     for(i=0;i<arr1.length;i++){
//         array.push(arr1[i])
//     }
//     for(i=0;i<arr2.length;i++){
//         array.push(arr2[i])
//     }
//     console.log(array)
// }
// mergeArrays(arr1,arr2,array)


// Q11. **Find the Intersection of Two Arrays**

// let arr1 = [1, 2, 3];
// let arr2 = [2, 3, 4];
// let array = [];

// function findIntersection(arr1, arr2) {
//     for (i = 0; i < arr1.length; i++) {

//         if (arr2.includes(arr1[i])) {
//             array.push(arr1[i])
//         }

//     }

//     console.log(array)
// }
// findIntersection(arr1, arr2)


// Q12. **Find the Union of Two Arrays**


// Method_1

// let arr1 = [1, 2, 3];
// let arr2 = [2, 3, 4];
// let array = [];
// let array_fi = []
// function findIntersection(arr1, arr2, array) {
//     for (i = 0; i < arr1.length; i++) {
//         array.push(arr1[i])
//     }
//     for (i = 0; i < arr2.length; i++) {
//         array.push(arr2[i])
//     }


//     for (i = 0; i < array.length; i++) {
//         if (!array_fi.includes(array[i])){
//             array_fi.push(array[i])
//         }
//     }
//     console.log(array_fi)
// }
// findIntersection(arr1, arr2, array)


// Method_2

// let arr1 = [1, 2, 3];
// let arr2 = [2, 3, 4];
// let array = [];

// function findUnion(arr1, arr2) {
//     // Add all elements from arr1 to array
//     for (let i = 0; i < arr1.length; i++) {
//         if (!array.includes(arr1[i])) {
//             array.push(arr1[i]);
//         }
//     }

//     // Add only elements from arr2 that are not already in array
//     for (let i = 0; i < arr2.length; i++) {
//         if (!array.includes(arr2[i])) {
//             array.push(arr2[i]);
//         }
//     }

//     console.log(array);
// }

// findUnion(arr1, arr2);


// Q13. **Check if an Array is Sorted**
// let array = [1, 2, 3, 5, 4];
// let sortedArray = [...array].sort((a, b) => a - b); // Create a sorted copy of the original array

// function isSorted(array) {
//     let check = true;
//     for (i = 0; i < array.length; i++) {
//         if (array[i] != sortedArray[i]) {

//             check = false;
//             // console.log(check)
//             break;
//         }
//         else {
//             check = true;
//         }
//     }
// console.log(check)
// }
// isSorted(array)



// Q14. **Find the Difference of Two Arrays**
// - Task: Write a function that returns the difference of two arrays (elements in the first array that are not in the second array).


// let arr1 = [1, 2, 3];
// let arr2 = [2, 3, 4];
// let arr = [];
// function findDifference(arr1, arr2,arr) {
//     for (i = 0; i < arr1.length; i++) {
//         if (!arr1.includes(arr2[i])) {
//             arr.push(arr2[i])
//         }
//     }
// console.log(arr)
// }findDifference(arr1, arr2,arr)



// Object Questions

// Q1. **Create a Simple Object**
//    - Task: Create an object representing a person with properties `name`, `age`, and `city`.

// function createPerson(name, age, city) {
//     return {
//         name: name,
//         age: age,
//         city: city
//     };
// }

// const person = createPerson("Js", 18, "AMD");
// console.log(person);



// Q2. **Access Object Properties**
//    - Task: Write a function that returns the value of a given property from an object.
// const obj = { name: 'Alice', age: 30 };

// function getProperty(obj,property){
// console.log(obj[property]);

// }
// getProperty(obj,'name')

// Q3. **Add a New Property to an Object**

// const car = { brand: 'Toyota', model: 'Corolla' };
// function addProperty(obj, new_key,value){

// car[new_key] = value
// console.log(car)
// }
// addProperty(car, 'year', 2020)


// Q4. **Delete a Property from an Object**
//    - Task: Write a function that deletes a property from an object.

// const user = { username: 'john_doe', password: '12345' };

// function deleteProperty(Object,property_delete){
//     delete Object[property_delete];
//     console.log(user)
// }
// deleteProperty(user,'password')


// Q5. **Check if an Object has a Property**
//    - Task: Write a function that checks if an object has a specific property.


// Method_1

// const obj = { name: 'Alice', age: 30 };
// function hasProperty(object,prop){

//     console.log(prop in object);
// }
// hasProperty(obj, 'age')

// Method_2
// const obj = { name: 'Alice', age: 30 };
// function hasProperty(object,prop){

//     console.log(object.hasOwnProperty(prop));
// }
// hasProperty(obj,'age')



// Q6. **Merge Two Objects**
//    - Task: Write a function that merges two objects into one.

// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4 };


// // Object spread syntax method

// function mergeObjects(obj1, obj2){

//     var obj = {...obj1,...obj2};
//     console.log(obj)
// }
// mergeObjects(obj1, obj2)




// // Object.assign() method
// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4 };
// // Object spread syntax method

// function mergeObjects(obj1, obj2){

//     const mergedObject = Object.assign(obj1, obj2);
//     console.log(mergedObject)
// }
// mergeObjects(obj1, obj2)


// Q7. **Clone an Object**
// - Task: Write a function that creates a deep clone of an object.

// 1. Shallow Copy:
// A shallow copy of an object is a copy of the original object where only the top-level properties are duplicated. If the original object contains references to other objects (like arrays or other objects), the references themselves are copied, not the objects they point to.
// This means that changes to nested objects in the copied object will also affect the original object.


// Shallow Copying Objects

// // Cloning the Object with Spread Operator
// let cloneUser = { ...userDetails };

// // changing the value of cloneUser
// cloneUser.name = "Jane Doe"

// console.log(cloneUser.name); // 'Jane Doe'
// console.log(cloneUser); // {name: 'Jane Doe', age: 14, verified: false}



// 2. Deep Copy:
// A deep copy creates a completely independent copy of the original object, including all nested objects. This means that changes to the copied object do not affect the original object and vice versa.
// A deep copy is more complex because it requires recursively copying all nested objects.


// ------------------------------------------------------------------

// let original = { a: 1, b: { c: 2 } };

// // Deep copy using JSON methods
// let deepCopy = JSON.parse(JSON.stringify(original));

// deepCopy.b.c = 3;  // Modify the nested object in the deep copy

// console.log(original.b.c);  // Output: 2 (original object is not affected)

// ------------------------------------------------------------------


// Q8. **Loop Through Object Properties**
//    - Task: Write a function that loops through all the properties of an object and prints them.

// const user = { name: 'John', age: 30, city: 'New York' };

// function iterateObject(object) {

//     for (let key in object) {
//         value = user[key]
//         console.log(key,":",value)
//     }

// }
// iterateObject(user)



// Q9. **Count the Number of Properties in an Object**
//    - Task: Write a function that counts the number of properties in an object.


// function countProperties(obj) {
//     return Object.keys(obj).length;
// }

//Object.keys() returns an array of the property names (keys) in the object.

// const exampleObject = {
//     name: 'Alice',
//     age: 30,
//     city: 'New York'
// };

// console.log(countProperties(exampleObject)); 



// Q10. **Convert Object to Array of Keys**

// const obj = { name: 'Alice', age: 30, city: 'NYC' };

// function objectKeysToArray(myobject){

//    let array =  Object.keys(myobject)
//    console.log(array)
// }
// objectKeysToArray(obj)



// Q11. **Convert Object to Array of Values**
// - Task: Write a function that converts an object to an array of its values.

// const obj = { name: 'Alice', age: 30, city: 'NYC' };

// function objectToArray(object) {
//     console.log(Object.values(object));
// }
// objectToArray(obj)

// // Object.values(obj) returns an array of the values of the object's properties.
// // This array can be directly used or further manipulated as needed.

