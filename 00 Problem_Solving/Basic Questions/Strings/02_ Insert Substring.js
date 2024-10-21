// 19. **Insert a Substring at a Specific Position in a String**
//     - Task: Write a function that inserts a substring at a specific position in a string.
//     - Test:
//       ```javascript
//       console.log(insertSubstring("Hello World", "Beautiful ", 6));
//       ```
//     - Expected Output: `"Hello Beautiful World"`



// note : In JavaScript, strings are immutable, meaning you cannot change a character directly by
//  accessing its index. If you want to replace a character in a string,
//   you'll need to create a new string.



function insertSubstring(string, substring, index) {

    let Output = "";

    for (i = 0; i < string.length; i++) {

        if (i == index) {
            Output +=substring;
        }
        Output += string[i]


    }
console.log(Output)
}insertSubstring("Hello World", "Beautiful ", 6)