/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    // 按照表示数值的大小建立有序哈希数值
    const hashList = [
        { key: 'M', value: 1000 },
        { key: 'CM', value: 900 },
        { key: 'D', value: 500 },
        { key: 'CD', value: 400 },
        { key: 'C', value: 100 },
        { key: 'XC', value: 90 },
        { key: 'L', value: 50 },
        { key: 'XL', value: 40 },
        { key: 'X', value: 10 },
        { key: 'IX', value: 9 },
        { key: 'V', value: 5 },
        { key: 'IV', value: 4 },
        { key: 'I', value: 1 }
    ]
​
    let _result = ''
    for (let item of hashList) {
        // 遍历哈希数值从大到小将num准换成罗马数值
        while (item.value <= num) {
            num -= item.value
            _result = _result + item.key
        }
    }
    return _result
};
