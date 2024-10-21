// 15. **Convert a String to an Array of Words**
//     - Task: Write a function that converts a string to an array of words.
//     - Test:
//       ```javascript
//       console.log(stringToWords("This is a test"));
//       ```
//     - Expected Output: `["This", "is", "a", "test"]`


function stringToWords(string) {

    let array = string.split(" ");
    console.log(array)
}


// Without Inbult Function

function stringToWords(string) {
    var array = [];
    let tempStr = "";
    for (i = 0; i < string.length; i++) {
        if (string[i] == " ") {
            array.push(tempStr);
            tempStr = ""
        }
        else {
            tempStr += string[i]
        }
    }
    array.push(tempStr)
    return array;
}

console.log(stringToWords("This is a test"))

