// 12. **Find the Union of Two Arrays**  
//     - Task: Write a function that returns the union of two arrays.  
//     - Test: `findUnion([1, 2, 3], [2, 3, 4])`  
//     - Expected Output: `[1, 2, 3, 4]`


function findUnion(arr1, arr2) {
    
    for (i = 0; i < arr2.length; i++) {
        let found = false; // Set 'found' to false initially

        for (j = 0; j < arr1.length; j++) {

            if (arr2[i] == arr1[j]) {
                found = true; // Set to true if a match is found
                break; // No need to check furtherxx
            }

        }
        if(!found){ // If the element was not found in arr1, add it
            arr1.push(arr2[i])
        }

    }
console.log(arr1)

}
findUnion([1, 2, 3], [2, 3, 4])
