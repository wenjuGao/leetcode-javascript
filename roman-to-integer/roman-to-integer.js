/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    // 按照表示数值的大小建立有序哈希数值
    const hashList = {
        'M':1000,
        'CM':900,
        'D':500,
        'CD':400,
        'C':100,
        'XC':90,
        'L':50,
        'XL':40,
        'X':10,
        'IX':9,
        'V':5,
        'IV':4,
        'I':1
    }
    let _result = 0,
        index = 0
    while(index < s.length){
        const str = s[index] + (s[index +1]||'')
        if(hashList[str]){
            _result += hashList[str]
            index+=2
        }else{
           _result += hashList[s[index]] 
            index++
        }
    }
    return _result
};
