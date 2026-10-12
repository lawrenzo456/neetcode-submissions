class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        if (!nums) return -1;
        let left = 0;
        let right = nums.length-1

        while (left <=right) {
            let mid = Math.floor((right - left));
            if (target === nums[mid]) return mid;
            if (target > nums[mid]) {
                left = mid+1;
            }
            else if (target < nums[mid]) {
                right = mid-1;
            }
            else {
                //target not found
                return -1;
                }
        }
        return -1;
    }
}
