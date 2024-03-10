// TC: O(n)
// SC: O(n)

function productExceptSelf(nums: number[]): number[] {
    const n = nums.length;
    
    // Initialize arrays for prefix and suffix products
    const prefixProducts: number[] = new Array(n).fill(1);
    const suffixProducts: number[] = new Array(n).fill(1);
    
    // Calculate prefix products
    let prefix = 1;
    for (let i = 0; i < n; i++) {
        prefixProducts[i] = prefix;
        prefix *= nums[i];
    }
    
    // Calculate suffix products
    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
        suffixProducts[i] = suffix;
        suffix *= nums[i];
    }
    
    // Calculate the final result
    const result: number[] = [];
    for (let i = 0; i < n; i++) {
        result.push(prefixProducts[i] * suffixProducts[i]);
    }
    
    return result;
};