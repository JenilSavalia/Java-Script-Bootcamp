// 9. **Remove Duplicates from an Array**  
//    - Task: Write a function that removes duplicate elements from an array.  
//    - Test: `removeDuplicates([1, 2, 2, 3, 4, 4, 5])`  
//    - Expected Output: `[1, 2, 3, 4, 5]`



// Using Inbuilt Function array.includes()

function removeDuplicates(array) {

    let output = []

    for (i = 0; i < array.length; i++) {

        if (!output.includes(array[i])) {
            output.push(array[i])
        }

    }
    console.log(output);

}
removeDuplicates([1, 2, 2, 3, 4, 4, 5])


// Without Using Inbuit function



function removeDuplicates(array) {

    let output = []

    for (i = 0; i < array.length; i++) {
        let found = false;
        for (j = 0; j < output.length; j++) {
            if (array[i] === output[j]) {
                found = true
                break;
            }
        }

        if (!found) {
            output.push(array[i])
        }

    }
    console.log(output);

}
removeDuplicates([1, 2, 2, 3, 4, 4, 5])