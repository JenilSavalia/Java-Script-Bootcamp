let arr = [1, 3, 2, 4, 5, 8, 7]

for (i = 0; i < arr.length; i++) {

    for (j = i + 1; j < arr.length; j++) {
        
        if (arr[i] > arr[j]) {
            temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
    }

}
console.log("Final",arr)