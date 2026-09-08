class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

            if (!nums || nums.length <=1) return false;
            const numsSet = new Set (nums);

            if (numsSet.size !== nums.length) return true;

            return false;
    }
}
