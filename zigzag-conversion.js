/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) return s
    let len = Math.min(s.length, numRows),
        list = Array(len).fill(''),
        index = 0,
        turn = false
    for (let i = 0; i < s.length; i++) {
        list[index] = list[index] + s[i]
        // 转向
        if (index === 0 || index === numRows - 1) turn = !turn
        if (turn) {
            index++
        } else {
            index--
        }
    }
    return list.join('') 
};
