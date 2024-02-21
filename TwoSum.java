/**
 * 1. Two Sum
 * 
 * Given an array of integers nums and an integer target, return indices of the
 * two numbers such that they add up to target.
 * 
 * You may assume that each input would have exactly one solution, and you may
 * not use the same element twice.
 * 
 * You can return the answer in any order.
 */
public class TwoSum {
    public int[] twoSum(int[] nums, int target) {
        if (nums.length < 2) return null;

        int[] result = new int[2];
        int i = 1;
        while (i < nums.length) {
            for (int j = 0; i+j < nums.length; j++) {
                if (nums[j] + nums[i+j] == target) {
                    result[0] = j;
                    result[1] = i+j;
                    return result;
                }
            }
            i++;
        }
        return null;
    }
}
