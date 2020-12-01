/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let map = new Map(),
    _result = 0,
    num = 0
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      num = Math.max(map.get(s[i]) + 1, num)
    }
    _result = Math.max(_result, i - num + 1)
    map.set(s[i], i)
  }
  return _result
};
