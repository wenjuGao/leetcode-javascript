/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    const num = parseInt(s, 10)
    if (isNaN(num)) return 0
    return num >= 0 ? Math.min(num, 2 ** 31 - 1) : Math.max(num, -(2 ** 31))
};
