nums = [2, 1, 4, 1, 2]


for (i = 0; i < nums.length; i++) {
    let check = false
    for (j = i + 1; j < nums.length; j++) {

        if (nums[i] == nums[j]) {
            check = true
            break;
        }

    }
    if (!check) {
        console.log(nums[i])
    }
}