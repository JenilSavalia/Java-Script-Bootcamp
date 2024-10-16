// <!-- 22. **Find the Most Frequent Element in an Array**  
//     - Task: Write a function that finds the most frequent element in an array.  
//     - Test: `mostFrequent([1, 2, 2, 3, 3, 3])`  
//     - Expected Output: `3` -


function mostFrequent(array) {

    // creating object and storing frequency in key:value format
        let object = {};
        for (i = 0; i < array.length; i++) {
    
            if (!object.hasOwnProperty(array[i])) {
                object[array[i]] = 1;
            }
            else{
                object[array[i]] = object[array[i]] + 1;
            }
    
        }
    
    
    // obtaining max frewuency from iterating object
    
       let key = 0;
     
        for (let x in object) {
    
            if (object[x] > key) {
    
                key = object[x]
            }
    
        }
    console.log(key)
    
    
    }
    
    mostFrequent([1, 2, 2, 3, 3, 3,4,4,4,4])
    