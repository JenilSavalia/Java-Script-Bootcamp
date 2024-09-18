// INDEX
// Q1_Find length of array without using length function 
// Q2_find the missing num in  unsorted array  ***
// Q_3 Sorting the array ( kind of bubble sort algorithm) ***
// Q_4 & Q_5 sort given array [0,0,0,1,0,1,]



// Q1_Find length of array without using length function 

// let arr = [1, 3, 2, 4, 5, 8, 7]
// let count = 0
// for (i = 0; arr[i] != undefined; i++) {
//     count = count + 1
// }



// Q2_find the missing num in  unsorted array


// Method_1 (Checking each element)
//outer loop will iterate form min element to max element ie 8

// for (i = 1; i < 8; i++) {

//     // inner loop will iterate in array and check missing number
//     for (j = 0; j < count; j++) {
//         found = false
//         if (i == arr[j]) {
//             found = true;
//             break;
//         }

//     }

//     if (!found) {
//         console.log(i)
//         break;
//     }
// }


// Method_2 (Sum of n natural numbers)

// let sum = 0;
// let original_sum = 36
// for(i=0;i<arr.length;i++){
//     sum = sum + arr[i]
// }
// console.log("missing Num",original_sum-sum)



// Q_3 Sorting the array ( kind of bubble sort algorithm)

// let arr = [1, 3, 2, 4, 5, 8, 7]

// for (i = 0; i < arr.length; i++) {

//     for (j = i + 1; j < arr.length; j++) {
//         let temp = 0;
//         if (arr[i] > arr[j]) {
//             temp = arr[i]
//             arr[i] = arr[j]
//             arr[j] = temp
//         }
//     }

// }
// console.log("Final",arr)


// Q_4 sort given array


// Method_1 ()Using Extra Sapce

// let arr = [0, 0, 1, 0, 1, 0, 1]
// let zro_count = 0
// let one_count = 0
// let arr1 = []
// for (i = 0; i < arr.length; i++) {
//     if (arr[i] == 0) {
//         zro_count++
//     }
//     if (arr[i] == 1) {
//         one_count++
//     }
// }
// for (i = 1; i <= zro_count; i++) {
//     arr1.push(0)
// }
// for (i = 1; i <= one_count; i++) {
//     arr1.push(1)
// }
// console.log(arr1)



// Method_2 (one count is deleted)

// let arr = [0, 0, 1, 0, 1, 0, 1]
// let zro_count = 0

// let arr1 = []
// for (i = 0; i < arr.length; i++) {
//     if (arr[i] == 0) {
//         zro_count++
//     }

// }
// for (i = 1; i <= zro_count; i++) {
//     arr1.push(0)
// }
// for (i = 1; i <= arr.length - zro_count; i++) {
//     arr1.push(1)
// }
// console.log(arr1)




// Q_5 Sort the following array
// let arr = [0, 0, 1, 2, 2, 0, 1, 0]
// let zro_count = 0
// let one_count = 0
// let arr1 = []
// for (i = 0; i < arr.length; i++) {
//     if (arr[i] == 0) {
//         zro_count++
//     }
//     if (arr[i] == 1) {
//         one_count++
//     }
// }
// for (i = 1; i <= zro_count; i++) {
//     arr1.push(0)
// }
// for (i = 1; i <= one_count; i++) {
//     arr1.push(1)
// }
// for (i = 1; i <= arr.length-(one_count+zro_count); i++) {
//     arr1.push(2)
// }
// console.log(arr1)


// Q6