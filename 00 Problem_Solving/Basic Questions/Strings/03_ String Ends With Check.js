// 18. **Check if a String Ends with a Specific Substring**
//     - Task: Write a function that checks if a string ends with a given substring.
//     - Test:
//       ```javascript
//       console.log(endsWith("hello world", "world"));
//       console.log(endsWith("hello world", "hello"));
//       ```
//     - Expected Output:
//       ```javascript
//       true
//       false

function endsWith(String, substring) {

    let array = String.split(" ");

    if (substring == array[array.length - 1]) {
        console.log(true)
    }
    else {
        console.log(false)
    }

}
