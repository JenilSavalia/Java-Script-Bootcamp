// 21. **Count the Frequency of Each Element in an Array**  
//     - Task: Write a function that counts the frequency of each element in an array.  
//     - Test: `countFrequency([1, 2, 2, 3, 3, 3])`  
//     - Expected Output: `{1: 1, 2: 2, 3: 3}`


function countFrequency(array) {

    let obj = {};

    for (i = 0; i < array.length; i++) {

        if (!obj.hasOwnProperty(array[i])) {
            obj[array[i]] = 1;
        }
        else {
            obj[array[i]] = obj[array[i]] + 1;
        }

    }

    console.log(obj)
    let key = 0;
 

    for (let x in obj) {

        if (obj[x] > max) {

            key = obj[x]
        }

    }
console.log(key)

}

let arr = [1, 2, 2, 3, 3, 3, 1];
countFrequency(arr)