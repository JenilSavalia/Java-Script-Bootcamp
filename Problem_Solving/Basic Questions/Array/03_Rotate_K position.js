function rotateArray(array, steps) {

    let tmp = []

    for (i = (arr.length) - steps; i < arr.length; i++) {
        tmp.push(arr[i])
    }

    for (i = 0; i < (arr.length) - steps; i++) {
        tmp.push(arr[i])
    }

    console.log(tmp)

}
let arr = [1, 2, 3, 4, 5]
rotateArray(arr, 4);