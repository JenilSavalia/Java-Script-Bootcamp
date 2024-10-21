// 14. **Find the Difference of Two Arrays**  
//     - Task: Write a function that returns the difference of two arrays 
// (elements in the first array that are not in the second array).  
//     - Test: `findDifference([1, 2, 3], [2, 3, 4])`  
//     - Expected Output: `[1]`


function findDifference(arr1, arr2) {

    for (i = 0; i < arr1.length; i++) {
        let found = false;
        for (j = 0; j < arr2.length; j++) {

            if (arr1[i] == arr2[j]) {
                found = true;
            }
        }
        if (!found) {
            console.log(arr1[i])
            break;
        }
    }
}
findDifference([1, 2, 3, 5], [2, 3, 4])