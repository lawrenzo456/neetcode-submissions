class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

            if (!nums) return false;
            const numsSet = new Set (nums);

            if (numsSet.size !== nums.length) return true;

            return false;
    }
}
