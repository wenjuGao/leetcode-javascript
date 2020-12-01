/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let len = s.length,
        dp = Array.from({ length: len }, () => Array(len)),
        _result = ''
    for (let l = 0; l < len; ++l) {
        for (let i = 0; i + l < len; ++i) {
            let j = i + l
            if (l === 0) {
                dp[i][j] = true
            } else if (l === 1) {
                dp[i][j] = s[i] === s[j]
            } else {
                dp[i][j] = s[i] === s[j] && dp[i + 1][j - 1]
            }
            if (dp[i][j] && l + 1 > _result.length) {
                _result = s.substring(i, i + l + 1)
            }
        }
    }
    return _result
};
