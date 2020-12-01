/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let _result = changeItem(Math.abs(x));
    if(_result > 2**31) return 0
    return x > 0 ? _result : _result * -1
    function changeItem(s){
        return parseInt(String(s).split('').reverse().join(''),10)
    }
};
