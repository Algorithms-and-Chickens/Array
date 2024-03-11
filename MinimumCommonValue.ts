//TC: O(n)
//SC: O(1)

function getCommon(nums1: number[], nums2: number[]): number {
    let point1: number = 0
    let point2: number = 0

    while (point1 < nums1.length && point2 < nums2.length) {
        if (nums1[point1] === nums2[point2]) {
            return nums1[point1];
        } else if (nums1[point1] > nums2[point2]) {
            point2++
        } else {
            point1++;
        }
    }
    return -1;
};