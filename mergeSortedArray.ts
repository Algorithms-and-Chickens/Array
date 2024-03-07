/**
Do not return anything, modify nums1 in-place instead.
Example 1:
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
 */
// Time Complexity: O(n)
// Space Complexity: O(1)
function merge(nums1: number[], m: number, nums2: number[], n: number): number[] {
    let point1: number = m - 1;
    let point2: number = n - 1;
    let k: number = m + n - 1;
    while (point2 >= 0) {
        if (point1 >= 0 && nums1[point1] > nums2[point2]) {
            nums1[k] = nums1[point1];
            point1--;
        } else {
            nums1[k] = nums2[point2];
            point2--;
        }
        k--; //position
    }
    
    return nums1;
};