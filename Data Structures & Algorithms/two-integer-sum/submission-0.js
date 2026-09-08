class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        if (nums.length === 0 || !nums) return [];
        const results = [];

        const numsMap = new Map();

        for (let i = 0; i < nums.length; i++) {
            const complement = target-nums[i]
            if (numsMap.has(complement)) {
                results.push(numsMap.get(complement));
                results.push(i);
                // console.log(results);
                // results = [numsMap.get(complement), i];
                return results;
            }
            else numsMap.set(nums[i], i);
        }
        
    return results;
    }
}
