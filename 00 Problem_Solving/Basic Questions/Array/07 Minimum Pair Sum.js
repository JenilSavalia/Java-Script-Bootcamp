// <!-- . **Find the Pair of Elements with the Minimum Sum in an Array**  
//     - Task: Write a function that finds the pair of elements with the minimum sum in an array.  
//     - Test: `minSumPair([1, 2, 3, 4, 5])`  
//     - Expected Output: `[1, 2]` -->


function minSumPair(array) {

    let min = array[0] + array[1];
    let index1 = 0;
    let index2 = 1;

    for (i = 0; i < array.length; i++) {

        for (j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] < min) {
                min = array[i] + array[j]
                index1 = i;
                index2 = j;
            }
        }

    }

    console.log(array[index1],array[index2])

}

minSumPair([-10, -20, -30, -40])
