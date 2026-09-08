class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        //input = an array of numbers & a value k that refers to the number of most frequent elements that we want
        //output = an array of k elements that occur most frequently in the array
        //i see frequency, so immediate thoughts are a frequency map
        //the results array will be length k
        //first i'll create a frequency table, 
        //then i'll iterate through the map ktimes, pushing the greatest value into an array, or another datastructure
        //while k>0 {max = map.get(0) for (let [key, value] of map) 
        //if max = math.max(max, value), then k-=1, and push key, and delete val from map} -> this ends up being a nested loop.

        const freq = new Map();
        const results = []; //will be length k

        for (let i = 0; i < nums.length; i++) {
            let curr = nums[i];
            // if (!freq.has(curr)) {
            //     freq.set(curr,)
            // }
            freq.set(curr, (freq.get(curr) || 0) +1);
        }
        // console.log(freq)

            // while (k>0) {
            //     let max = -Infinity;
            //     let num = 0;
            //     for (let [key, value] of freq) {
            //         if (value > max) {
            //             num = key;
            //             max = value;
            //         }
            //     }
            //     k-=1;
            //     results.push(num)
            //     freq.delete(num);
            // }    
     const buckets =  Array.from({length:nums.length+1}, () => []);
    //  console.log(buckets);
    for (const [number, frequency] of freq) {
        buckets[frequency].push(number);
    }
    for (let i = buckets.length-1; i >= 0; i--) {
        if (buckets[i].length>0) {
            for (const num of buckets[i]) {
                    results.push(num);
                    if (results.length === k) return results;
            }
        }
    }

    return results;
    }
}
