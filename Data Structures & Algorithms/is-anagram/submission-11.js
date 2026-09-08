class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if (!s || !t) return false;
        if (s.length !== t.length) return false;
        const sMap = new Map();
        for (const letter of s) {

            if (sMap.has(letter)) {
                sMap.set(letter, sMap.get(letter) +1 || 0)
        // console.log(sMap);

            }
            else {
                sMap.set(letter, 1)
            }
        }
        // console.log(sMap);
        for (const letter of t) {
            if (!sMap.has(letter)) return false;
            else {
                sMap.set(letter, sMap.get(letter) -1);
                if (sMap.get(letter) <0) return false;
            }
        }
        return true;
    }
}
