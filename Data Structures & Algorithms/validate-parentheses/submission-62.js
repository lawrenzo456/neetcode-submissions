class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {

        const openToClose = new Map  ();
        openToClose.set( "{" , "}")
        openToClose.set( "[" , "]")
        openToClose.set( "(" , ")")
  
        const closeToOpen = new Map();
        closeToOpen.set("}", "{");
        closeToOpen.set("]", "[");
        closeToOpen.set(")", "(");

        const parenStack = [];
        if (!s || s.length%2 !==0) return false;

        for (const paren of s) {
            if (openToClose.has(paren)) {
                //this means that the current paren is an opening parenthesis
                parenStack.push(paren);
                console.log("parenstack ", parenStack);

            }
            else {
                //paren is a closing parenthesis
                if (!closeToOpen.has(paren)) return false;
                const lastParen = parenStack[parenStack.length-1]; //this should be an opening paren
                console.log('last paren ', lastParen);
                if (parenStack && paren === openToClose.get(lastParen)) {
                   console.log( parenStack.pop()); //they match
                }
                else return false;
//stack empty but there's still a closing bracket, or closing parenthesis doesn't match with last paren on the stack
            }
            // console.log('paren ', paren, " parenStack ", parenStack)
        }
        // console.log(parenStack)
        //list is empty after popping all elements
        if (parenStack.length === 0) return true
        else return false;
    }
}
