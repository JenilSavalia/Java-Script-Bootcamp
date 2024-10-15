// 23. **Find the Longest Increasing Subsequence in an Array**  
//     - Task: Write a function that finds the longest increasing subsequence in an array.  
//     - Test: `longestIncreasingSubsequence([10, 22, 9, 33, 21, 50, 41, 60, 80])`  
//     - Expected Output: `[10, 22, 33, 50, 60, 80]`


function longestIncreasingSubsequence(array) {


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


    





}