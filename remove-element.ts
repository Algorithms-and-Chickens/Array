// TC: O(n)
// SC: O(1)

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

/*
Explain: Use k is a reset index. if found an item equal val, set item is the new value at "k" and increase "k"
*/
var removeElement = function(nums, val) {
    let i, k = 0;
        for (i = 0; i < nums.length; i++) {
            if (nums[i] != val) {
                nums[k++] = nums[i];
            }
        }
    return k;
};