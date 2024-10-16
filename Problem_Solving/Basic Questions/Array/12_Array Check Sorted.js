// 13. **Check if an Array is Sorted**  
//     - Task: Write a function that checks if an array is sorted in ascending order.  
//     - Test: `isSorted([1, 2, 3, 4, 5])`  
//     - Expected Output: `true`


function isSorted(array) {
    let check = true
    for (i = 0; i < array.length - 1; i++) {
        if (array[i + 1] < array[i]) {
            check = false
            break;
        }
    }
console.log(check)
}
isSorted([1, 2, 3, 4, 5])