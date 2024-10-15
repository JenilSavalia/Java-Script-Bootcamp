// 24. **Find the Longest Consecutive Sequence in an Array**  
//     - Task: Write a function that finds the longest consecutive sequence in an array.  
//     - Test: `longestConsecutive([100, 4, 200, 1, 3, 2])`  
//     - Expected Output: `4` (sequence is `[1, 2, 3, 4]`)




function longestConsecutive(array) {

    // step 1 => sorting the array

    for (i = 0; i < array.length; i++) {
        for (j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                temp = array[i]
                array[i] = array[j]
                array[j] = temp;
            }
        }
    }

    // step 2 => checking consecutive sequence and counting length > pushing lens o temp array (seq_size)

    let count = 1;
    let seq_size = [];
    for (k = 0; k < array.length; k++) {

        if (array[k + 1] == (array[k] + 1)) {
            count = count + 1
            // console.log(k,"yes")
        }
        else {
            // console.log(k,"no")
            // console.log(count)
            seq_size.push(count)
            count = 1;
        }
    }

// sorting temp array (seq_size) of different sequence sizes and displaying largest sequence number
    seq_size.sort((a, b) => b - a)
    return seq_size[0]

}
longestConsecutive([7, 4, 8, 1, 3, 2, 9])

