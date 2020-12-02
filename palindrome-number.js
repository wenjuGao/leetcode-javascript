/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
//     双指针
    let str = String(x),
        i = 0,
        j = str.length -1
    while(i < j){
        if(str[i] === str[j]){
            i++
            j--
        }else{
            return false
        }
    }
    return true
};
