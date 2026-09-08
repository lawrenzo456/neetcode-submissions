class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if (s.length !== t.length) return false;
        const sMap = new Map();
        for (let letter of s) {
            if (sMap.has(letter)) {
                sMap.set(letter, sMap.get(letter) +1 || 0);
            }
            else {
                sMap.set(letter, 1);
            }
        }
        console.log(sMap);

        for (let letter of t) {
            if (sMap.has(letter)) {
                if (sMap.get(letter) <0) return false; //no more of that letter to check
                sMap.set(letter, sMap.get(letter) -1);
            }
            //doesn't have the letter
            else return false;
        }
        //need to check that all the values of sMap are 0

        for (let letter of s) {
            if (sMap.get(letter) >0) return false;
        }
        // console.log(sMap);
        return true;
    }
}
