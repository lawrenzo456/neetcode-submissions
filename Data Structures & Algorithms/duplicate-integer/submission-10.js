class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

            if (!nums || nums.length <=1) return false;


            // const numsSet = new Set (nums);
            // if (numsSet.size !== nums.length) return true;

            const numsSet = new Set();
            for (const num of nums) {
                if (numsSet.has(num)) return true;
                else (numsSet.add(num))
            }

            return false;
    }
}
