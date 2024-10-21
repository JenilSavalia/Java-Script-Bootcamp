// # 20. **Remove All Instances of a Substring**
// #     - Task: Write a function that removes all instances of a substring from a string.
// #     - Test:
// #       ```javascript
// #       console.log(removeSubstring("This is a test. This is only a test.", "test"));
// #       ```
// #     - Expected Output: `"This is a . This is only a ."`




function removeSubstring(string, substring) {

    let myArray = string.split(" ");
    let Output = "";

    for (i = 0; i < myArray.length; i++) {

        if (myArray[i] != substring) {
            Output += myArray[i] + " ";
        }
    }
console.log
console.log(Output)

}
removeSubstring("This is a test. This is only a test.", "test")