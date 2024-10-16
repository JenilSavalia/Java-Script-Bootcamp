// 23. **Find the Longest Increasing Subsequence in an Array**  
//     - Task: Write a function that finds the longest increasing subsequence in an array.  
//     - Test: `longestIncreasingSubsequence([10, 22, 9, 33, 21, 50, 41, 60, 80])`  
//     - Expected Output: `[10, 22, 33, 50, 60, 80]`


function longestIncreasingSubsequence(array) {


    let output = [];
    
        for (i = 0; i < array.length; i++) {
            
            if(array[i]>array[i+1]){
                output.push(array[i])
            }
            
        }
    
    console.log(output)
    }
    
    longestIncreasingSubsequence([10, 22, 9, 33, 21, 50, 41, 60, 80])