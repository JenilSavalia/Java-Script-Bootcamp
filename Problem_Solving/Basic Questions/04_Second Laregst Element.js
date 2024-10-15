
function secondlargest(array) {

    let max = array[0];

    for (i = 0; i < array.length; i++) {

        if (array[i] > max) {
            max = array[i];
            index = i;
        }

    }
    array.splice(index, 1)

    let max2 = array[0]
    for (i = 0; i < array.length; i++) {

        if (array[i] > max2) {
            max2 = array[i];
            index = i;
        }

    }

    console.log(max2)
}

let arr = [3, 5, 7, 2, 8, 10, 6];
secondlargest(arr);