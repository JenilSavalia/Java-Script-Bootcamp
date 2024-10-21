// 18. **Find the Pair of Elements with the Maximum Sum in an Array**  
//     - Task: Write a function that finds the pair of elements with the maximum sum in an array.  
//     - Test: `maxSumPair([1, 2, 3, 4, 5])`  
//     - Expected Output: `[4, 5]`



function minSumPair(array) {

    let max = array[0] + array[1];
    let index1 = 0;
    let index2 = 1;

    for (i = 0; i < array.length; i++) {

        for (j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] > max) {
                min = array[i] + array[j]
                index1 = i;
                index2 = j;
            }
        }

    }

    console.log(array[index1],array[index2])

}

minSumPair([1, 2, 3, 4, 5])
