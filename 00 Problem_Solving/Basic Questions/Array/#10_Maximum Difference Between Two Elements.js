// <!-- 16. **Find the Maximum Difference Between Two Elements in an Array**  
//     - Task: Write a function that finds the maximum difference between any two elements in an array.  
//     - Test: `maxDifference([2, 3, 10, 6, 4, 8, 1])`  
//     - Expected Output: `8` -->



function maxDifference(array) {

    let max = array[0] - array[1];

    for (i = 0; i < array.length; i++) {

        for (j = i + 1; j < array.length; j++) {
            if (array[i] - array[j] > max) {
                max = array[i] - array[j]
            }
        }

    }

console.log(max)

}

maxDifference([2, 3, 10, 6, 4, 8, 1])