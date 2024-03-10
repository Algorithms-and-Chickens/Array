function intersection(nums1: number[], nums2: number[]): number[] {
    //Using set to avoid duplicate
    const setNum1 = new Set(nums1);
    const setNum2 = new Set(nums2);
    let result = [];

    for (const e of setNum1){
        if (setNum2.has(e)){
            result.push(e);
        }
    }

    return result;
};