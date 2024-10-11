// JS Strings

// Note
// Strings created with single or double quotes works the same.
// There is no difference between the two

// let carName1 = "Volvo XC60";  // Double quotes
// let carName2 = 'Volvo XC60';  // Single quotes



Template Strings

// Templates are strings enclosed in backticks (`This is a template string`).


String Length

// let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let length = text.length;

Escape Characters

// let text = "We are the so-called "Vikings" from the north.";

// The string will be chopped to "We are the so-called ".

// To solve this problem, you can use an backslash escape character.

// The backslash escape character (\) turns special characters into string characters

JavaScript Strings as Objects

// Normally, JavaScript strings are primitive values, created from literals:
// let x = "John";

// But strings can also be defined as objects with the keyword new:

// let y = new String("John");



// Note
// Comparing two JavaScript objects always returns false.


JavaScript String Methods--------------------------------------------------------------------------------------------------------------------------------------------


    1) JavaScript String Length
// let length = text.length;


2)Extracting String Characters


// There are 4 methods for extracting string characters:
// • The at(position) Method
// • The charAt(position) Method
// • The charCodeAt(position) Method
// • Using property access [] like in arrays


• JavaScript String charAt()

// The charAt() method returns the character at a specified index (position) in a string:

// let text = "HELLO WORLD";
// let char = text.charAt(0);


• JavaScript String charCodeAt()

// The charCodeAt() method returns the code of the character at a specified index in a string:

// let text = "HELLO WORLD";
// let char = text.charCodeAt(0);

• JavaScript String at()

// The at() method returns the character at a specified index (position) in a string.

// at() allows the use of negative indexes while charAt() do not.
// Now you can use myString.at(-2) instead of charAt(myString.length-2).

NOTE
If no character is found, [] returns undefined,
 while charAt() returns an empty string.





 3) Extracting String Parts



// There are 3 methods for extracting a part of a string:
// • slice(start, end)
// • substring(start, end)
// • substr(start, length)

• JavaScript String slice()

slice() extracts a part of a string and returns the extracted part in a new string.

// The method takes 2 parameters: start position, and end position (end not included).

// Eg
// let text = "Apple, Banana, Kiwi";
// let part = text.slice(7, 13);
// o/p Banana


If you omit the second parameter, the method will slice out the rest of the string:

// let part = text.slice(7);
// o/p  Banana, Kiwi


If a parameter is negative, the position is counted from the end of the string:

// let text = "Apple, Banana, Kiwi";
// let part = text.slice(-4);
// o/p  Kiwi



• JavaScript String substring()

substring() is similar to slice().
The difference is that start and end values less than 0 are treated as 0 in substring().


// If you omit the second parameter, substr() will slice out the rest of the string.

// Example
// let str = "Apple, Banana, Kiwi";
// let part = str.substr(7);



• JavaScript String substr()

substr() is similar to slice().

The difference is that the second parameter specifies the length of the extracted part.



      4) Converting to Upper and Lower Case


//   A string is converted to upper case with toUpperCase():

//   let text1 = "Hello World!";
let text2 = text1.toUpperCase();


//   A string is converted to lower case with toLowerCase():


//   let text1 = "Hello World!";      
let text2 = text1.toLowerCase();



5) JavaScript String concat()


// let text1 = "Hello";
// let text2 = "World";
let text3 = text1.concat(" ", text2);

// o/p Hello World



// // These two lines do the same:
// text = "Hello" + " " + "World!";
// text = "Hello".concat(" ", "World!");


Note
All string methods return a new string.They don't modify the original string.

Strings are immutable: Strings cannot be changed, only replaced.



6) JavaScript String trim()

The trim() method removes whitespace from both sides of a string



7) JavaScript String repeat()

// The repeat() method returns a string with a number of copies of a string.

// The repeat() method returns a new string.

// The repeat() method does not change the original string.

// let text = "Hello world!";
// let result = text.repeat(2);



8) Replacing String Content

// The replace() method replaces a specified value with another value in a string

// let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");

The replace() method returns a new string.
The replace() method replaces only the first match




If you want to replace all matches, use a regular expression with the / g flag set.


// eg

let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace(/MICROSOFT/g, "W3Schools");

To replace case insensitive, use a regular expression with an / i flag(insensitive):



9) Converting a String to an Array *********************************************************************************************


                                         
                              ************* JavaScript String split() *****************




    Example 1: Split by a space character

const str = "Hello World";
const result = str.split(" ");
console.log(result); 
// Output: ['Hello', 'World']

   
Example 2: Split by a specific character

const str = "apple,banana,orange";
const result = str.split(",");
console.log(result); 
// Output: ['apple', 'banana', 'orange']

Example 3: Using a limit

const str = "apple,banana,orange";
const result = str.split(",", 2); // Split at the comma, but limit to 2 splits
console.log(result); 
// Output: ['apple', 'banana']

Example 4: Split into individual characters


const str = "Hello";
const result = str.split("");
console.log(result); // Output: ['H', 'e', 'l', 'l', 'o']


Example 5: Split by a regular expression

const str = "apple1banana2orange";
const result = str.split(/[0-9]/); // Split by any digit
console.log(result); // Output: ['apple', 'banana', 'orange']





---------------------------------------------------------------------- JavaScript String Search ---------------------------------------------------


• JavaScript String indexOf()

The indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found:

// ex
// let text = "Please locate where 'locate' occurs!";
// let index = text.indexOf("locate");
// o/p 7

• JavaScript String lastIndexOf()

The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:

// ex
// let text = "Please locate where 'locate' occurs!";
// let index = text.lastIndexOf("locate");
// o/p 21

NOTE : Both indexOf(), and lastIndexOf() return -1 if the text is not found


The lastIndexOf() methods searches backwards (from the end to the beginning), 
meaning: if the second parameter is 15, the search starts at position 15, and searches to the beginning of the string.




•  JavaScript String search()
// The search() method searches a string for a string (or a regular expression) and returns the position of the match

// ex
// let text = "Please locate where 'locate' occurs!";
// let index = text.search("locate");
// o/p 7






Did You Notice?

The two methods, indexOf() and search(), are equal?

The two methods are NOT equal. These are the differences:

The search() method cannot take a second start position argument.
The indexOf() method cannot take powerful search values (regular expressions).






• JavaScript String match()

The match() method returns an array containing the results of matching a string against a string (or a regular expression).

// eg
// let text = "The rain in SPAIN stays mainly in the plain";
// text.match(/ain/g);



• JavaScript String includes()

The includes() method returns true if a string contains a specified value.
Otherwise it returns false.

// eg
// let text = "Hello world, welcome to the universe.";
// text.includes("world");
// o/p true


Check if a string includes "world". Start at position 12:

let text = "Hello world, welcome to the universe.";
text.includes("world", 12);




• JavaScript String startsWith() and JavaScript String endsWith()


The endsWith() method returns true if a string ends with a specified value.
Otherwise it returns false:



-------------------------------------------- JavaScript Template Strings -----------------------------------------------------------------


_Interpolation_

// Template String provide an easy way to interpolate variables and expressions into strings.

// The method is called string interpolation.

The syntax is:

${...}


• Variable Substitutions

let firstName = "John";
let lastName = "Doe";

let text = `Welcome ${firstName}, ${lastName}!`;


// Automatic replacing of variables with real values is called string interpolation.









































