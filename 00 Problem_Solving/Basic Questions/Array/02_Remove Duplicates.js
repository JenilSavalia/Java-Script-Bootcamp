function removeDuplicates(arr) {
    let uniqueArray = [];
  
    for (let i = 0; i < arr.length; i++) {
      let isDuplicate = false;
  
      // Check if the current element already exists in uniqueArray
      for (let j = 0; j < uniqueArray.length; j++) {
        if (arr[i] === uniqueArray[j]) {
          isDuplicate = true;
          break;
        }
      }
  
      // If no duplicate was found, add the element to uniqueArray
      if (!isDuplicate) {
        uniqueArray.push(arr[i]);
      }
    }
  
    return uniqueArray;
  }
  
  const result = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
  console.log(result);  // Output: [1, 2, 3, 4, 5]
  