// TC: O(n)
// SC: O(1)

function plusOne(digits: number[]): number[] {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] === 9) {
            digits[i] = 0; // Set the current digit to 0 and continue to the next one
        } else {
            digits[i] += 1; // Increment the current digit and break the loop
            break;
        }
    }

    //case: all of items are 9
    if (digits[0] === 0) {
        digits.unshift(1); 
    }

    return digits;
};