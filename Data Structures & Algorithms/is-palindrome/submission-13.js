class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        //input = a string consisting of numbers, letters, and other ascii characters
        //output = boolean 
        //i'd like to work with a clean string first consisting of only letters, then turning them all lowercase for ease of comparison
        //then i'd compare the letters at each end of the string to each other until they hit the middle:
            //if the characters aren't the same at any point, it's not a palindrome
            //if the ends meet or cross each other, then it's a palindrome

        const cleanedString = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
        console.log('cleaned string: ', cleanedString);
        // if (s === ' ') return true;
        if (cleanedString.length ===1) return true
        for (let i = 0; i < Math.ceil(cleanedString.length/2); i++) {
            const backChar = cleanedString[cleanedString.length-1-i];
            if (cleanedString[i] !== backChar) return false;
        }
        return true;
    }
}
