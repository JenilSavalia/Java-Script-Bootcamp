// 11. **Find the Intersection of Two Arrays**  
//     - Task: Write a function that returns the intersection of two arrays.  
//     - Test: `findIntersection([1, 2, 3], [2, 3, 4])`  
//     - Expected Output: `[2, 3]`


function findIntersection(arr1, arr2) {
    let final = []
    for (i = 0; i < arr1.length; i++) {

        for (j = 0; j < arr2.length; j++) {

            if (arr1[i] == arr2[j]) {
                final.push(arr1[i])
            }
        }

    }
    console.log(final)
}

findIntersection([1, 2, 3, 5], [2, 3, 4, 5])