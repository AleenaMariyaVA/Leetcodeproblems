/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
function findFinalValue(nums, original) {
    while (nums.includes(original)) {
        original = original * 2;
    }
    return original;
}

